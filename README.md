# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# nuxt.new

### Nuxt - Auth + Prisma

프리즈마를 이용한 인증 예제

### Nuxt - Prisma

https://sidebase.io/sidebase/components/prisma
https://www.prisma.io/docs/orm/prisma-schema

프리즈마 예제

### ⚡️ Upload file

https://reffect.co.jp/en/nuxt/nuxt3-file-upload/#creating-a-upload-form

### Nuxt - Auth

https://sidebase.io/sidebase/components/nuxt-auth
https://sidebase.io/nuxt-auth/getting-started

인증 예제

### Sidebase with Nuxt

- https://sidebase.io/sidebase/welcome

```cmd
pnpm create sidebase
```

- Select Stacks
  - Merino - A modular stack that let's you choose configuration and modules, e.g.: Want Prisma ORM or not? Want Authentication or not? ... Merino is ideal if you want fine-grained control
  - Cheviot - A batteries-included stack where most decisions were made for you. Cheviot is ideal if you want to just get going with an opinionated stack that works

### add Pinia

- https://pinia.vuejs.org/ssr/nuxt.html#Installation
- https://pinia.vuejs.org/introduction.html#Introduction

```cmd
pnpm i pinia @pinia/nuxt
```

Need settings

### add Vuetify

- https://vuetifyjs.com/en/getting-started/installation/

```cmd
pnpm i -D vuetify vite-plugin-vuetify
pnpm i @mdi/font
```

Need settings

### Nuxt

- https://nuxt.com/docs/getting-started/installation
- https://devtools.nuxt.com/
- https://nuxt.new/

```cmd
npx nuxi init nuxt-app
npx nuxi init -t ui nuxt-app
npx nuxi init -t content nuxt-app
npx nuxi init -t module nuxt-app
npx nuxi init -t layer nuxt-app
```

---

# 종속 프레임워크

### Vue

- https://ko.vuejs.org/guide/quick-start.html#creating-a-vue-application

```cmd
pnpm create vue
```

- Select options
  - Add TypeScript? ... No / Yes
  - Add JSX Support? ... No / Yes
  - Add Vue Router for Single Page Application development? ... No / Yes
  - Add Pinia for state management? ... No / Yes
  - Add Vitest for Unit Testing? ... No / Yes
  - Add an End-to-End Testing Solution?
    - No
    - Cypress
    - Nightwatch
    - Playwright
  - Add ESLint for code quality? ... No / Yes

### Vite

- https://ko.vitejs.dev/guide/#scaffolding-your-first-vite-project

```cmd
pnpm create vite
```

- Select a framework & variant
  - Vanilla
  - Vue
    - Customize with create-vue ↗
    - Nuxt ↗
  - React
    - TypeScript + SWC
    - JavaScript + SWC
  - Preact
  - Lit
  - Svelte
    - SvelteKit ↗
  - Solid
  - Qwik
    - QwikCity ↗
  - Others
    - create-vite-extra ↗
    - create-electron-vite ↗

### Nitro

- https://nitro.unjs.io/guide/getting-started

```cmd
pnpm dlx giget@latest nitro nitro-app
```

- ✨ Successfully cloned nitro to nitro-app

✨ Fetch - Fakestore

- https://github.com/iamshaunjp/nuxt-3-tutorial.git
- https://fakestoreapi.com/

⚡️ Ghostwind

- https://www.tailwindtoolbox.com/templates/ghostwind
- https://github.com/tailwindtoolbox/Ghostwind

⚡️ Identity and Access Management

- https://github.com/jeremycoder/nuxt-iam

⚡️ Supabase auth - blog

- https://masteringnuxt.com/blog/setting-up-supabase-auth-with-nuxt-3

⚡️ Blog starter

- https://github.com/GonzaloHirsch/nuxt-blog-starter
- https://gonzalohirsch.com/blog/zero-to-blog-building-with-nuxt-3

⚡️ Upload Files

- https://www.youtube.com/watch?v=PecGrcM8wp0

⚡️ Upload file

- https://reffect.co.jp/en/nuxt/nuxt3-file-upload/#creating-a-upload-form

➕ UI with Tailwind

- https://ui.nuxt.com/getting-started/installation
- https://tailwindcss.com/docs/guides/nuxtjs

➕ Content

- https://content.nuxt.com/usage/content-directory

✨ Generates samples

- https://nuxt.com/docs/api/commands/add

```bash
# Generates /plugins/sockets.client.ts
npx nuxi add plugin sockets --client
# Generates components/TheHeader.vue
npx nuxi add component TheHeader
# Generates composables/foo.ts
npx nuxi add composable foo
# Generates layouts/custom.vue
npx nuxi add layout custom
# Generates plugins/analytics.ts
npx nuxi add plugin analytics
# Generates pages/about.vue
npx nuxi add page about
# Generates pages/category/[id].vue
npx nuxi add page "category/[id]"
# Generates middleware/auth.ts
npx nuxi add middleware auth
# Generates server/api/hello.ts
npx nuxi add api hello
```

🎉 Typescript ➕ Prisma

- https://www.prisma.io/docs/getting-started/quickstart

🎉 pnpm create @shopify/app

- https://shopify.dev/docs/apps/getting-started/create

```bash
Start with Remix (recommended)
Adding your first extension
```

🎉 pnpm i typescript -D

- https://www.typescriptlang.org/download

```bash
npm init -y
pnpm i typescript -D
npx tsc --init
```

🎉 pnpm dlx giget@latest nitro

- https://github.com/unjs/nitro#readme
- https://nitro.unjs.io/

🎉 pnpm create vue

- https://github.com/vuejs/core#readme
- https://vuejs.org/

```bash
√ Project name: ... vue-project
√ Add TypeScript? ... No / Yes
√ Add JSX Support? ... No / Yes
√ Add Vue Router for Single Page Application development? ... No / Yes
√ Add Pinia for state management? ... No / Yes
√ Add Vitest for Unit Testing? ... No / Yes
√ Add an End-to-End Testing Solution?
	No
	Cypress - also supports unit testing with Cypress Component Testing
	Nightwatch - also supports unit testing with Nightwatch Component Testing
	Playwright
√ Add ESLint for code quality? ... No / Yes
```

🎉 pnpm create sidebase #cheviot

- https://sidebase.io/sidebase/welcome/stacks#cheviot

```bash
Merino - A modular stack that let's you choose configuration and modules, e.g.: Want Prisma ORM or not? Want Authentication or not? ... Merino is ideal if you want fine-grained control
Cheviot - A batteries-included stack where most decisions were made for you. Cheviot is ideal if you want to just get going with an opinionated stack that works
```

🎉 pnpm create vite

- https://ko.vitejs.dev/guide/#scaffolding-your-first-vite-project

```bash
Vanilla
Vue
	Customize with create-vue ↗
	Nuxt ↗
React
	TypeScript + SWC
	JavaScript + SWC
Preact
Lit
Svelte
	SvelteKit ↗
Solid
Qwik
	QwikCity ↗
Others
	create-vite-extra ↗
	create-electron-vite ↗
```
