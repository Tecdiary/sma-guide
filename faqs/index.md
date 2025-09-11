---
title: Frequently Asked Questions
outline: deep
next: false
---

# FAQs

Frequently Asked Questions

## Errors

### I have installed the item and getting 500 Internal Server Error?

Please check the latest log file in the `storage/logs/` folder and ask question with error details at [support portal](https://tecdiary.com/support)

### Why am I getting 500 Internal Server Error?

Please check the latest log file in the `storage/logs/` folder and ask question with error details at [support portal](https://tecdiary.com/support)

### Why sale time is different from my computer time?

The time with Javascript and PHP could be different as javascript use your computer time but php will use your server time.

Please check your timezone in settings and make sure that you have set the correct timezone. You should select the **_On Server Side (PHP)_** for **_Date Format_**

### Why I can't send emails?

Please check that the **_Mail Settings_** under settings menu are correct. If yes, then you can check the latest log file in the `storage/logs/` folder to errors and ask question at [support portal](https://tecdiary.com/support) with error details if it's not clear to you.

## General

### How many products can be managed with this Stock Manager?

You can have any number of products ranging from **1** to **50,000** or more.

### How to enable SSL/HTTPS support?

Once you installed/enabled the SSL certificate, you can update the `APP_URL` to start with `https://`

#### Force HTTPS:

You can enforce HTTPS the entire application by adding the following code in `boot` method of `app/Providers/AppServiceProvider.php`

```php
use Illuminate\Support\Facades\URL;

if (app()->environment('production')) {
  URL::forceScheme('https');
}
```

#### Web Server Redirection:

Configure Nginx or Apache to redirect all HTTP requests to their HTTPS equivalents.

```nginx
server {
  listen [::]:80;
  return 301 https://$host$request_uri;
}
```

You can set apache using `.htaccess` file

```apache
RewriteEngine On
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

### Can I modify the item?

Yes, you can modify the script as per your needs and license.

We offer Regular License only that allows you to use the Item to create one single End Product for yourself or for one client (a “single application”). If you have more than once clients, you will need to purchase separate license for each client.

You can visit this link to [licensing faqs page of Evnato marketplace](http://codecanyon.net/licenses/faq)

### Can I manage multiple warehouses/stores?

Yes, you can manage multiple warehouse/stores with same product base.

However, if you have different products in each warehouse/store, you can add all products for each warehouse/store (combine products for all warehouse) and then manage multiple warehouse/stores.

OR

You will be buy separate license and install SMA separately for each warehouse/store.

### Can I white label it to have my company name and logo?

Yes, you can. Please update the settings to update site name and upload logo.

### How can I change the invoice logo for store?

Please upload the logo by editing the store.

### How can I translate into other language?

Please refer to **_[Adding Language](/developer/language)_** under developer guide.

### How can I enable Indian GST?

SMA is built to have multiple taxer per product/order. You can add taxes and select state level. If you select same then taxes will be applied to if the store and customer states are same otherwise any other state with no same option will be applied.

If you have any suggestions, please let is know by asking question or requesting feature at [support portal](https://tecdiary.com/support)

### Can I install this item on localhost with wamp/xampp/easyphp?

You can install this item on localhost with any web platform xampp, mamp, lamp, wamp or easyphp.

We recommend [Laravel Herd](https://herd.laravel.com)

::: warning
Internet connectivity is required for installation to verify the purchase. Once installed, you can use it without Internet.
:::

### Does it support my barcode scanner/receipt printer/magnetic card reader?

Yes, please refer to [hardware](/hardware) page for more information about this.

### Will I get the full source code?

Yes, you will get 100% source code including PHP (Laravel), Javascript (Vuejs) and css.

### Can I modify it as per my needs?

Yes, you modify it as per license.

### How do SMA handle out bounds?

Products will be automatically subtracted from the store stock once the sale created.

### How do SMA handle in bounds?

New Purchase will automatically add/increase the product stock in the selected store.

### Why I can sell the products even if I don't have stock in store?

Please check the overselling option in system settings, that would be enabled. You can disable overselling to stop selling out of stock products.

### Why the products price is different on sales page?

Please check the customer group (for customer) and price group (for store).

### What is the difference between inclusive and exclusive tax on add product page?

Inclusive tax method means that tax is already included in the price. Exclusive tax method means that tax is not included in the price and should be calculated on price and added separately.

For example: Product Price 100 and Tax 10%

```
Inclusive tax method:
Price 90.91 and Tax amount: 9.09 = 100 (total price with tax)

Exclusive tax method:
Price 100 and Tax amount: 10 = 110 (total price with tax)
```

::: warning Want to calculate inclusive same as exclusive?
Please update the setting to select the **_Inclusive Tax Calculation Formula_**
:::

### Where are the header and footer view files?

If you need to add any code, you can edit the `resources/views/app.blade.php` If you are referring to admin area top and side bars then you can check `Components` folder in `resources/js/Layouts/`

### How can I change Quick Cash buttons?

Please modify them in the POS settings page.

### How can I set the reference numbers to start from my own number?

You can modify the key `*_reference_number` in the `settings` table. If you are using the store based reference numbers, then please edit the 'reference_numbers' column in the `stores` tables.

### How does discount apply to the products and order?

Discount is applied to product (order item) for the sale, you can click the product name to open modal that will have option to change unit, price, discount, taxes and comment for the order item.

### What files I need to edit if I have moved to different server and/or domain?

Same url (domain): You will need to update the database configuration in `.env` file.

Different url (domain): You will need to update the `APP_URL` and database configuration in `.env` file.

### Can I integrate SMA with third party software like wordpress / magento / opencart?

No, there is no option to integrate SMA with any third party scripts/software yet. We
have plan to add APIs modules after the stable release of v4 (Stable), then will work on
the plug-ins/extensions to integrate SMA with other software.

### Why reference number is not auto generated while adding sale/purchase and other?

Please leave reference field empty/blank, system will generate reference automatically after submit. This is to avoid the same reference number issue when adding records same time.

### How can I setup customer display in POS?

You can click the view bill (tablet icon) in top bar at pos screen and then display it to your
2nd display.

### Can you please explain Inventory Accounting (FIFO/LIFO/AVCO)?

#### First-in-first-out (FIFO)

Defined: The oldest inventory asset is recorded as sold first – regardless of the actual shelf-age of the given physical asset.

Applied: While it is the most widely used accounting technique in periodic inventory management today, FIFO may fail to offer a full picture of inventory value if inflation and price increases are not closely analyzed. Thus, FIFO may inflate or deflate the actual value of future inventory.

#### Last-in first-out (LIFO)

Defined: The newest inventory asset is recorded as sold first.

Applied: The LIFO method could reduce a company’s tax responsibility in times of growing inflation – but it has been heavily regulated under the International Financial Reporting Standards.

#### Average cost or weighted cost (AVCO)

Defined: The AVCO (average cost) method will take the total cost of goods still available for sale and divide it by the total sum of product from the beginning inventory and purchases.

Applied: With the AVCO method, cost flow is determined as a weighted average of all total unit costs

#### Products exporting soon

Defined: This method will sell the products that are expiring soon

#### Use Batch Number

To use the purchase batch numbers (this option is not yet available).

### Why I need to set cron job?

Cron job will perform these tasks

- Backup database
- Reset reference numbers
- Clean up the activity records
- Send the overdue notification on the due date and after

## Users and Roles

### What type of roles are available?

**_Super Admin_**, **_Customer_**, **_Supplier_** fixed permission roles. You can add roles and set permissions as you need. If any permission is missing from the form, please do let is know by asking question at [support portal](https://tecdiary.com/support)

### User forgot his/her password. How do I reset it?

You can visit Users page under People menu and then edit the user.

### How do I delete account?

You can visit Users page under People menu and then delete the user. If the user has any record then it can't be deleted but you can uncheck the active checkbox to disable login.

## Payments

### What payment gateways are available in SMA?

Payment options available for customers to choose from are as following:

1. Paypal
2. Card (Stripe)
3. Cash on Delivery
4. Balance (if user has account balance)
5. Others (transfer or bank-in to offline account)

### What payment gateways are available in POS Module for SMA?

To process the credit/debit card, you manually charge using your terminal and then select Card Terminal as payment method.

We will add Stripe Terminal option in the future updates.

### Can I have recurring sales or subscription?

No, currently there is no such feature available yet but we will add the recurring sales option in future updates.

### Will you be adding more payment gateways?

Yes, we will be exploring the new gateways. You can request feature if you want to request any gateway.

### How the balance payment type works?

Please visit the **_Customers_** under People menu to check the due amount and add payment to any customer.

On shop sales, user can select the **_Balance_** in payment method and system will automatically deduct the sale amount from customer's balance amount.
