---
title: SaaS/Cloud version to offer subscriptions to your clients
outline: deep
next: false
---

# SaaS Module Documentation

## Overview

The Saas (Software as a Service) module is a comprehensive multi-tenancy subscription management system built for Laravel applications. It provides complete functionality for managing SaaS subscriptions, billing, tenant isolation, and payment processing through Stripe and Paddle.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Models](#models)
- [Controllers](#controllers)
- [Middleware](#middleware)
- [Routes](#routes)
- [Services](#services)
- [Views & Components](#views--components)
- [Payment Gateways](#payment-gateways)
- [Testing](#testing)
- [Usage Examples](#usage-examples)

## Features

### Core Features

- **Multi-Tenancy Support**: Subdomain-based tenant isolation with automatic tenant resolution
- **Subscription Management**: Full subscription lifecycle management (create, update, cancel, resume)
- **Payment Integration**: Support for Stripe and Paddle payment gateways
- **Billing Portal**: Customer billing management and invoice access
- **Plan Management**: Flexible pricing plans with monthly/yearly billing options
- **Newsletter System**: Built-in newsletter subscription and management (soon)
- **Modes**: Support for private and maintenance modes
- **Customizable Pages**: Dynamic page management with shortcode support
- **Tenant Isolation**: Database-level tenant isolation (soon)
- **Webhook Handling**: Automated webhook processing for payment events

## Architecture

### Directory Structure

```
modules/Saas/
├── Console/
│   └── Commands/
│       └── SaasDbSeed.php           # Database seeder command
├── Database/
│   ├── Factories/                   # Model factories
│   ├── Seeders/                     # Database seeders
│   └── migrations/                  # Database migrations
│       └── dump/                    # Development/testing migrations
├── Http/
│   ├── Components/                  # Blade components
│   ├── Controllers/                 # HTTP controllers
│   ├── Jet/                         # Jetstream components
│   ├── Livewire/                    # Livewire components
│   ├── Middleware/                  # HTTP middleware
│   └── Requests/                    # Form requests
├── Models/                          # Eloquent models
├── Tec/                             # Core services and utilities
│   ├── Listeners/                   # Event listeners
│   ├── Notifications/               # Email notifications
│   ├── Services/                    # Business logic services
│   │   └── Stripe/                  # Stripe service implementations
│   ├── functions.php                # Helper functions
│   ├── SaasComposer.php             # View composer
│   └── Tec.php                      # Utility class
├── resources/
│   ├── assets/                      # Frontend assets (CSS, JS)
│   ├── components/                  # Blade components
│   ├── jet/                         # Jetstream views
│   └── pages/                       # Page templates
├── routes/
│   ├── paddle.php                   # Paddle webhook routes
│   ├── stripe.php                   # Stripe webhook routes
│   └── web.php                      # Web routes
└── SaasServiceProvider.php          # Module service provider
```

## Installation

The Saas module is automatically loaded through the Laravel service provider system.

### Requirements

- PHP 8.4+
- MySQL 8
- Wildcard subdomain setup (e.g., \*.example.com)

### Setup Steps

1. The module is auto-registered via `SaasServiceProvider`
2. Migrations are automatically loaded
3. Configure tenant settings in `config/tenant.php`
4. Set up payment gateway credentials in settings
5. For default data: run the seeder:
   ```bash
   php artisan migrate
   php artisan saas:db-seed
   ```

## Configuration

### Tenant Configuration

#### Environment Variables

```env
CENTRAL_DOMAINS=yourdomain.com
```

#### Directly modify config file

Configure central domains in `config/tenant.php`:

```php
return [
    'central_domains' => [
        'yourdomain.com',
        'localhost',
        '127.0.0.1',
    ],
    ...
];
```

## Models

### SaasTenant

Represents a tenant/organization in the system.

**Key Relationships:**

- `plan()`: BelongsTo SaasPlan
- `subscription()`: BelongsTo SaasSubscription
- `user()`: BelongsTo User (owner)
- `users()`: BelongsToMany User (tenant team members)

**Key Attributes:**

- `unique_id`: Unique identifier for the tenant
- `subdomain`: Tenant's subdomain
- `yearly`: Boolean for yearly billing
- `metadata`: Additional tenant data (JSON)

**Scopes:**

- `active()`: Filter active tenants

### SaasPlan

Represents subscription plans.

**Key Features:**

- Auto-generates slugs from plan name
- Supports both monthly and yearly pricing
- Prevents deletion if tenants exist

**Key Attributes:**

- `name`: Plan name
- `display_name`: Plan display name
- `slug`: URL-friendly identifier
- `monthly_price`: Monthly price in cents
- `yearly_price`: Yearly price in cents
- `stripe_monthly_id`: Stripe monthly price ID
- `stripe_yearly_id`: Stripe yearly price ID
- `paddle_monthly_id`: Paddle monthly price ID
- `paddle_yearly_id`: Paddle yearly price ID
- `active`: Plan availability status

**Scopes:**

- `active()`: Filter active plans

### SaasSubscription

Extends Laravel Cashier's Subscription model.

**Key Features:**

- Tracks subscription status
- Links to tenants via unique_id
- Supports trial periods
- Handles subscription lifecycle

### SaasPage

Dynamic content pages for the SaaS frontend.

**Key Features:**

- Slug-based routing
- Shortcode support
- Custom content management

### SaasNewsletterSubscriber

Newsletter subscription management.

**Key Features:**

- Email verification
- Unsubscribe functionality
- Signed URL confirmation

### SaasSetting

Key-value store for SaaS settings.

**Key Features:**

- Global settings storage
- Type-safe value casting

### Paddle Payment Models

- `SaasPaddleCustomer`: Extends Paddle Cashier Customer
- `SaasTransaction`: Extends Cashier Transaction
- `SaasSubscriptionItem`: Extends Cashier SubscriptionItem

## Controllers

### SubscriptionController

Manages subscription lifecycle.

**Actions:**

- `store()`: Create new subscription
- `cancel()`: Cancel subscription
- `resume()`: Resume canceled subscription
- `update()`: Update subscription plan

### SubdomainController

Handles subdomain validation.

**Actions:**

- `check()`: Validate subdomain availability

### ContactController

Manages contact form submissions.

**Actions:**

- `send()`: Send contact message (rate limited: 4 per minute)

### NewsletterController

Newsletter subscription management.

**Actions:**

- `confirm()`: Confirm newsletter subscription (signed URL)
- `unsubscribe()`: Unsubscribe from newsletter (signed URL)

### SettingController

SaaS settings management (admin).

### Webhook Controllers

- `StripeWebhookController`: Handles Stripe webhooks
- `PaddleWebhookController`: Handles Paddle webhooks

## Middleware

### ResolveTenant

Automatically resolves the current tenant based on subdomain.

**Functionality:**

- Extracts subdomain from request host
- Loads tenant data into context
- Returns 404 for invalid subdomains

### EnsureTenant

Ensures a valid tenant context exists for protected routes.

**Functionality:**

- Validates tenant is loaded
- Redirects to central domain if no tenant
- Protects tenant-specific resources

### SaasMode

Controls access based on SaaS operation modes.

**Modes:**

- `private`: Restricts access to authorized users only
- `maintenance`: Displays maintenance page to non-admins

### PageShortCode

Processes shortcodes in dynamic pages.

**Features:**

- Custom content placeholders
- Dynamic content injection

### EnsureCentralDomain

Ensures requests are on the central domain.

**Use Case:**

- Admin area protection
- Central management routes

## Routes

### Webhook Routes

Same routes depending on your selected payment model

```php
// Stripe
POST /saas/gateway/webhook → StripeWebhookController

// Paddle
POST /saas/gateway/webhook → PaddleWebhookController
```

## Services

### TenantManager

Core service for managing tenant context.

**Responsibilities:**

- Load tenant by subdomain
- Store tenant in session/cache
- Clear tenant context

**Key Methods:**

```php
TenantManager::setTenant(SaasTenant $tenant)
TenantManager::getTenant(): ?SaasTenant
TenantManager::forget()
```

## Payment Gateways

**Stripe is the default payment gateway.**

Please comment/uncomment the Billable line to use Stripe (Cashier) or Paddle in `BillableAdapter` trait.

```php
// modules/Saas/Tec/Traits/BillableAdapter.php

/* To use Paddle
 * Uncomment Paddle Billable line below and
 * Comment out the Cashier Billable line
 */

// use Laravel\Paddle\Billable; // Paddle
use Laravel\Cashier\Billable;   // Stripe
```

### Stripe Integration

**Features:**

- Subscription management
- Invoice generation
- Customer portal
- Webhook handling

**Webhook Events:**

- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `customer.updated`
- `customer.deleted`
- `payment_method.automatically_updated`
- `invoice.payment_action_required`
- `invoice.payment_succeeded`

For convenience, Cashier includes a cashier:webhook Artisan command. This command will create a webhook in Stripe that listens to all of the events required by Cashier:

```
php artisan cashier:webhook --url "https://your-central-doamin.com/saas/gateway/webhook"
```

### Paddle Integration

**Features:**

- Subscription management
- Overlay checkout
- Customer management
- Webhook handling

**Webhook Events:**

- `Customer Updated`
- `Transaction Completed`
- `Transaction Updated`
- `Subscription Created`
- `Subscription Updated`
- `Subscription Paused`
- `Subscription Canceled`

Make sure you protect incoming requests by updating the `webhook signature` in admin settings. Please refer to [Paddle's webhook signatures](https://developer.paddle.com/webhooks/signature-verification).

### Webhook URL

SaaS module has configured to use `/saas/gateway/webhook` as webhook url for both Stripe and Paddle, so the full URL will be `https://your-central-doamin.com/saas/gateway/webhook`

## Notifications

### Email Notifications

Located in `Tec/Notifications/`:

- `SubscriptionCreated`: New subscription confirmation
- `SubscriptionUpdated`: Subscription changes
- `SubscriptionCanceled`: Cancellation confirmation
- `SubscriptionResumed`: Reactivation confirmation
- `SubscriptionPlanChanged`: Plan upgrade/downgrade
- `NewsletterConfirmation`: Newsletter opt-in
- `ContactEmail`: Contact form submission

## Resolving Current Tenant

```php
use Modules\Saas\Tec\Services\TenantManager;

$tenantManager = app(TenantManager::class);
$tenant = $tenantManager->getTenant();

if ($tenant) {
    echo "Current tenant: {$tenant->subdomain}";
    echo "Plan: {$tenant->plan->name}";
}
```

## Helper Functions

Located in `Tec/functions.php`, common helper functions include:

```php
// Get current tenant
tenant(): ?SaasTenant

// Set tenant
tenant(SaasTenant $tenant): ?SaasTenant

// Format currency
saas_format_currency($amount)

// Get SaaS setting
saas_settings(string|array $keys)
```

## Security Considerations

1. **Tenant Isolation**: All database queries are automatically scoped to the current tenant
2. **Subdomain Validation**: Subdomains are validated before tenant resolution
3. **Signed URLs**: Newsletter and sensitive actions use signed URLs
4. **Rate Limiting**: Contact forms and sensitive endpoints are rate-limited
5. **Webhook Verification**: All webhook requests are verified using signatures
6. **CSRF Protection**: All forms include CSRF tokens
7. **Authentication**: Jetstream provides 2FA, session management, and API tokens

## Troubleshooting

### Tenant Not Resolving

1. Check subdomain is configured correctly
2. Verify central domains in `.env` or `config/tenant.php`
3. Clear cache: `php artisan optimize:clear`

### Subscription Not Creating

1. Verify Stripe/Paddle credentials in admin settings
2. Check webhook endpoint is reachable
3. Review logs: `storage/logs/

## Limitations and Future Plans

For now it only support single database and loads the tenant data using scope. We plan to add option to use multiple database (separate database per tenant) in future.

## Support & Contributing

For issues and feature requests, please visit [Item Support Page](https://tecdiary.com/support/questions/stock-manager-advance-with-all-modules).

## License

You and purchase from [Item Page](https://tecdiary.com/products/stock-manager-advance-with-all-modules)

---

**Last Updated**: January 2026
**Laravel Version**: 12.x
**Module Version**: 1.x
