import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({ fallback: "404.html" }),
    paths: {
      // https://svelte.dev/docs/kit/adapter-static#GitHub-Pages
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;
