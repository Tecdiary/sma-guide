---
outline: deep

title: Frontend (Vuejs)
head:
  - - meta
    - name: description
      content: Stock Manage Advance is developed using Vuejs
  - - meta
    - name: keywords
      content: developer, docs, modifications, customizations, php, laravel, vuejs, inertia, tecdiay
---

# Frontend Guide

Application frontend is developed using **_[Inertiajs](https://inertiajs.com/)_** & **_[Vuejs](https://vuejs.org)_**

## What is Inertia

**_JavaScript apps the monolith way_**

Inertia is a new approach to building classic server-driven web apps. We call it the modern monolith.

Inertia allows you to create fully client-side rendered, single-page apps, without the complexity that comes with modern SPAs. It does this by leveraging existing server-side patterns that you already love.

## What is Vue

Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity

_You can find the docs at [https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)_

## Modifying Code

The frontend code resides in the `resources/js/` folder. The page vuejs files are in the `resources/js/Pages/Sma/` folder while the layout files are in the `resources/js/Layouts/` folder and components are in the `resources/js/Components/` folder.

If you modify any Vuejs file or language file then you will need to rebuild the app as following:

::: code-group

```sh [pnpm]
pnpm install            # install dependencies

pnpm run dev            # for developer & HRM
pnpm run build          # for production build
pnpm run build:only     # for production build on Windows
```

```sh [npm]
npm install             # install dependencies

npm run dev             # for developer & HRM
npm run build           # for production build
npm run build:only      # for production build on Windows
```

```sh [yarn]
yarn install            # install dependencies

yarn run dev            # for developer & HRM
yarn run build          # for production build
yarn run build:only     # for production build on Windows
```

:::

## Server-side Rendering (SSR)

With `build` command, you have built both your client-side and server-side bundles, you should be able run the Node-based Inertia SSR server using the following command.

```sh
php artisan inertia:start-ssr
```
