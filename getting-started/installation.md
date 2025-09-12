---
title: Installation Guide
outline: deep
---

# Installation steps

## Please start installation by following these steps

1. Please upload **_all the files & folders_** to your server.

2. You can access the installer by adding `/install` at the end of your domain.

   ::: info `install` is not a **_folder_** but route.
   :::

   ::: tip Root path
   Please set the root path of domain/subdomain to `public` folder in your uploaded files and for
   subfolder, you need to redirect all traffic to `public` folder and don’t allow web access to the folder in which you have uploaded files.
   :::

   ```sh
   # Installer URL
   https://yourdomain.com/install
   https://yourdomain.com/subfolder/install
   https://subdomain.yourdomain.com/install
   ```

3. Please prepare these details (_installation step 1_)

4. Installer checks for php extensions required along with write-able directories.
   ::: danger If it shows any errors, please fix them by installing/enabling the extension or setting the correct permission on directories then try again.
   :::

5. Please provide the details of your purchase, database, and user account (_installation step 3_).
   ::: info For purchase verification, the username is Envato username that you use to login to codecanyon.net and themeforest.net The purchase code is in your license file, please download the license to get purchase code.
   :::
   ::: danger If you get server error, please check the Laravel logs in the `storage/logs/` folder and if you don't understand the error, please ask question at support portal with error details.

   _Please don't share any private data in questions, if you need to share any private data then you should ask question then add private reply with confidential information._
   :::

6. Complete the installation by pressing the **_Finalize_** button.

::: info Didn't understand any step?
If you need further assistance, please validate your purchase code at [support portal](https://tecdiary.com/support) and ask question there.
:::

::: details Not familiar with Servers?
We offer installation service for $20.00, you can [Open Ticket](https://tecdiary.com/support/tickets/create) to request installation.
:::

## After Installation

Please add the following and start using the beta version

1. Account
2. Store
3. Taxes
4. Settings (app, mail, payment, scale barcode)
5. Brands, Categories, Units and Products
