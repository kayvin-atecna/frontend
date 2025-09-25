import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": { target: "http://localhost:8000", changeOrigin: true },
      "/photos": { target: "http://localhost:8000", changeOrigin: true },
      "/add-photo": { target: "http://localhost:8000", changeOrigin: true },
      "/upload-image": { target: "http://localhost:8000", changeOrigin: true },
      "/upload-json": { target: "http://localhost:8000", changeOrigin: true },
      "/docs": { target: "http://localhost:8000", changeOrigin: true },
      "/openapi.json": { target: "http://localhost:8000", changeOrigin: true }
    }
  },
  preview: { port: 4173, strictPort: true }
})
