import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` musí odpovídat názvu GitHub repa, protože web poběží
// v podsložce: https://uuTruksic.github.io/mountain-resort-river-darek/
export default defineConfig({
  base: '/mountain-resort-river-darek/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5169,
  },
})
