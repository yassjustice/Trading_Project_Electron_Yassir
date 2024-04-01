import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "D:/New folder/Yassir hakimi/bureau stuff/IT/metaverse/MetaVprojects/trading-Desktop/electronClone/electron-quick-start/dist",
        // Replace with actual path
        // emptyOutDir: true, // Clear output directory before building
        // outDir: resolve(__dirname, "dist"), // Keep default output directory
        emptyOutDir: false, // Prevent overwriting previous build contents
        include: ["src/**/*.js", "src/**/*.css", "public/*", "src/**/*.jsx"], // Include all JS, CSS, and public files
    },
});
