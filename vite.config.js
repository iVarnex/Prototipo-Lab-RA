import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [mkcert()],
  server: {
    https: true,
    host: true
  },
  build: {
    sourcemap: false,
  },
});