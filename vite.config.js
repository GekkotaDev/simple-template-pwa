import { sveltekit } from "@sveltejs/kit/vite";
import { VitePWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),

    VitePWA({
      workbox: {
        globPatterns: ["**/*"],
      },
      includeAssets: ["**/*"],

      manifest: {
        name: "Sample App",
        short_name: "Sample",
        description: "A PWA example",
        display: "standalone",
        start_url: "/",
        icons: [
          // App icon
          // {
          //   src: "favicon.png",
          //   sizes: "<X>x<Y>",
          //   type: "image/png",
          // },
        ],
      },
    }),
  ],
});
