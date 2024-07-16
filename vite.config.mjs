// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: 'sutorbank-component',
      fileName: (format) => `sutorbank-component.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "vuetify", "vue-router", "apexcharts", "vue3-apexcharts", "v-money"],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "Vuetify",
          "vue-router": "VueRouter",
          apexcharts: 'ApexCharts',
          'vue3-apexcharts': 'Vue3ApexCharts',
          'v-money': 'VMoney'
        }
      }
    }
  },
  plugins: [
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
})