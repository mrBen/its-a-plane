// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrben.github.io',
  base: '/its-a-plane',
  integrations: [svelte()],
});