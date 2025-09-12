---
title: Application Settings
outline: deep
---

# Settings

![Dashboard](/screenshots/settings.png)

![Dashboard](/screenshots/stores.png)

::: warning Setup CRON Job
As you know that app is developer using Laravel. So, when using Laravel's scheduler, we only need to add a
single cron configuration entry to our server that runs the `schedule:run` command every minute.

```sh
* * * * * php /path/to/project/artisan schedule:run >> /dev/null 2>&1

# OR

* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

:::
