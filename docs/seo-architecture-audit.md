# Auditoria técnica, SEO e de arquitetura

Data: 2026-10-07  
Projeto: `superclimbcn-dev/limpieza-empresas`  
Referência auditada: cópia local de `superclimbcn-dev/superclim-web`

## Inventário indexável

| URL | Title | Meta description | H1 | Canonical | Schemas | Links internos principais | Links editoriais externos |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Empresa de limpieza profesional \| Superclim Empresas | Servicios de limpieza profesional para oficinas, naves, comercios y centros de trabajo en Sabadell, Barcelona y Vallès Occidental. | Empresa de limpieza profesional en Sabadell, Barcelona y Vallès | `https://empresas.superclim.es/` | Organization | Oficinas, naves, locales, moquetas, mantenimiento | Sofás, alfombras, colchones e impermeabilización em `superclim.es` |
| `/limpieza-de-oficinas/` | Limpieza de Oficinas en Barcelona y Sabadell \| Superclim Empresas | Limpieza profesional de oficinas en Sabadell, Barcelona y Vallès. Servicio puntual o mantenimiento periódico adaptado a tu empresa. Solicita presupuesto. | Limpieza profesional de oficinas en Sabadell y Barcelona | `https://empresas.superclim.es/limpieza-de-oficinas/` | Service, BreadcrumbList, FAQPage | Home, mantenimiento, moquetas, naves | Sofás em `superclim.es` |
| `/limpieza-de-naves-industriales/` | Limpieza de Naves Industriales en Barcelona \| Superclim Empresas | Limpieza profesional de naves, almacenes y centros logísticos en Sabadell, Barcelona y Vallès. Servicio puntual o periódico adaptado a tu instalación. | Limpieza profesional de naves industriales | `https://empresas.superclim.es/limpieza-de-naves-industriales/` | Service, BreadcrumbList, FAQPage | Home, mantenimiento, oficinas, moquetas | Somente links globais do footer |
| `/limpieza-de-locales-comerciales/` | Limpieza de Locales Comerciales en Barcelona \| Superclim Empresas | Limpieza profesional de tiendas y locales comerciales en Sabadell, Barcelona y Vallès. Servicio puntual o mantenimiento adaptado a cada negocio. | Limpieza profesional de locales comerciales | `https://empresas.superclim.es/limpieza-de-locales-comerciales/` | Service, BreadcrumbList, FAQPage | Home, mantenimiento, moquetas | Somente links globais do footer |
| `/limpieza-de-moquetas-empresas/` | Limpieza de Moquetas para Empresas en Barcelona \| Superclim | Limpieza profesional de moquetas, sillas y tapicerías para oficinas y empresas en Sabadell, Barcelona y Vallès. Solicita un presupuesto personalizado. | Limpieza profesional de moquetas para empresas | `https://empresas.superclim.es/limpieza-de-moquetas-empresas/` | Service, BreadcrumbList, FAQPage | Home, oficinas, naves, locales | Sofás e alfombras em `superclim.es` |
| `/mantenimiento-de-limpieza/` | Mantenimiento de Limpieza para Empresas \| Superclim Empresas | Mantenimiento de limpieza para oficinas, naves y locales en Sabadell, Barcelona y Vallès. Servicio periódico con frecuencias y horarios adaptados. | Mantenimiento de limpieza para empresas | `https://empresas.superclim.es/mantenimiento-de-limpieza/` | Service, BreadcrumbList, FAQPage | Home, oficinas, naves, locales | Somente links globais do footer |

Todas as páginas acima têm um único H1, title/description/canonical exclusivos, robots `index, follow`, Open Graph e conteúdo completo no HTML prerenderizado.

## Rotas e 404

- Não há rotas indexáveis duplicadas, redirects configurados ou páginas comerciais vazias.
- Não existem páginas legais neste projeto e o footer não aponta para páginas legais inexistentes. Elas devem ser avaliadas antes de adicionar formulários, analytics/cookies não essenciais ou novos fluxos de dados.
- O catch-all SPA foi removido. Ele devolvia a Home com status 200 para URLs desconhecidas (soft 404).
- O build agora emite `dist/404.html`, com um H1, `noindex, nofollow` e sem canonical. O Vercel pode responder com status 404 real para recursos estáticos não encontrados.
- `trailingSlash: true` mantém o roteamento do Vercel alinhado aos canonicals com barra final.

## Canibalização interna

