import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const canonicalHost = 'https://empresas.superclim.es';

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const matches = (html, pattern) => html.match(pattern) ?? [];
const content = (html, pattern, label, route) => {
  const value = html.match(pattern)?.[1];
  assert(value, `${label} missing: ${route}`);
  return value;
};

const entries = await readdir(dist, { withFileTypes: true });
const pages = new Map();
pages.set('/', await readFile(path.join(dist, 'index.html'), 'utf8'));
for (const entry of entries) {
  if (!entry.isDirectory() || entry.name === 'assets' || entry.name === 'images') continue;
  const htmlPath = path.join(dist, entry.name, 'index.html');
  try {
    pages.set(`/${entry.name}/`, await readFile(htmlPath, 'utf8'));
  } catch {
    // Non-page asset directory.
  }
}

const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapRoutes = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname),
);
const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();

for (const [route, html] of pages) {
  assert(matches(html, /<h1[ >]/g).length === 1, `Expected exactly one H1: ${route}`);
  assert(matches(html, /<title[ >]/g).length === 1, `Expected exactly one title: ${route}`);
  assert(matches(html, /<meta name="description"/g).length === 1, `Expected exactly one description: ${route}`);
  assert(matches(html, /<meta name="robots" content="index, follow, max-image-preview:large"/g).length === 1, `Index/follow missing: ${route}`);
  assert(matches(html, /<meta property="og:/g).length >= 5, `Open Graph incomplete: ${route}`);
  assert(matches(html, /<script type="application\/ld\+json"/g).length >= 1, `JSON-LD missing: ${route}`);
  if (route !== '/') assert(html.includes('"@type":"BreadcrumbList"'), `Breadcrumb schema missing: ${route}`);

  const title = content(html, /<title[^>]*>([^<]+)/, 'Title', route);
  const description = content(html, /<meta name="description" content="([^"]+)/, 'Description', route);
  const canonical = content(html, /<link rel="canonical" href="([^"]+)/, 'Canonical', route);
  assert(!titles.has(title), `Duplicate title: ${title}`);
  assert(!descriptions.has(description), `Duplicate description: ${description}`);
  assert(!canonicals.has(canonical), `Duplicate canonical: ${canonical}`);
  assert(canonical === `${canonicalHost}${route}`, `Canonical mismatch: ${route}`);
  titles.add(title);
  descriptions.add(description);
  canonicals.add(canonical);
  assert(sitemapRoutes.has(route), `Indexable route absent from sitemap: ${route}`);

  const visibleText = html.replace(/<(script|style)\b[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
  assert(!/https?:\/\//.test(visibleText), `Raw URL visible in content: ${route}`);
}

assert(sitemapRoutes.size === pages.size, 'Sitemap contains duplicate, missing, or non-indexable routes');
for (const route of sitemapRoutes) assert(pages.has(route), `Sitemap points to missing route: ${route}`);
assert(!sitemap.includes('vercel.app'), 'Sitemap contains a vercel.app URL');
assert(!sitemap.includes('/404'), 'Sitemap contains the 404 page');

for (const [source, html] of pages) {
  for (const href of [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1])) {
    if (!href.startsWith('/') || href.startsWith('/assets/') || href.startsWith('/images/') || href === '/favicon.svg') continue;
    const [pathname, hash] = href.split('#');
    const targetRoute = pathname || source;
    const target = pages.get(targetRoute);
    assert(target, `Broken internal route ${href} from ${source}`);
    if (hash) assert(target.includes(`id="${hash}"`), `Broken anchor ${href} from ${source}`);
  }
}

const notFound = await readFile(path.join(dist, '404.html'), 'utf8');
assert(matches(notFound, /<h1[ >]/g).length === 1, '404 must contain exactly one H1');
assert(notFound.includes('<meta name="robots" content="noindex, nofollow"'), '404 must be noindex, nofollow');
assert(!notFound.includes('rel="canonical"'), '404 must not contain a canonical');

const vercel = JSON.parse(await readFile(path.join(root, 'vercel.json'), 'utf8'));
assert(!vercel.rewrites, 'Catch-all rewrites would turn unknown URLs into soft 404s');
assert(vercel.trailingSlash === true, 'Vercel trailingSlash must match canonical URLs');

console.log(`SEO audit passed: ${pages.size} indexable routes and one custom 404.`);
