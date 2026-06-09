import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      // SPA mode: produces a static client + a shell HTML that Vercel can serve
      // for every route. No serverless function needed — animations (framer-motion)
      // and all interactivity run on the client.
      spa: {
        enabled: true,
      },
      // Pre-render real HTML for the known routes so SEO/meta works without SSR.
      pages: [
        { path: '/', prerender: { enabled: true } },
        { path: '/seguranca-patrimonial', prerender: { enabled: true } },
        { path: '/monitoramento-eletronico', prerender: { enabled: true } },
        { path: '/rastreamento-veicular', prerender: { enabled: true } },
        { path: '/portaria-remota', prerender: { enabled: true } },
      ],
    }),
    react(),
  ],
})
