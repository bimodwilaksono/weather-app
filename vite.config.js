import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { PORT = 3001 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: `http://localhost:${PORT}`,
                changeOrigin: true,
            },
        },
    },
    plugins: [react()],
    build: {
        manifest: true,
        rollupOptions: {
            input: "./src/main.jsx",
        },
    },
});
