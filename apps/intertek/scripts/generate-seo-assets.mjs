import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

const siteUrl = (process.env.SITE_URL || 'https://www.intertekgroup.org').replace(/\/+$/, '');
const basePath = normalizeBasePath(process.env.BASE_PATH || '/');
const siteRoot = `${siteUrl}${basePath}`;
const today = new Date().toISOString().slice(0, 10);
const discoveryEndpoints = {
  issuer: siteUrl,
  authorization_endpoint: `${siteUrl}/oauth/authorize`,
  token_endpoint: `${siteUrl}/oauth/token`,
  jwks_uri: `${siteUrl}/.well-known/jwks.json`,
  grant_types_supported: ['authorization_code', 'client_credentials', 'refresh_token'],
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
  `${JSON.stringify(discoveryEndpoints, null, 2)}\n`,
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
