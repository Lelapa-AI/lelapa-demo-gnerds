import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Your App Name",
        short_name: "App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "vite.svg",
            sizes: "64x64",
            type: "image/svg",
          },
          {
            src: "vite.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "vite.svg",
            sizes: "512x512",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@gnerd": new URL("./src", import.meta.url).pathname,
    },
  },
});
