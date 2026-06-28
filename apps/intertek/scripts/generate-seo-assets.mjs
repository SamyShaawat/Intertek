import { mkdir, readdir, readFile, rm, writeFile, cp } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const skillsPublicDir = join(publicDir, '.well-known', 'agent-skills');
const skillSourceRoots = [
  join(rootDir, '..', '..', '.agents', 'skills'),
  join(rootDir, '.agents', 'skills'),
  join(rootDir, '.claude', 'skills'),
];

const siteUrl = (process.env.SITE_URL || 'https://www.intertekgroup.org').replace(/\/+$/, '');
const basePath = normalizeBasePath(process.env.BASE_PATH || '/');
const siteRoot = `${siteUrl}${basePath}`;
const today = new Date().toISOString().slice(0, 10);
const { version: appVersion } = JSON.parse(await readFile(join(rootDir, 'package.json'), 'utf8'));
const discoveryEndpoints = {
  issuer: siteUrl,
  authorization_endpoint: `${siteUrl}/oauth/authorize`,
  token_endpoint: `${siteUrl}/oauth/token`,
  revocation_endpoint: `${siteUrl}/oauth/revoke`,
  jwks_uri: `${siteUrl}/.well-known/jwks.json`,
  grant_types_supported: ['authorization_code', 'client_credentials', 'refresh_token'],
};
const serverCard = {
  serverInfo: {
    name: 'Intertek',
    version: appVersion,
  },
  transport: {
    type: 'http',
    endpoint: `${siteUrl}/mcp`,
  },
  capabilities: {
    tools: {},
    resources: {},
    prompts: {},
  },
};
const resourceMetadata = {
  resource: `${siteUrl}/`,
  resource_name: 'Intertek Group',
  resource_documentation: `${siteUrl}/auth.md`,
  authorization_servers: [siteUrl],
  bearer_methods_supported: ['header'],
  scopes_supported: ['public.read'],
};
const agentAuth = {
  skill: `${siteUrl}/auth.md`,
  register_uri: `${siteUrl}/agent/identity`,
  identity_endpoint: `${siteUrl}/agent/identity`,
  claim_uri: `${siteUrl}/agent/identity/claim`,
  claim_endpoint: `${siteUrl}/agent/identity/claim`,
  revocation_uri: `${siteUrl}/oauth/revoke`,
  events_endpoint: `${siteUrl}/agent/event/notify`,
  supported_identity_types: ['anonymous', 'service_auth', 'identity_assertion'],
  identity_types_supported: ['anonymous', 'service_auth', 'identity_assertion'],
  supported_credential_types: ['access_token', 'identity_assertion', 'claim_token'],
  credential_types_supported: ['access_token', 'identity_assertion', 'claim_token'],
  identity_assertion: {
    assertion_types_supported: ['urn:ietf:params:oauth:token-type:id-jag'],
  },
  events_supported: ['https://schemas.workos.com/events/agent/auth/identity/assertion/revoked'],
};
const authMarkdown = `# auth.md

You are an agent. This service supports agentic registration: discover -> register -> (claim if needed) -> exchange for an access_token -> call the API -> handle revocation.

## Discover

1. Fetch the protected resource metadata from \`/.well-known/oauth-protected-resource\`.
2. Use the listed authorization server from \`/.well-known/oauth-authorization-server\`.

## Register

1. Start with \`${siteUrl}/agent/identity\` when you can assert an identity for a user.
2. Use the claim flow at \`${siteUrl}/agent/identity/claim\` when you only have a user challenge.
3. Use the access token with the \`Authorization: Bearer\` header.

## Supported registration methods

- anonymous
- service_auth
- identity_assertion

## Supported credential types

- access_token
- identity_assertion
- claim_token
`;

