---
title: Application Settings
outline: deep
---

# Settings

Application setting here

::: warning Setup CRON Job
As you know that app is developer using Laravel. So, when using Laravel's scheduler, we only need to add a
single cron configuration entry to our server that runs the `schedule:run` command every minute.

```sh
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

:::
