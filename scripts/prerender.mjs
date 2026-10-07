import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { render } from '../dist-server/entry-server.js';

const routes = [
  { path: '/', output: 'index.html' },
  { path: '/limpieza-de-oficinas/', output: 'limpieza-de-oficinas/index.html' },
  { path: '/limpieza-de-naves-industriales/', output: 'limpieza-de-naves-industriales/index.html' },
  { path: '/limpieza-de-moquetas-empresas/', output: 'limpieza-de-moquetas-empresas/index.html' },
  { path: '/mantenimiento-de-limpieza/', output: 'mantenimiento-de-limpieza/index.html' },
  { path: '/limpieza-de-locales-comerciales/', output: 'limpieza-de-locales-comerciales/index.html' },
  { path: '/404', output: '404.html' },
];

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

await Promise.all(
  routes.map(async ({ path, output }) => {
    const { html, head } = render(path);
    const rendered = template
      .replace('</head>', `${head}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const destination = new URL(`../dist/${output}`, import.meta.url);
    await mkdir(new URL('.', destination), { recursive: true });
    await writeFile(destination, rendered);
  }),
);

await rm(new URL('../dist-server', import.meta.url), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} route(s).`);
