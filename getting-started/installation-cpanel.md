---
title: Installation Guide for cPanel
outline: deep
---

# Installation on cPanel

Please follow the following steps

### Where we want it

1. Main Domain `https://yourdomain.com`
   ::: warning Disable access to subfolder
   **_please make sure that no one can access `/public_html` from your main domain, only `/public_html/public` should be accessible._**

   **You can do this by editing your web server config or use the symbolic link.**

   For symbolic link, delete the `public_html` folder and upload file to some other folder. Connect via SSH or access cPanel Terminal to create symbolic link

   ```sh
   cd /home/cpaneluser
   ln -s /home/cpaneluser/uploadedfile/public /home/cpaneluser/public_html
   ```

   This command creates a symbolic link named public_html that points to your Laravel project's public directory.
   :::

2. Subdirectory/Subfolder `https://yourdomain.com/subfolder`
   ::: warning Disable access to subfolder
   **_please make sure that no one can access `/subfolder` from your main domain, only `/subfolder/public` should be accessible._**

   **You can do this by editing your web server config or use the symbolic link.**

   For symbolic link, delete the `public_html` folder and upload file to some other folder. Connect via SSH or access cPanel Terminal to create symbolic link

   ```sh
   cd /home/cpaneluser/subfolder
   ln -s /home/cpaneluser/uploadedfile/public /home/cpaneluser/public_html/subfolder
   ```

   This command creates a symbolic link named public_html that points to your Laravel project's public directory.
   :::

3. Subdomain `https://subdomain.yourdomain.com`
   ::: warning Root Path
   Please set the subdomain root path to `public` folder like, `/home/cpaneluser/sma4.tec.sh/public` => **_Good_** nothing to worry

   OR

   `/home/cpaneluser/public_html/sma4.tec.sh/public` => **_please make sure that no one can access `http://yourdomain.com/sma4.tec.sh/`_**
   :::

#### No SSH or Terminal?

**_For creating symbolic link for public_html and subfolder installation_**

If you don't have access to SSH or Terminal then you can create Symbolic Link via PHP Script:

- Create a new PHP file (e.g., createsymlink.php) in your uploaded folder.
- Add the following code to the file:

```php
<?php
$targetFolder = '/home/cpaneluser/uploadedfile/public';
$linkFolder = '/home/cpaneluser/public_html';

if (file_exists($linkFolder)) {
    unlink($linkFolder); // Remove existing public_html if it's a file or empty directory
}

if (symlink($targetFolder, $linkFolder)) {
    echo 'Symbolic link created successfully.';
} else {
    echo 'Error while creating symbolic link.';
}
?>
```

### Upload Files

1. Login to your cPanel and click **_File Manager_**
   ![File Manager](/1-file-manager.png)
2. Select `public_html` folder and click **_Upload_**
3. Select the SMA download file and click **_Select File_**
   ![Upload File](/2-upload-file.png)
4. Once uploaded, go pack to `public_html` folder
5. Right click on uploaded zip and **_Extract_**
6. If it's extracted in the folder then go to that folder
7. Select all files and **_Move_** to `public_html`
   ![Public Html folder](/3-public_html-folder.png)

### Create Database and User

1. From the cPanel Home and click **_MySQL Database_** in Databases section
   ![Databases](/4-mysql-db.png)
2. Add new database
3. Add new user and note the password
4. Add user to database -> Select database and users and click **_Add_**
5. Verify the database and user then select **_All Privileges_** and click **_Make Changes_**
   ![Database Privileges](/4-db-privileges.png)

### Access installer in browser

1. You can access the installer by adding `/install` at the end of your domain.

   ::: info `install` is not a **_folder_** but route.
   :::

   ```sh
   # Installer URL
   Domain: https://yourdomain.com/install
   Subfolder: https://yourdomain.com/subfolder/install
   Subdomain: https://subdomain.yourdomain.com/install
   ```

   ::: warning If you can't access the installer then there is something wrong with path or there are some error causing this. Please double check the upload. If that is okay then check the if there is any error logged in the `storage/logs/` folder.

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
