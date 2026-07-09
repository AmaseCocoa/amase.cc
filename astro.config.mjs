// @ts-check
import { defineConfig } from 'astro/config';
import website from './website.config'

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  site: website.baseUrl,
  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  integrations: [icon(), mdx()]
});
