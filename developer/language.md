---
outline: deep
title: Adding/updating language
head:
  - - meta
    - name: description
      content: You can add your language or update it as you need to use Stock Manage Advance in your local language
  - - meta
    - name: keywords
      content: developer, docs, language, multi-lingual, locale, modifications, customizations, php, laravel, vuejs, inertia, tecdiay
---

# Language

## Add New Language

You can add language by following these steps.

1. Duplicate `lang/en.json` and `lang/en/` to your language and translate
2. Edit `lang/languages.json` and add your language entry
   ```json
   { "value": "bm", "label": "Bahasa Malaysia", "flag": "MY" }
   ```
3. Build the application
   ```sh
   npm i && npm run build
   ```

::: info For development, you can run `npm run dev`
:::

## Update Language

You can modify your language by following these steps.

1. Modify your language files `lang/bm.json` and `lang/bm/*.php`
2. Re-build the application
   ```sh
   npm run build
   ```

::: info For development, you can run `npm run dev`
:::

::: tip You must have installed the dependencies before running the commands with `npm i`
:::
