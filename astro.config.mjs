// @ts-check
import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  site:"https://gnayauh98.github.io",
  integrations: [
    Unocss({
      injectReset: true
    })
  ],
});
