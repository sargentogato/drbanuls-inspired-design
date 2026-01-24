import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';  
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/drbanuls-inspired-design/',
  plugins: [vue()],
  resolve: {
    alias: {
       '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
