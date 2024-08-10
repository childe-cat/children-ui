import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({
            include: ['src/index.ts', 'src/components/*/index.ts'],
            outDir: './dist'
        })],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "cat-ui"
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/style/index.scss";'
            }
        }
    }
});
