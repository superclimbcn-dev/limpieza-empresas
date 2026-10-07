import { copyFile, mkdir } from 'node:fs/promises';

// Minimal prerender entry point. Additional public routes can be added here
// when their final copy is approved.
const routes = ['404'];

await Promise.all(
  routes.map(async (route) => {
    const directory = new URL(`../dist/${route}/`, import.meta.url);
    await mkdir(directory, { recursive: true });
    await copyFile(new URL('../dist/index.html', import.meta.url), new URL('index.html', directory));
  }),
);

console.log(`Prerendered ${routes.length} route shell(s).`);
