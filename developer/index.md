---
outline: deep
prev: false

title: Developer Guide
head:
  - - meta
    - name: description
      content: Developer guide for modifying code of Stock Manage Advance
  - - meta
    - name: keywords
      content: developer, docs, modifications, customizations, php, laravel, vuejs, inertia, tecdiay
---

# Developer Guide

We used Laravel Standard folder structure with some extensions.

```sh
.
├─ app
│  ├─ Actions
│  │  ├─ Fortify
│  │  ├─ Jetstream
│  │  ├─ SMA
│  │  ├─  ├─ SMA Action files to save data
│  ├─ Casts
│  ├─ Console
│  ├─ Core
│  │  ├─  To extend few class like Notification & Translator
│  ├─ Events
│  │  ├─  Events are used for stock sync
│  ├─ Exports
│  │  ├─  Exportable classes
│  ├─ Helpers
│  │  ├─  Env
│  │  ├─  functions.php (for SMA helper functions - auto loaded)
│  ├─ Http
│  │  ├─  Controllers
│  │  ├─  ├─  Sma
│  │  ├─  ├─  ├─  Order (sale and purchase menu related controllers)
│  │  ├─  ├─  ├─  People (people menu related controllers)
│  │  ├─  ├─  ├─  Pos (point of sale menu related controllers)
│  │  ├─  ├─  ├─  Product (product menu related controllers)
│  │  ├─  ├─  ├─  Report (reports controllers)
│  │  ├─  ├─  ├─  Search
│  │  ├─  ├─  ├─  ├─  SearchController
│  │  ├─  ├─  ├─  Settings (settings menu related controllers)
│  │  ├─  ├─  ├─  HomeController
│  │  ├─  ├─  ├─  PublicController
│  │  ├─  Middlewares
│  │  ├─  ├─  HandleInertiaRequests (shares data to Vuejs $page.props)
│  │  ├─  ├─  Other Middlewares
│  │  ├─  Requests
│  │  ├─  ├─  Sma
│  │  ├─  ├─  ├─  Order (sale and purchase menu related form request)
│  │  ├─  ├─  ├─  People (people menu related form request)
│  │  ├─  ├─  ├─  Product (product menu related form request)
│  │  ├─  ├─  ├─  Setting (point of sale menu related form request)
│  │  ├─  ├─  LoginRequest (extends fortify login request)
│  │  ├─  Resources (for pagination data)
│  ├─ Imports
│  │  ├─  Importable classes
│  ├─ Jobs
│  │  ├─  FiscalService (classes to send your sales data to Govt. fiscal service)
│  │  ├─  ├─  ReportNewReturnSale (send return order to fiscal service)
│  │  ├─  ├─  ReportNewSale (send sale to fiscal service)
│  │  ├─  ├─  ReportSaleUpdate (send sale update to fiscal service)
│  ├─ Listeners
│  │  ├─  Events are listened and stock sync done here
│  ├─ Livewire
│  ├─ Models
│  │  ├─  SMA (all SMA related model here)
│  ├─ Notifications
│  │  ├─  SMA (all SMA notifications for sale, purchase & payments etc)
│  ├─ Observers (some fire events and others to perform actions like payment sync etc)
│  ├─ Policies
│  │  ├─ UpdatePolicy
│  ├─ Providers
│  ├─ Rules
│  ├─ Services (to check overselling or calculate order data)
│  ├─ Traits (model traits)
├─ bootstrap
│  ├─ app.php
│  ├─ providers.php
├─ config (Laravel and packages config files)
├─ database
├─ lang (language files are in this folder for translation)
├─ modules* (shop module for now)
├─ packages*
├─ public (root path for public access/traffic)
├─ resources (views, css and javascript files)
├─ routes (application routes)
├─ storage
├─ tests
├─ vendors
├─ artisan
├─ composer.json
├─ package.json
├─ vite.config.js
└─ other files*
```

