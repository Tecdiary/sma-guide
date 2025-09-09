---
title: Project Structure
outline: deep
prev: false
next: false
---

# Developer Guide

This guide will illustrate the file structure of a project, as well as how to utilize them within your project.

<!-- When you [create a project using the command-line tool](usage.md#command-line-installation), its file structure looks like this: -->

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

<div class="file-tree">
<FileTree :items="[
{ label: 'Home', icon: 'HomeIcon'},
{ label: 'Posts', children: [
{ label: 'All posts'},
{ label: 'Add new' },
{ label: 'Categories',
children: [
{ label: 'Cat 1'},
{ label: 'Cat 2' },
{ label: 'Cat 3'},
],
},
],
icon: 'Categories',
},
{ label: 'article.md', icon: 'HomeIcon'},
]" />
</div>
