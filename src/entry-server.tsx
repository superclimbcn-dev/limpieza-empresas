import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router';
import { AppRoutes } from '@/App';
import '@/index.css';

export function render(url: string) {
  const rendered = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );

  // react-helmet-async v3 renders head elements inline under React 19 during
  // SSR. Move only those known SEO elements into the document head.
  const headPattern = /<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>(?:<\/meta>)?|<link\b[^>]*\/?>(?:<\/link>)?|<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g;
  const head = rendered.match(headPattern)?.join('') ?? '';
  const html = rendered.replace(headPattern, '');
  if (!head.includes('<title')) throw new Error(`Prerender metadata missing for ${url}`);

  return { html, head };
}
