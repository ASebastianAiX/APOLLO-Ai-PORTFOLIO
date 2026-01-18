import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://SebastianAiX.github.io',
  base: isProd ? '/APOLLO-AI-PORTFOLIO' : '/',
});
