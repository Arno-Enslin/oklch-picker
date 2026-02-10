import { defineConfig } from 'vite'
import vitePluginPug from 'vite-plugin-pug-transformer'

import config from './config.js'

export default defineConfig({
  build: {
    assetsDir: '.',
    minify: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'model-[hash].js'
      }
    }
  },
  define: config,
  plugins: [
    vitePluginPug({
      pugLocals: config
    })
  ]
})
