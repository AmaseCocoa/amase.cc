# amase.cc
なんとなくコードを公開しているウェブサイト

## Structure

private以下はOSSライセンスで配布できない静的アセットを保持している場所です。これは非公開ですが、おそらくなくてもビルドする際に問題が起こることはありません。

```
.
├── AGENTS.md
├── CLAUDE.md -> AGENTS.md
├── DESIGN.md
├── README.md
├── astro.config.mjs
├── banners.config.ts
├── content
│   ├── index.mdx
│   └── works.mdx
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── private
│   ├── README.md
│   ├── banners.ts
│   └── images
├── public
│   ├── favicon.ico
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── private-images -> ../../private/images
│   ├── components
│   │   ├── Banners.astro
│   │   ├── NavLink.astro
│   │   ├── SEO.astro
│   │   ├── SocialIcon.astro
│   │   ├── card
│   │   │   ├── Card.astro
│   │   │   └── CardList.astro
│   │   └── prose
│   │       └── Link.astro
│   ├── content.config.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── [...id].astro
│   ├── styles
│   │   └── global.css
│   └── types.ts
├── tsconfig.json
└── website.config.ts
```

## License
MIT License
