// GitHub Pages nemá server-side routing. Pro SPA s čistými URL stačí, aby se
// při neznámé cestě (přímý odkaz / refresh na /vylet/...) servíroval index.html.
// GitHub Pages na 404 vrací 404.html — uděláme z něj kopii index.html a router
// se postará o správnou stránku.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('postbuild: dist/404.html vytvořen (SPA fallback pro GitHub Pages)')
