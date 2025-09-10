import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SMA Guide",
  description: "Documentation for Stock Manager Advance",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://tecdiary.com/img/icon.svg",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/getting-started/" },
      { text: "Support", link: "https://tecdiary.com/support" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Getting Ready", link: "/getting-started/" },
          {
            text: "Installation Guide",
            collapsed: false,
            items: [
              {
                text: "General Installation",
                link: "/getting-started/installation",
              },
              {
                text: "cPanel Installation",
                link: "/getting-started/installation-cpanel",
              },
              {
                text: "Forge/Ploi Installation",
                link: "/getting-started/installation-forge-ploi",
              },
            ],
          },
          { text: "Update Guide", link: "/getting-started/update" },
        ],
      },
      { text: "Hardware", link: "/hardware" },
      {
        text: "User Guide",
        collapsed: false,
        items: [
          { text: "Dashboard", link: "/guide/" },
          { text: "Point of Sale Module", link: "/guide/point-of-sale" },
          { text: "Sales & Purchases", link: "/guide/sales-purchases" },
          { text: "Products", link: "/guide/products" },
          { text: "People", link: "/guide/people" },
          { text: "Settings", link: "/guide/settings" },
          {
            text: "Shop (eCommerce) Module",
            link: "/guide/shop",
            // collapsed: false,
            // items: [
            //   // { text: "Shop", link: "/guide/shop/" },
            //   { text: "Orders & Payments", link: "/guide/shop/" },
            //   {
            //     text: "Pages, Coupons, Currencies & Shipping Methods",
            //     link: "/guide/shop/admin",
            //   },
            //   { text: "Shop Settings", link: "/guide/shop/settings" },
            // ],
          },
          { text: "Reports", link: "/guide/reports" },
        ],
      },
      // { text: "Shop (eCommerce) Module", link: "/guide/shop-module" },
      {
        text: "Developer Guide",
        collapsed: false,
        items: [
          { text: "File & Folder Structure", link: "/developer/" },
          { text: "Backend (Laravel)", link: "/developer/backend" },
          { text: "Frontend (Vue.js)", link: "/developer/frontend" },
          { text: "Adding Language", link: "/developer/language" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tecdiary/sma-guide" },
    ],

    editLink: {
      pattern: "https://github.com/tecdiary/sma-guide/tree/main/:path",
      text: "Edit this page on GitHub",
    },
    // lastUpdated: true,
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    externalLinkIcon: true,

    footer: {
      // message: 'Released under the MIT License.',
      copyright:
        "Copyright © " +
        new Date().getFullYear() +
        ' <a href="https://tecdiary.com/">Tecdiary IT Solutions</a>',
    },
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true,
      fileTree: {
        icon: "simple", // 'simple' | 'colored'
      },
    },
  },
});
