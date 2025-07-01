import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "/podcast-app/",
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
        css: true,
    },
});
