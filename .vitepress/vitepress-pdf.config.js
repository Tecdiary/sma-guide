const routeOrder = [
  "/sma-guide/index.html",
  "/sma-guide/getting-started/index.html",
  "/sma-guide/getting-started/installation.html",
  "/sma-guide/getting-started/installation-cpanel.html",
  "/sma-guide/getting-started/installation-forge-ploi.html",
  "/sma-guide/getting-started/update.html",
  "/sma-guide/hardware.html",
  "/sma-guide/guide/index.html",
  "/sma-guide/guide/point-of-sale.html",
  "/sma-guide/guide/sales-purchases.html",
  "/sma-guide/guide/products.html",
  "/sma-guide/guide/people.html",
  "/sma-guide/guide/settings.html",
  "/sma-guide/guide/shop.html",
  "/sma-guide/guide/reports.html",
  "/sma-guide/developer/index.html",
  "/sma-guide/developer/backend.html",
  "/sma-guide/developer/frontend.html",
  "/sma-guide/developer/language.html",
  "/sma-guide/faqs/index.html",
  "/sma-guide/future-plans/index.html",
];

/**
 * @type {import('vitepress-export-pdf').UserConfig}
 */
const config = {
  outFile: "documentation.pdf",
  pdfOptions: {
    printBackground: true,
    format: "A4",
    scale: 0.9,
    margin: {
      top: "8mm",
      bottom: "8mm",
      left: "7mm",
      right: "7mm",
    },
  },

  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex((route) => route === pageA.path);
    const bIndex = routeOrder.findIndex((route) => route === pageB.path);

    return aIndex - bIndex;
  },
};

export default config;
