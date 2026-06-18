import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` musí odpovídat názvu GitHub repa, web běží v podsložce:
// https://uuTruksic.github.io/mountain-resort-river-darek/
const BASE = '/mountain-resort-river-darek/'

// Dev: po kliknutí na logo navede router na URL bez koncového lomítka a Vite
// pak při refreshi ukáže chybovou hlášku. Přesměrujeme ji na verzi s lomítkem.
const redirectBaseNoSlash: Plugin = {
  name: 'redirect-base-no-slash',
  configureServer(server) {
    const noSlash = BASE.replace(/\/$/, '')
    server.middlewares.use((req, res, next) => {
      if (req.url === noSlash) {
        res.statusCode = 301
        res.setHeader('Location', BASE)
        res.end()
        return
      }
      next()
    })
  },
}

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss(), redirectBaseNoSlash],
  server: {
    port: 5169,
  },
})
