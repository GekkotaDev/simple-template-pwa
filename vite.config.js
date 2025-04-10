import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),

    SvelteKitPWA({
      spa: true,

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
