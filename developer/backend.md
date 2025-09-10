---
title: Backend Guide
outline: deep
prev: false
next: false
---

# Backend Guide

Application backend is developed using **_[Laravel](https://laravel.com/)_** The controllers are in the `app/Http/Controllers/Sma/` folder while models are in `app/Models/` and SMA related in `app/Models/Sma/` folder.

## What is Laravel

Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.

Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.

### Why Laravel?

There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications.

#### A Progressive Framework

We like to call Laravel a "progressive" framework. By that, we mean that Laravel grows with you. If you're just taking your first steps into web development, Laravel's vast library of documentation, guides, and video tutorials will help you learn the ropes without becoming overwhelmed.

If you're a senior developer, Laravel gives you robust tools for dependency injection, unit testing, queues, real-time events, and more. Laravel is fine-tuned for building professional web applications and ready to handle enterprise work loads.

#### A Scalable Framework

Laravel is incredibly scalable. Thanks to the scaling-friendly nature of PHP and Laravel's built-in support for fast, distributed cache systems like Redis, horizontal scaling with Laravel is a breeze. In fact, Laravel applications have been easily scaled to handle hundreds of millions of requests per month.

#### A Community Framework

Laravel combines the best packages in the PHP ecosystem to offer the most robust and developer friendly framework available. In addition, thousands of talented developers from around the world have contributed to the framework.

### Laravel Docs

You can find Laravel documentation at [https://laravel.com/docs](https://laravel.com/docs)

## Queues

Queues provide a unified queueing API across a variety of different queue backends, such as Amazon SQS, Redis, or even a relational database. By moving time intensive tasks (like emails, fiscal reporting and reading or storing files etc) to a queue, application can respond to web requests with blazing speed and provide a better user experience to your customers.

The default is `QUEUE_CONNECTION=sync` but you can set to any driver like "sync", "database", "beanstalkd", "sqs", and "redis" as you need in the `.env` file.

### cPanal

You can run the following command with cron job and set `QUEUE_CONNECTION` to `database`

```sh
php artisan queue:work —-queue=high,default --stop-when-empty
```

## Cron Job

When using Laravel's scheduler, we only need to add a single cron configuration entry to our server that runs the `schedule:run` command every minute.

```sh
* * * * * php /path/to/project/artisan schedule:run >> /dev/null 2>&1

# OR

* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```
