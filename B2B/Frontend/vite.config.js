import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ Ye relative path banata hai taaki assets sahi load ho
  plugins: [react(), tailwindcss()],
})
