# Shared Hosting Deployment Guide (cPanel, Hostinger, WHM)

This project is configured as a React + TypeScript app powered by Vite and Nx, designed to run alongside multiple other applications on a shared server.

Because shared hosting servers (such as those managed by cPanel, Hostinger, or WHM) run on Apache and host multiple applications in subdirectories or subdomains, you must pay attention to **routing**, **base paths**, and **isolated subdirectories**.

---

## 1. Domain and Folder Setup
On shared hosting, you have two primary options for running this application without conflicting with other web apps:

### Option A: Subdomain (Recommended)
Host the app on a dedicated subdomain (e.g., `intertek.yourdomain.com`).
1. In **cPanel/WHM**, go to **Subdomains** (or **Domains** in newer layouts) and create `intertek.yourdomain.com`.
2. Map it to a clean document root directory, e.g., `/public_html/intertek/` or a separate folder outside public_html, like `/intertek/`.
3. If using this setup, keep your base path configuration as `/`.

### Option B: Subdirectory / Folder Path
Host the app in a subdirectory of your main website (e.g., `yourdomain.com/intertek/`).
1. Create a folder named `intertek` inside your main site's directory (usually `public_html/intertek/`).
2. Make sure you set the base path for Vite build (see Section 2).

---

## 2. Base Path Configuration
Vite builds files with relative paths matching a base URL.
In [vite.config.mts](apps/intertek/vite.config.mts), we configured a dynamic base path:
```typescript
base: process.env.BASE_PATH || '/'
```

* **For Subdomain hosting (e.g. `intertek.yourdomain.com`)**: Keep it as `/` (Default).
* **For Subdirectory hosting (e.g. `yourdomain.com/intertek/`)**: Set `BASE_PATH` environment variable during the build to `/intertek/`.

---

## 3. Single-Page Application (SPA) Routing
Because React Router handles navigation client-side, direct browser hits on pages like `yourdomain.com/inspections` will throw a **404 Not Found** on Apache servers.

To resolve this, we have provided a preconfigured [.htaccess](apps/intertek/public/.htaccess) in the public folder. Vite bundles this into the final build directory automatically.

### Configuring `.htaccess`:
* **If deploying to the root domain or subdomain**: No changes are required.
* **If deploying to a subdirectory (`/intertek/`)**:
  Open [apps/intertek/public/.htaccess](apps/intertek/public/.htaccess), comment out the root block, and uncomment the subdirectory block as guided inside that file.

---

## 4. Automatic CD (GitHub Actions)
Our [.github/workflows/deploy.yml](.github/workflows/deploy.yml) file uses **SSH key auth** to upload production assets.

### How to set up:
1. In cPanel, open **SSH Access -> Manage SSH Keys**.
2. Import your public key and authorize it for the cPanel account that owns the site files.
3. In your GitHub Repository, go to **Settings -> Secrets and variables -> Actions**.
4. Add these secrets:
   * `SSH_HOST`: Your server IP or SSH hostname.
   * `SSH_USER`: Your cPanel username, for example `intertekgroup`.
   * `SSH_PORT`: Usually `22`.
   * `SSH_PRIVATE_KEY`: The full private key text from `~/.ssh/id_ed25519`.
   * `SSH_REMOTE_DIR`: The deploy folder on the server. Use the document root for the domain.
   * `DEPLOY_BASE_PATH`: `/` for the root domain, or `/intertek/` for a subdirectory.
   * `SITE_URL`: The public site URL, for example `https://intertekgroup.org`.

Whenever you push code changes or merge pull requests into the `dev` branch, GitHub Actions will automatically:
1. Install node dependencies.
2. Generate SEO assets (`robots.txt` and `sitemap.xml`) for the deployed base path.
3. Build the production bundle.
4. Upload the built files over SSH to the cPanel document root.