- **Home x Oficinas:** overlap baixo. A Home trabalha a categoria ampla “empresa de limpieza profesional”; Oficinas mantém title, H1 e conteúdo específicos.
- **Oficinas x Mantenimiento:** overlap controlado. Oficinas prioriza o tipo de espaço; Mantenimiento prioriza recorrência, frequência e planejamento.
- **Naves x Mantenimiento:** overlap controlado. Naves prioriza instalação/operativa industrial geral; Mantenimiento é transversal aos setores.
- **Moquetas:** intenção claramente têxtil e distinta das páginas generalistas.
- **Locales:** intenção comercial própria, centrada em áreas de atendimento, trânsito e horários do negócio.
- Não foi necessária reescrita. A arquitetura editorial e os metadados já separam adequadamente as intenções.

## Mapa do repositório `superclim-web`

O repositório auditado não contém páginas B2B temáticas dedicadas a oficinas, naves, locais ou manutenção. Ele contém:

- páginas principais de sofás, alfombras, colchones, impermeabilização, sillones, serviço a domicílio, couro, restauração e tapicería de coche;
- páginas regionais de sofás para Barcelona, Sabadell, Cerdanyola, Terrassa, Sant Cugat, Barberà del Vallès e Sant Quirze;
- páginas regionais de colchões para Sabadell, Barcelona, Castellar del Vallès, Cerdanyola, Terrassa, Sant Cugat del Vallès e Sant Quirze del Vallès;
- páginas regionais de alfombras para Sabadell, Barcelona, Sant Cugat, Sant Quirze, Cerdanyola, Terrassa, Barberà del Vallès e Castellar del Vallès, além de lavado de alfombras Barcelona;
- menções incidentais a negócios em conteúdos regionais, sem páginas B2B próprias.

Riscos entre domínios:

- risco moderado entre “moquetas para empresas” e páginas de alfombras/limpeza têxtil do domínio principal, sobretudo em Barcelona; a distinção B2B, moquetas instaladas e espaços profissionais deve ser preservada;
- risco baixo em buscas amplas como “limpieza profesional Barcelona”; titles e H1s temáticos reduzem a sobreposição;
- criar páginas locais no subdomínio aumentaria o risco com as páginas regionais existentes e deve continuar bloqueado pela estratégia editorial.

## Links entre domínios

Os links atuais para `superclim.es` usam somente rotas confirmadas no router, sitemap e configuração do repositório principal:

- `/limpieza-de-sofas/`
- `/limpieza-de-alfombras/`
- `/mas-servicios/`
- `/impermeabilizacion-de-sofas`

As âncoras são descritivas, não exibem URLs cruas e aparecem em contexto editorial ou no footer. Não foi observada repetição excessiva dentro do conteúdo principal.

Oportunidades futuras de linkagem inversa, sem alteração nesta fase:

- página `/servicios/` do domínio principal → Home de Superclim Empresas;
- páginas de alfombras → página B2B de moquetas, com contexto para oficinas e instalações profissionais;
- página institucional ou contato → oferta para empresas;
- evitar links em massa nas páginas regionais; usar apenas pontos editoriais em que a intenção B2B seja clara.

## Sitemap, robots e prerender

- Sitemap contém somente as seis URLs indexáveis, todas sob `https://empresas.superclim.es`.
- Não contém 404, rotas futuras, duplicações ou URLs `vercel.app`.
- `robots.txt` permite crawling e declara o sitemap correto; não bloqueia CSS, JavaScript ou imagens.
- Todas as seis páginas entregam title, description, canonical, H1, conteúdo e JSON-LD diretamente no HTML.

## Performance e acessibilidade

- Build auditado: JavaScript inicial de aproximadamente 381 kB (106 kB gzip), CSS de aproximadamente 23 kB (5 kB gzip) e logo de 36 kB.
- O projeto usa fontes do sistema, sem bloqueio por webfonts externos.
- O logo recebeu dimensões intrínsecas para reduzir risco de CLS.
- O menu mobile possui alvo mínimo de 44 px e agora fecha com `Escape`.
- Foco visível global, anchors/buttons semânticos, CTAs com alvos adequados e FAQ nativo com `details/summary` foram preservados.
- O bundle é aceitável para o escopo atual. Route splitting exigiria adaptar o prerender síncrono; monitorar antes de expandir significativamente o número de páginas.

## Guardrail automatizado

`npm run test:seo` valida build prerenderizado, incluindo:

- H1, title, description, canonical, robots, Open Graph e JSON-LD;
- exclusividade de title, description e canonical;
- correspondência exata entre rotas indexáveis e sitemap;
- links internos e anchors;
- ausência de URLs cruas visíveis;
- 404 noindex sem canonical;
- ausência de catch-all que gere soft 404 e alinhamento de trailing slash.
