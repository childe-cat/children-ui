import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry:path.resolve(__dirname,"src/index.ts"),
      name:"children-ui",
      fileName:(format)=>`children-ui.${format}.js`
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "./src/style/index.scss";'
      }
    }
  }
})
