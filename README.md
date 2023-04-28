# Figma plugin vite + vue template

This template help get you started developing a figma plugin in vite + vue3

## Start

clone this repo or run
```
npx degit unickhow/figma-plugin-vite-vue-template <project_name>
```

Create a new plugin in figma, figma will create a project for you, then copy the plugin `name` and `id` in `manifest.json`, paste in `public/manifest.json`.
The main functionality for communicating with Figma is written in `figma/code.ts`. The other interfaces and operational logic are exactly the same as a typical Vue project!

for browser view http://localhost:5173
```
pnpm dev
```

bundle for figma
```
pnpm build
```

or build on file change
```
pnpm watch
```

## Stack

- [Vite](https://vitejs.dev/)
- [Vue3](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [UnoCSS](https://unocss.dev/)
