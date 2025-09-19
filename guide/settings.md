---
title: Application Settings
outline: deep
---

# Settings

Settings allow you to configure the app as per your use. The page divided in tabs for General, Mail (email), Payments, Scale Barcode, POS and Shop Settings (depending on your purchase).

### General Settings

You can set app name, icons, logos, head office details and other part of the application like rows per page and captcha etc.

![Dashboard](/screenshots/settings.png)

### Mail Settings

For emails, the following driver are available.

1. Log to file (logs email to file in the `storage/logs/` folder)
2. SMTP
3. SendMail
4. AWS SES
5. Mailgun
6. PostMark
7. Resend

### Payments Settings

For payments, please configure the default currency code and card gateway (only Stripe and more coming soon).

### Scale Barcode Settings

Scale barcode settings to parse the barcode printed by the digital scales.

### POS Settings

POS settings (if you have POS module) to choose design, default category, default customer, quick cash values and other pos related settings.

## Accounts

Accounts are the balance sheet for sales, purchases and payments etc.

## Stores

SMA has option to manage multiple stores. It tracks the quantity for each store. You can assign account and price group for stores.

![Dashboard](/screenshots/stores.png)

## Taxes

SMA allows you to have multiple taxes per product but you should add them first in the settings and then assign to the product while adding/editing/selling them.

The taxes can be configure for state level like in the Canada & India.

## Custom Fields

You can add custom field to the models and collect extra information about them.

---

::: warning Setup CRON Job
As you know that app is developer using Laravel. So, when using Laravel's scheduler, we only need to add a
single cron configuration entry to our server that runs the `schedule:run` command every minute.

```sh
* * * * * php /path/to/project/artisan schedule:run >> /dev/null 2>&1

# OR

* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

:::