const apiRoot = `${siteRoot}api/`;
const apiCatalog = {
  linkset: [
    {
      anchor: apiRoot,
      link: [
        {
          rel: 'service-desc',
          href: `${apiRoot}openapi.json`,
          type: 'application/vnd.oai.openapi+json',
        },
        {
          rel: 'service-doc',
          href: apiRoot,
          type: 'text/html',
        },
        {
          rel: 'status',
          href: `${apiRoot}status`,
          type: 'application/json',
        },
      ],
    },
  ],
};

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
];

await mkdir(publicDir, { recursive: true });

await writeFile(
  join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nContent-Signal: ai-train=no, search=yes, ai-input=no\n\nSitemap: ${siteRoot}sitemap.xml\n`,
  'utf8',
);

await mkdir(join(publicDir, '.well-known'), { recursive: true });
await mkdir(join(publicDir, '.well-known', 'mcp'), { recursive: true });

await writeFile(
  join(publicDir, '.well-known', 'openid-configuration'),
  `${JSON.stringify(
    {
      ...discoveryEndpoints,
      response_types_supported: ['code'],
      subject_types_supported: ['public'],
      id_token_signing_alg_values_supported: ['RS256'],
    },
    null,
    2,
  )}\n`,
  'utf8',
);

await writeFile(
  join(publicDir, '.well-known', 'oauth-authorization-server'),
  `${JSON.stringify(
    {
      ...resourceMetadata,
      ...discoveryEndpoints,
      agent_auth: agentAuth,
    },
    null,
    2,
  )}\n`,
  'utf8',
);

await writeFile(
  join(publicDir, '.well-known', 'oauth-protected-resource'),
  `${JSON.stringify(resourceMetadata, null, 2)}\n`,
  'utf8',
);

await writeFile(
  join(publicDir, '.well-known', 'mcp', 'server-card.json'),
  `${JSON.stringify(serverCard, null, 2)}\n`,
  'utf8',
);

await writeFile(
  join(publicDir, 'auth.md'),
  `${authMarkdown}\n`,
  'utf8',
);

await writeFile(
  join(publicDir, '.well-known', 'api-catalog'),
  `${JSON.stringify(apiCatalog, null, 2)}\n`,
  'utf8',
);

await writeFile(
  join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map(
        ({ path, changefreq, priority }) =>
          `  <url>\n` +
          `    <loc>${joinUrl(siteRoot, path)}</loc>\n` +
          `    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>${changefreq}</changefreq>\n` +
          `    <priority>${priority}</priority>\n` +
          `  </url>`,
      )
      .join('\n') +
    '\n</urlset>\n',
  'utf8',
);

await rm(skillsPublicDir, { recursive: true, force: true });
await mkdir(skillsPublicDir, { recursive: true });

const skills = [];
const seenSkillNames = new Set();

for (const sourceSkillDir of await findSkillDirectories(skillSourceRoots)) {
  const sourceSkillFile = join(sourceSkillDir, 'SKILL.md');
  const skillMarkdown = await readFile(sourceSkillFile, 'utf8');
  const { name, description } = parseSkillFrontmatter(skillMarkdown);

  if (seenSkillNames.has(name)) {
    continue;
  }

  seenSkillNames.add(name);

  const targetSkillDir = join(skillsPublicDir, name);
  const supportingFiles = await readdir(sourceSkillDir, { withFileTypes: true });
  const hasSupportingFiles = supportingFiles.some((item) => item.name !== 'SKILL.md');
  const artifactPath = hasSupportingFiles ? `${targetSkillDir}.tar.gz` : join(targetSkillDir, 'SKILL.md');

  if (hasSupportingFiles) {
    await writeArchive(sourceSkillDir, artifactPath);
  } else {
    await cp(sourceSkillDir, targetSkillDir, { recursive: true });
  }

  skills.push({
    name,
    type: hasSupportingFiles ? 'archive' : 'skill-md',
    description,
    url: hasSupportingFiles
      ? `/.well-known/agent-skills/${name}.tar.gz`
      : `/.well-known/agent-skills/${name}/SKILL.md`,
    digest: `sha256:${createHash('sha256').update(await readFile(artifactPath)).digest('hex')}`,
  });
}

await writeFile(
  join(skillsPublicDir, 'index.json'),
  `${JSON.stringify(
    {
      $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
      skills,
    },
    null,
    2,
  )}\n`,
  'utf8',
);

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '/';
  }

  const trimmed = value.trim();
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function joinUrl(base, path) {
  if (path === '/') {
    return base.endsWith('/') ? base : `${base}/`;
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalizedPath}`;
}

function parseSkillFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);

  if (!match) {
    throw new Error('Missing SKILL.md frontmatter.');
  }

  const lines = match[1].split('\n');
  let name = '';
  let description = '';
  let collectingDescription = false;
  const descriptionParts = [];

  for (const line of lines) {
    const topLevelKey = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);

    if (topLevelKey && !line.startsWith(' ')) {
      collectingDescription = false;

      const key = topLevelKey[1];
      const value = (topLevelKey[2] || '').trim().replace(/^"|"$/g, '');

      if (key === 'name') {
        name = value;
      } else if (key === 'description') {
        collectingDescription = true;
        if (value) {
          descriptionParts.push(value);
        }
      }

      continue;
    }

    if (collectingDescription) {
      const value = line.trim();
      if (value) {
        descriptionParts.push(value);
      }
    }
  }

  description = descriptionParts.join(' ').replace(/\s+/g, ' ').trim();

  if (!name || !description) {
    throw new Error('SKILL.md frontmatter must include name and description.');
  }

  return { name, description };
}

async function writeArchive(sourceDir, targetPath) {
  const output = pipeline(createTarStream(sourceDir), createGzip(), createWriteStream(targetPath));
  await output;
}

async function findSkillDirectories(roots) {
  const directories = [];

  for (const root of roots) {
    let entries;

    try {
      entries = await readdir(root, { withFileTypes: true });
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
        continue;
      }

      throw error;
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        directories.push(join(root, entry.name));
      }
    }
  }

  return directories.sort((a, b) => a.localeCompare(b));
}

async function* createTarStream(sourceDir, prefix = '') {
  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const sourcePath = join(sourceDir, entry.name);
    const archivePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      yield* createTarStream(sourcePath, archivePath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const content = await readFile(sourcePath);
    yield createTarEntry(archivePath, content);
  }

  if (!prefix) {
    yield Buffer.alloc(1024);
  }
}

function createTarEntry(name, content) {
  const header = Buffer.alloc(512, 0);
  const size = content.length;

  writeTarString(header, name, 0, 100);
  writeTarOctal(header, 0o644, 100, 8);
  writeTarOctal(header, 0, 108, 8);
  writeTarOctal(header, 0, 116, 8);
  writeTarOctal(header, size, 124, 12);
  writeTarOctal(header, Math.floor(Date.now() / 1000), 136, 12);
  header[156] = '0'.charCodeAt(0);
  writeTarString(header, 'ustar', 257, 6);
  writeTarString(header, '00', 263, 2);

  for (let index = 148; index < 156; index += 1) {
    header[index] = 0x20;
  }

  let checksum = 0;
  for (const byte of header) {
    checksum += byte;
  }
  writeTarOctal(header, checksum, 148, 8);

  const padding = (512 - (size % 512)) % 512;
  return Buffer.concat([header, content, Buffer.alloc(padding, 0)]);
}

function writeTarString(buffer, value, offset, length) {
  buffer.write(value, offset, Math.min(Buffer.byteLength(value), length), 'utf8');
}

function writeTarOctal(buffer, value, offset, length) {
  const octal = value.toString(8).padStart(length - 1, '0');
  buffer.write(octal, offset, Math.min(Buffer.byteLength(octal), length - 1), 'ascii');
  buffer[offset + length - 1] = 0;
}
