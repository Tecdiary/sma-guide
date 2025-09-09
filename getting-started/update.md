---
title: Update Guide
outline: deep
---

# Update Guide

::: danger Can't update v3 to v4
We are sorry but the version 4 is not completable with version 3, so please install version 4 and import the products, customers, and update settings to use the new version.
:::

## Update v4 to the latest release

::: warning Backup First!
Please backup your database, `.env` file, `public/asset` and `storage/app` folders.
:::

1. Upload the **_latest files & folders_** to replace the old ones.

2. Run the **_migration command_**

   ```sh
   # cd /path/to/uploaded/folder
   php artisan migrate --force

   ```

3. Restore the `.env`, `public/asset` and `storage/app` folders.

:::danger If you have any question or require further information, you should ask support question at [support portal](https://tecdiary.com/support)
:::
