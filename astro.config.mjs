import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dev-ivannumpaque.github.io',
  base: 'https://github.com/Dev-IvanNumpaque/Dev-IvanNumpaque.github.io',
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