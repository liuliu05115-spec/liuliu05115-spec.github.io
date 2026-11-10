import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const username = process.env.GITHUB_USERNAME || "your-username";
const site = process.env.SITE_URL || `https://${username}.github.io`;

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
});
