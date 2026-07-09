import { defineConfig } from './src/types';

export default defineConfig({
  baseUrl: 'https://amase.cc/',
  title: 'amase.cc',
  description: 'てきとうにやります',

  author: {
    avatar: 'https://github.com/AmaseCocoa.png',
    name: 'ここあ'
  },

  socialLinks: [
    {
      icon: 'simple-icons:x',
      url: 'https://x.com/mocha_amase',
    },
    {
      icon: 'simple-icons:github',
      url: 'https://github.com/AmaseCocoa',
    },
    {
      icon: 'simple-icons:qiita',
      url: 'https://qiita.com/AmaseCocoa',
    },
  ],
});