<div class="file-tree">
<FileTree :items='[
  {
    "label": "app",
    "children": [
      {
        "label": "Actions",
        "children": [
          {
            "label": "Sma",
            "children": [{ "label": "SaveAdjustment.php", "icon": "php" }]
          }
        ]
      },
      {
        "label": "Casts",
        "children": [
          { "label": "AppDate.php", "icon": "php" },
          { "label": "ProductStoreTaxes.php", "icon": "php" }
        ]
      },
      { "label": "Console", "icon": "folder" },
      {
        "label": "Core",
        "children": [
          { "label": "Notifiable.php", "icon": "php" },
          { "label": "Router.php", "icon": "php" },
          { "label": "Translator.php", "icon": "php" }
        ]
      },
      {
        "label": "Events",
        "children": [
          { "label": "AdjustmentEvent.php", "icon": "php" },
          { "label": "AttachmentEvent.php", "icon": "php" },
          { "label": "PurchaseEvent.php", "icon": "php" },
          { "label": "ReturnOrderEvent.php", "icon": "php" },
          { "label": "SaleEvent.php", "icon": "php" },
          { "label": "TransferEvent.php", "icon": "php" }
        ]
      },
      {
        "label": "Exports",
        "children": [
          { "label": "BrandExport.php", "icon": "php" },
          { "label": "CategoryExport.php", "icon": "php" },
          { "label": "ComboProductExport.php", "icon": "php" },
          { "label": "CustomerExport.php", "icon": "php" },
          { "label": "ProductExport.php", "icon": "php" },
          { "label": "ProductsExport.php", "icon": "php" },
          { "label": "ProductTaxExport.php", "icon": "php" },
          { "label": "ProductVariationExport.php", "icon": "php" },
          { "label": "StockCountExport.php", "icon": "php" },
          { "label": "SupplierExport.php", "icon": "php" }
        ]
      },
      {
        "label": "Helpers",
        "children": [
          { "label": "Env.php", "icon": "php" },
          { "label": "functions.php", "icon": "php" }
        ]
      },
      {
        "label": "Http",
        "children": [
          {
            "label": "Controllers",
            "children": [
              {
                "label": "Sma",
                "children": [
                  {
                    "label": "Order",
                    "children": [
                      { "label": "DeliveryController.php", "icon": "php" },
                      { "label": "EmailController.php", "icon": "php" },
                      { "label": "ExpenseController.php", "icon": "php" },
                      { "label": "GiftCardController.php", "icon": "php" },
                      { "label": "PaymentController.php", "icon": "php" },
                      { "label": "PurchaseController.php", "icon": "php" },
                      { "label": "QuotationController.php", "icon": "php" },
                      { "label": "ReturnOrderController.php", "icon": "php" },
                      { "label": "SaleController.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "People",
                    "children": [
                      { "label": "AddressController.php", "icon": "php" },
                      { "label": "CustomerController.php", "icon": "php" },
                      { "label": "CustomerGroupController.php", "icon": "php" },
                      { "label": "CustomerPortController.php", "icon": "php" },
                      { "label": "PriceGroupController.php", "icon": "php" },
                      { "label": "RoleController.php", "icon": "php" },
                      { "label": "SupplierController.php", "icon": "php" },
                      { "label": "SupplierPortController.php", "icon": "php" },
                      { "label": "UserController.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Pos",
                    "children": [
                      { "label": "OrderController.php", "icon": "php" },
                      { "label": "PosController.php", "icon": "php" },
                      { "label": "PosRegisterController.php", "icon": "php" },
                      { "label": "RegisterController.php", "icon": "php" },
                      {
                        "label": "RegisterReportController.php",
                        "icon": "php"
                      },
                      { "label": "SettingController.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Product",
                    "children": [
                      { "label": "AdjustmentController.php", "icon": "php" },
                      { "label": "BrandController.php", "icon": "php" },
                      { "label": "BrandPortController.php", "icon": "php" },
                      { "label": "CategoryController.php", "icon": "php" },
                      { "label": "CategoryPortController.php", "icon": "php" },
                      { "label": "EmailController.php", "icon": "php" },
                      { "label": "LabelController.php", "icon": "php" },
                      { "label": "ProductController.php", "icon": "php" },
                      { "label": "ProductPortController.php", "icon": "php" },
                      { "label": "PromotionController.php", "icon": "php" },
                      { "label": "StockCountController.php", "icon": "php" },
                      { "label": "StockTrackController.php", "icon": "php" },
                      { "label": "TransferController.php", "icon": "php" },
                      { "label": "UnitController.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Report",
                    "children": [
                      { "label": "AdjustmentController.php", "icon": "php" },
                      { "label": "BrandController.php", "icon": "php" },
                      { "label": "CategoryController.php", "icon": "php" },
                      { "label": "CustomerController.php", "icon": "php" },
                      { "label": "ExpenseController.php", "icon": "php" },
                      { "label": "PaymentController.php", "icon": "php" },
                      { "label": "ProductController.php", "icon": "php" },
                      { "label": "PurchaseController.php", "icon": "php" },
                      { "label": "ReturnOrderController.php", "icon": "php" },
                      { "label": "SaleController.php", "icon": "php" },
                      { "label": "StaffController.php", "icon": "php" },
                      { "label": "SupplierController.php", "icon": "php" },
                      { "label": "TransferController.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Search",
                    "children": [
                      { "label": "SearchController.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Setting",
                    "children": [
                      { "label": "AccountController.php", "icon": "php" },
                      { "label": "CustomFieldController.php", "icon": "php" },
                      { "label": "MailController.php", "icon": "php" },
                      { "label": "PaymentController.php", "icon": "php" },
                      { "label": "RegisterController.php", "icon": "php" },
                      { "label": "ScaleBarcodeController.php", "icon": "php" },
                      { "label": "SettingController.php", "icon": "php" },
                      { "label": "StoreController.php", "icon": "php" },
                      { "label": "TaxController.php", "icon": "php" }
                    ]
                  },
                  { "label": "AjaxController.php", "icon": "php" },
                  { "label": "AttachmentController.php", "icon": "php" },
                  { "label": "HomeController.php", "icon": "php" },
                  { "label": "PublicController.php", "icon": "php" }
                ]
              },
              { "label": "Controller.php", "icon": "php" }
            ]
          },
          {
            "label": "Middlewares",
            "children": [
              { "label": "HandleInertiaRequests.php", "icon": "php" },
              { "label": "Language.php", "icon": "php" },
              { "label": "OpenRegister.php", "icon": "php" },
              { "label": "SelectStore.php", "icon": "php" }
            ]
          },
          {
            "label": "Requests",
            "children": [
              {
                "label": "Sma",
                "children": [
                  {
                    "label": "Order",
                    "children": [
                      { "label": "DeliveryRequest.php", "icon": "php" },
                      { "label": "ExpenseRequest.php", "icon": "php" },
                      { "label": "GiftCardRequest.php", "icon": "php" },
                      { "label": "PaymentRequest.php", "icon": "php" },
                      { "label": "PurchaseRequest.php", "icon": "php" },
                      { "label": "QuotationRequest.php", "icon": "php" },
                      { "label": "ReturnOrderRequest.php", "icon": "php" },
                      { "label": "SaleRequest.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "People",
                    "children": [
                      { "label": "AddressRequest.php", "icon": "php" },
                      { "label": "CustomerGroupRequest.php", "icon": "php" },
                      { "label": "CustomerRequest.php", "icon": "php" },
                      { "label": "PriceGroupRequest.php", "icon": "php" },
                      { "label": "RoleRequest.php", "icon": "php" },
                      { "label": "SupplierRequest.php", "icon": "php" },
                      { "label": "UserRequest.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Product",
                    "children": [
                      { "label": "AdjustmentRequest.php", "icon": "php" },
                      { "label": "BrandRequest.php", "icon": "php" },
                      { "label": "CategoryRequest.php", "icon": "php" },
                      { "label": "ProductRequest.php", "icon": "php" },
                      { "label": "PromotionRequest.php", "icon": "php" },
                      { "label": "StockCountRequest.php", "icon": "php" },
                      { "label": "TransferRequest.php", "icon": "php" },
                      { "label": "UnitRequest.php", "icon": "php" }
                    ]
                  },
                  {
                    "label": "Setting",
                    "children": [
                      { "label": "AccountRequest.php", "icon": "php" },
                      { "label": "CustomFieldRequest.php", "icon": "php" },
                      { "label": "StoreRequest.php", "icon": "php" },
                      { "label": "TaxRequest.php", "icon": "php" }
                    ]
                  }
                ]
              },
              { "label": "LoginRequest.php", "icon": "php" }
            ]
          },
          {
            "label": "Resources",
            "children": [
              { "label": "Collection.php", "icon": "php" },
              { "label": "Resource.php", "icon": "php" }
            ]
          }
        ]
      },
      {
        "label": "Imports",
        "children": [
          { "label": "BrandImport.php", "icon": "php" },
          { "label": "CategoryImport.php", "icon": "php" },
          { "label": "ComboProductImport.php", "icon": "php" },
          { "label": "ComboProductRowImport.php", "icon": "php" },
          { "label": "CustomerImport.php", "icon": "php" },
          { "label": "ProductImport.php", "icon": "php" },
          { "label": "ProductsImport.php", "icon": "php" },
          { "label": "ProductTaxImport.php", "icon": "php" },
          { "label": "ProductVariationImport.php", "icon": "php" },
          { "label": "StockCountImport.php", "icon": "php" },
          { "label": "SupplierImport.php", "icon": "php" }
        ]
      },
      {
        "label": "Jobs",
        "children": [
          {
            "label": "FiscalService",
            "children": [
              { "label": "ReportNewReturnSale.php", "icon": "php" },
              { "label": "ReportNewSale.php", "icon": "php" },
              { "label": "ReportSaleUpdate.php", "icon": "php" }
            ]
          },
          {
            "label": "Sma",
            "children": [{ "label": "AdjustStoreStock.php", "icon": "php" }]
          }
        ]
      },
      {
        "label": "Listeners",
        "children": [
          { "label": "AdjustmentEventListener.php", "icon": "php" },
          { "label": "AttachmentEventListener.php", "icon": "php" },
          { "label": "PurchaseEventListener.php", "icon": "php" },
          { "label": "ReturnOrderEventListener.php", "icon": "php" },
          { "label": "SaleEventListener.php", "icon": "php" },
          { "label": "TransferEventListener.php", "icon": "php" }
        ]
      },
      {
        "label": "Models",
        "children": [
          {
            "label": "Scopes",
            "children": [{ "label": "OfStore.php", "icon": "php" }]
          },
          {
            "label": "Sma",
            "children": [
              {
                "label": "Order",
                "children": [
                  { "label": "AwardPoint.php", "icon": "php" },
                  { "label": "Delivery.php", "icon": "php" },
                  { "label": "Expense.php", "icon": "php" },
                  { "label": "GiftCard.php", "icon": "php" },
                  { "label": "ItemVariation.php", "icon": "php" },
                  { "label": "Payment.php", "icon": "php" },
                  { "label": "Purchase.php", "icon": "php" },
                  { "label": "PurchaseItem.php", "icon": "php" },
                  { "label": "Quotation.php", "icon": "php" },
                  { "label": "QuotationItem.php", "icon": "php" },
                  { "label": "ReturnOrder.php", "icon": "php" },
                  { "label": "ReturnOrderItem.php", "icon": "php" },
                  { "label": "Sale.php", "icon": "php" },
                  { "label": "SaleItem.php", "icon": "php" }
                ]
              },
              {
                "label": "People",
                "children": [
                  { "label": "Address.php", "icon": "php" },
                  { "label": "Customer.php", "icon": "php" },
                  { "label": "CustomerGroup.php", "icon": "php" },
                  { "label": "PriceGroup.php", "icon": "php" },
                  { "label": "Supplier.php", "icon": "php" },
                  { "label": "User.php", "icon": "php" }
                ]
              },
              {
                "label": "Pos",
                "children": [
                  { "label": "Order.php", "icon": "php" },
                  { "label": "Printer.php", "icon": "php" },
                  { "label": "Register.php", "icon": "php" }
                ]
              },
              {
                "label": "Product",
                "children": [
                  { "label": "Adjustment.php", "icon": "php" },
                  { "label": "AdjustmentItem.php", "icon": "php" },
                  { "label": "Brand.php", "icon": "php" },
                  { "label": "Category.php", "icon": "php" },
                  { "label": "Product.php", "icon": "php" },
                  { "label": "ProductStore.php", "icon": "php" },
                  { "label": "Promotion.php", "icon": "php" },
                  { "label": "Serial.php", "icon": "php" },
                  { "label": "Stock.php", "icon": "php" },
                  { "label": "StockCount.php", "icon": "php" },
                  { "label": "StockCountItem.php", "icon": "php" },
                  { "label": "Track.php", "icon": "php" },
                  { "label": "Transfer.php", "icon": "php" },
                  { "label": "TransferItem.php", "icon": "php" },
                  { "label": "Unit.php", "icon": "php" },
                  { "label": "UnitPrice.php", "icon": "php" },
                  { "label": "Variation.php", "icon": "php" }
                ]
              },
              {
                "label": "Setting",
                "children": [
                  { "label": "Account.php", "icon": "php" },
                  { "label": "CustomField.php", "icon": "php" },
                  { "label": "Store.php", "icon": "php" },
                  { "label": "Tax.php", "icon": "php" }
                ]
              }
            ]
          },
          { "label": "Company.php", "icon": "php" },
          { "label": "Country.php", "icon": "php" },
          { "label": "Model.php", "icon": "php" },
          { "label": "Permission.php", "icon": "php" },
          { "label": "Role.php", "icon": "php" },
          { "label": "Setting.php", "icon": "php" },
          { "label": "State.php", "icon": "php" },
          { "label": "Timezone.php", "icon": "php" },
          { "label": "User.php", "icon": "php" }
        ]
      },
      {
        "label": "Notifications",
        "children": [
          {
            "label": "Sma",
            "children": [
              {
                "label": "Order",
                "children": [
                  { "label": "PaymentNotification.php", "icon": "php" },
                  { "label": "PurchaseNotification.php", "icon": "php" },
                  { "label": "QuotationNotification.php", "icon": "php" },
                  { "label": "ReturnOrderNotification.php", "icon": "php" },
                  { "label": "SaleNotification.php", "icon": "php" }
                ]
              },
              {
                "label": "Product",
                "children": [
                  { "label": "TransferNotification.php", "icon": "php" }
                ]
              }
            ]
          }
        ]
      },
      {
        "label": "Notifications",
        "children": [
          { "label": "AdjustmentObserver.php", "icon": "php" },
          { "label": "ExpenseObserver.php", "icon": "php" },
          { "label": "PaymentObserver.php", "icon": "php" },
          { "label": "ProductObserver.php", "icon": "php" },
          { "label": "PurchaseObserver.php", "icon": "php" },
          { "label": "ReturnORderObserver.php", "icon": "php" },
          { "label": "SaleObserver.php", "icon": "php" },
          { "label": "TransferObserver.php", "icon": "php" },
          { "label": "VariationObserver.php", "icon": "php" }
        ]
      },
      {
        "label": "Policies",
        "children": [{ "label": "UpdatePolicy.php", "icon": "php" }]
      },
      {
        "label": "Providers",
        "children": [
          { "label": "AppServiceProvider.php", "icon": "php" },
          { "label": "FortifyServiceProvider.php", "icon": "php" },
          { "label": "JetstreamServiceProvider.php", "icon": "php" }
        ]
      },
      {
        "label": "Rules",
        "children": [
          { "label": "AddressState.php", "icon": "php" },
          { "label": "ExtraAttributes.php", "icon": "php" },
          { "label": "LocaleLength.php", "icon": "php" },
          { "label": "PhoneNumber.php", "icon": "php" },
          { "label": "ProductVariation.php", "icon": "php" },
          { "label": "Recaptcha.php", "icon": "php" },
          { "label": "Turnstile.php", "icon": "php" }
        ]
      },
      {
        "label": "Services",
        "children": [
          { "label": "CheckOverSelling.php", "icon": "php" },
          { "label": "OrderCalculator.php", "icon": "php" },
          { "label": "OrderItemCalculator.php", "icon": "php" }
        ]
      },
      {
        "label": "Traits",
        "children": [
          { "label": "Authorizable.php", "icon": "php" },
          { "label": "GroupPrice.php", "icon": "php" },
          { "label": "HasAttachments.php", "icon": "php" },
          { "label": "HasAwardPoints.php", "icon": "php" },
          { "label": "HasPromotions.php", "icon": "php" },
          { "label": "HasSchemalessAttributes.php", "icon": "php" },
          { "label": "HasStock.php", "icon": "php" },
          { "label": "HasTaxes.php", "icon": "php" },
          { "label": "HidePrivateAttributes.php", "icon": "php" },
          { "label": "Impersonate.php", "icon": "php" },
          { "label": "LogActivity.php", "icon": "php" },
          { "label": "Paginatable.php", "icon": "php" },
          { "label": "SyncHasMany.php", "icon": "php" },
          { "label": "Trackable.php", "icon": "php" }
        ]
      }
    ]
  },
  {
    "label": "bootstrap",
    "children": [
      { "label": "app.php", "icon": "php" },
      { "label": "providers.php", "icon": "php" }
    ]
  },
  { "label": "config", "icon": "folder" },
  {
    "label": "database",
    "children": [
      { "label": "factories", "icon": "folder" },
      { "label": "migrations", "icon": "folder" },
      { "label": "seeders", "icon": "folder" }
    ]
  },
  {
    "label": "lang",
    "children": [
      { "label": "en", "icon": "folder" },
      { "label": "en.json", "icon": "folder" },
      { "label": "languages.json", "icon": "folder" }
    ]
  },
  { "label": "modules", "icon": "folder" },
  { "label": "packages", "icon": "folder" },
  { "label": "public", "icon": "folder" },
  {
    "label": "resources",
    "children": [
      { "label": "css", "children": [{ "label": "app.css", "icon": "css" }] },
      {
        "label": "js",
        "children": [
          { "label": "Components", "icon": "folder" },
          { "label": "Core", "icon": "folder" },
          { "label": "Layouts", "icon": "folder" },
          { "label": "Pages", "icon": "folder" },
          { "label": "app.js", "icon": "js" },
          { "label": "ssr.js", "icon": "js" }
        ]
      },
      {
        "label": "views",
        "children": [{ "label": "app.blade.php", "icon": "php" }]
      }
    ]
  },
  {
    "label": "routes",
    "children": [
      {
        "label": "groups",
        "children": [
          { "label": "pos.php", "icon": "php" },
          { "label": "public.php", "icon": "php" },
          { "label": "report.php", "icon": "php" },
          { "label": "search.php", "icon": "php" },
          { "label": "settings.php", "icon": "php" },
          { "label": "sma.php", "icon": "php" }
        ]
      },
      { "label": "api.php", "icon": "php" },
      { "label": "console.php", "icon": "php" },
      { "label": "web.php", "icon": "php" }
    ]
  },
  {
    "label": "storage",
    "children": [
      {
        "label": "app",
        "children": [
          { "label": "public", "icon": "folder" },
          { "label": "private", "icon": "folder" }
        ]
      },
      { "label": "framework", "icon": "folder" },
      { "label": "logs", "icon": "folder" }
    ]
  },
  { "label": "tests", "icon": "folder" },
  { "label": "vendor", "icon": "folder" },
  { "label": ".env" },
  { "label": ".gitignore" },
  { "label": "artisan" },
  { "label": "composer.json" },
  { "label": "package.json" },
  { "label": "vite.config.js" }
]' />

</div>
