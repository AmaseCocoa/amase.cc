// @ts-check
import { defineConfig } from "astro/config";
import { execSync } from 'node:child_process';

import website from "./website.config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

let commitHash = 'unknown';
try {
  commitHash = execSync('git rev-parse --short HEAD').toString().trim();
} catch (e) {
}

// https://astro.build/config
export default defineConfig({
  site: website.baseUrl,
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: [
          ".",
          "./private",
        ],
      },
    },
    define: {
      'import.meta.env.APP_COMMIT_HASH': JSON.stringify(commitHash),
    },
  },

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  integrations: [icon(), mdx()],
});
