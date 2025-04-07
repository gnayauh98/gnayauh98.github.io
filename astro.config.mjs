// @ts-check
import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      injectReset: true
    })
  ],
  output: 'server'
});
