---
title: Installation Guide for Forge, Ploi & cloudways
outline: deep
---

# Installation on VPS using Laravel Forge

There are quite many services available to manage Servers (VPSs) like, Laravel Forge, **_[Ploi.io](https://ploi.io/register?referrer=zSYvfFWKC1md6sOD1QD4)_**, Cloudways and RunCloud etc.

## Add Site

![Forge Site](/forge-site.png)

Please add site to your server then link git repo or upload the files manually.

::: warning Git repo error
If you get error while installing git repo, please disable the composer install command then try again.
:::

::: details VPS for this app only?
If you only want to use your VPS for this application then we can help you manage server using Laravel forge.
:::

### Deployment Script

All server management solution has option for deployment script, here is Laravel Forge example code.

```sh
cd /home/forge/sma4.tec.sh

# Using git repo,
# if not, manually upload latest files and remove line bellow
git pull origin $FORGE_SITE_BRANCH

# Install dependencies and build app
pnpm i
pnpm run build

# Install packages
$FORGE_COMPOSER install --no-interaction --prefer-dist --optimize-autoloader

# Prevent concurrent php-fpm reloads...
touch /tmp/fpmlock 2>/dev/null || true
( flock -w 10 9 || exit 1
    echo 'Reloading PHP FPM...'; sudo -S service $FORGE_PHP_FPM reload ) 9</tmp/fpmlock

# Rum migration and optimize:clear commands
if [ -f artisan ]; then
    $FORGE_PHP artisan migrate --force
    $FORGE_PHP artisan optimize:clear
fi

# Inertia SSR reload when you enable it from site application
$FORGE_PHP artisan inertia:stop-ssr

echo "Deployed!"
```

### Queue and SSL

You should install and enable SSL (almost all offer free SSL with LetsEncrypt) for you site and add Queue worker for redis (remember to update `QUEUE_CONNECTION=redis` in Site Environment/.env)

## Create Database

Please create database and user then assign all privileges to the user on the database.

![Forge Server Database](/forge-server-database.png)

## Access installer in browser

1. You can access the installer by adding `/install` at the end of your domain.

   ::: info `install` is not a **_folder_** but route.
   :::

   ```sh
   # Installer URL
   https://yourdomain.com/install
   ```

   ::: warning If you can't access the installer then please check error logs in the `storage/logs/` folder.

   _If SSL enabled and not configured correctly that could result in redirect error too._
   :::

2. Get your license file as purchase verification, we already have database details (_installation step 1_)
3. Installer checks for php extensions required along with write-able directories.
   ::: danger If it shows any errors, please fix them by installing/enabling the extension or setting the correct permission on directories then try again.
   :::
4. Please provide the details of your purchase, database, and user account (_installation step 3_).
   ::: info For purchase verification, the username is Envato username that you use to login to codecanyon.net and themeforest.net The purchase code is in your license file, please download the license to get purchase code.
   :::
   ::: danger If you get server error, please check the Laravel logs in the `storage/logs/` folder and if you don't understand the error, please ask question at support portal with error details.

   _Please don't share any private data in questions, if you need to share any private data then you should ask question then add private reply with confidential information._
   :::

5. Complete the installation by pressing the **_Finalize_** button.

::: info Didn't understand any step?
If you need further assistance, please validate your purchase code at [support portal](https://tecdiary.com/support) and ask question there.
:::
