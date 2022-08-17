import { sveltekit } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('vite').UserConfig} */
const config = {
  adapter: adapter(),
  define: {
    "process.env": process.env
  },
  plugins: [sveltekit()]
};

export default config;
