import { defineConfig } from 'astro/config';
import i18n from 'astrojs-i18n'
// https://astro.build/config
export default defineConfig({
  integrations: [i18n()]
});
