import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';  
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/drbanuls-inspired-design/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
       '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
