import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            outputDir: './types',
            staticImport: true,
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: './src/VueFriendlyCaptcha.vue',
            name: 'VueFriendlyCaptcha',
            fileName: (format) => `vue3-friendly-captcha.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    resolve: {
        dedupe: ['vue'],
    },
});
