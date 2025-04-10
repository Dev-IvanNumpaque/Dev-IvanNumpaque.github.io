import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.example.com',
  base: '/',
  integrations: [],
  output: 'static',
  build: {
    assets: '_assets',
    format: 'directory'
  },
  server: {
    host: true,
    port: 3000
  }
});