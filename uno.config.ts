import { defineConfig, presetWind4 } from "unocss";
import extractorMdc from '@unocss/extractor-mdc'
import transfromerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  presets: [presetWind4()],
  transformers:[
    transfromerVariantGroup()
  ],
  extractors:[
    extractorMdc()
  ]
});
