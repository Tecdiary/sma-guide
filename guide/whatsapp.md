# WhatsApp Notifications — Setup Guide

The application can send transactional notifications (sales, purchases, payments, quotations,
transfers, returns, reservation status) over WhatsApp, in addition to email, Telegram, and SMS.
This uses **Meta's WhatsApp Cloud API directly** — there is no third-party middleman (like
Twilio) taking a cut per message.

Getting this working has two parts:

1. **Meta-side setup** — done once, entirely outside this codebase, in Meta's own dashboards.
2. **App configuration** — a toggle and two credential fields on the app's own Settings page,
   plus creating the message templates Meta requires.

Nothing in the app can complete step 1 for you — it has to be done by whoever has admin access to
the business's Meta/Facebook account. Step 2 is a normal admin task inside the app.

---

## Before you start

You'll need:

- A Facebook account with admin access to (or the ability to create) a **Meta Business
  Account** for the business.
- A phone number that is **not already registered** with the regular WhatsApp or WhatsApp
  Business consumer app (Meta will let you migrate an existing number later, but starting with a
  fresh number is simplest).
- About 20–30 minutes for the initial setup. Template approval can take anywhere from a few
  minutes to about a day.

---

## Step 1 — Create a Meta App with the WhatsApp product

1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps) and log in.
2. Click **Create App**.
3. Choose the **Business** app type.
4. Give it a name (e.g. "Acme Store Notifications") and attach it to your Meta Business Account
   (create one if you don't have one yet — Meta will prompt you).
5. Once the app is created, on the app dashboard find **WhatsApp** in the product list and click
   **Set up**.

This automatically creates a **WhatsApp Business Account (WABA)** and a free **test phone
number** you can use immediately for the next steps before adding your real business number.

## Step 2 — Add and verify your business phone number

1. Inside the app, go to **WhatsApp → API Setup**.
2. Under **From**, click **Add phone number**.
3. Enter the business's display name, category, and the phone number to use for sending
   notifications.
4. Verify the number via the SMS/voice code Meta sends.

Once verified, this becomes your sending number. Note down its **Phone Number ID** — it's shown
right on this page (a long numeric ID, not the phone number itself).

## Step 3 — Create a System User and a permanent access token

The token you see by default on the API Setup page is temporary (24 hours) — fine for testing,
not for production. Create a permanent one instead:

1. Go to [business.facebook.com](https://business.facebook.com) → **Settings → Users → System
   Users**.
2. Click **Add**, give it a name (e.g. "WhatsApp Notifications"), and set the role to **Admin**.
3. Click **Assign Assets**, select your app, and toggle **Manage app** under Full control.
   Also select your WhatsApp Business Account and toggle **Manage WhatsApp Business Account**
   under Full control.
4. Back on the System User's page, click **Generate New Token**.
5. Select your app, set the token to **Never expire**, and grant these permissions:
   - `whatsapp_business_messaging`
   - `whatsapp_business_management`
6. Click **Generate Token** and **copy it immediately** — Meta will not show it to you again.

## Step 4 — Collect your credentials

You now have everything the app needs:

| Value                            | Where to find it                                                         |
| -------------------------------- | ------------------------------------------------------------------------ |
| **Access token**                 | Generated in Step 3                                                      |
| **Phone Number ID**              | WhatsApp → API Setup page, under your sending number (Step 2)            |
| **WhatsApp Business Account ID** | Same API Setup page, or Business Settings → Accounts → WhatsApp Accounts |

---

## Step 5 — Configure the app

This is done from inside the app itself — no developer or server access needed:

1. Log in as a Super Admin and go to **Settings → General**.
2. Scroll to **Notification Settings → WhatsApp**.
3. Turn on **Enable WhatsApp notifications**.
4. Paste the **Access Token** (Step 3) and **Phone Number ID** (Step 2) into the fields that
   appear.
5. Click **Save**.

That's it — the moment it's saved, every notification listed below starts including WhatsApp as a
delivery channel for any recipient that has a phone number on file. The token is encrypted before
it's stored, and it's never sent back to the browser after saving — the field just shows blank
again, which is expected; you only need to re-enter it if you're changing it.

> If **Enable WhatsApp notifications** is off, nothing changes — customers, suppliers, stores,
> and reservations keep receiving email/Telegram/SMS exactly as before. WhatsApp is purely
> additive, and the toggle is the single source of truth for whether it's active.

<details>
<summary>Advanced: configuring via <code>.env</code> instead</summary>

For automated deployments that can't click through the Settings page, the same three values can
be set as environment variables and are used as the defaults until an admin configures the
Settings page (which then takes over):

```
WHATSAPP_ENABLED=true
WHATSAPP_TOKEN=<the permanent access token from Step 3>
WHATSAPP_FROM_PHONE_NUMBER_ID=<the Phone Number ID from Step 2>
```

</details>

---

## Step 6 — Create the message templates

This is the part most people miss: **WhatsApp will not deliver a business-initiated message
unless it uses a pre-approved template.** Free-form text only works as a reply within 24 hours of
the customer messaging you first, which doesn't apply to system notifications like these.

For each notification type you want to send over WhatsApp, create a template in
**[WhatsApp Manager → Message Templates](https://business.facebook.com/wa/manage/message-templates/)**
with:

- **Category:** Utility
- **Language:** English (US) — `en_US`
- The **exact name** and **body text** below (the <code v-pre>{{1}}</code>, <code v-pre>{{2}}</code> etc. are Meta's placeholder
  syntax — type them literally, Meta turns them into fill-in-the-blank variables)

> **Don't shorten these bodies.** Meta rejects a template if a variable sits at the very start or
> end of the message, if two variables are back-to-back, or if there isn't enough surrounding
> static text for the number of variables used (roughly: static words ≥ 3 × variable count, minus
> the variables themselves). A body as short as <code v-pre>Hello {{1}}! {{2}}</code> fails with _"This template
> has too many variables for its length... Variables can't be at the start or end of the
> template"_ — every body below already has enough wrapping text to pass.

| Template name               | Sent when…                                         | Body text                                                                                                               |
| --------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `sale_notification`         | A sale is created                                  | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `purchase_notification`     | A purchase order is created                        | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `payment_notification`      | A payment is recorded                              | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `payment_receipt_status`    | A customer's uploaded receipt is approved/rejected | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `payment_receipt_upload`    | A customer uploads a payment receipt               | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `quotation_notification`    | A quotation is created                             | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `quotation_signed`          | A customer signs/approves a quotation              | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `return_order_notification` | A return order is created                          | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `transfer_notification`     | A stock transfer is created                        | <code v-pre>Hello {{1}}! Here's an update: {{2}} Thank you for your business!</code>                                    |
| `reservation_status`        | A table reservation is confirmed/cancelled         | <code v-pre>Hello! Here's an update on your reservation: {{1}} Reference: {{2}}. Scheduled for {{3}}. Thank you!</code> |

The number and order of variables must match this table exactly (2 for every notification except
`reservation_status`, which uses 3) — the app fills them in in order, but the static wording
around them is entirely defined by the template you register here, so feel free to adjust tone or
phrasing as long as you keep the same variable count/order and don't reintroduce a variable at the
start, end, or back-to-back with another.

For every <code v-pre>{{1}}</code>/<code v-pre>{{2}}</code> placeholder Meta will ask for a **sample value** before it will submit
the template for review — any realistic example works, e.g. for `sale_notification`:
<code v-pre>{{1}} = Jane Doe</code>, <code v-pre>{{2}} = Your sale from Acme Store is ready. View it here: https://example.com/sales/123</code>.

After submitting, Meta reviews each template automatically — usually within minutes, occasionally
up to 24 hours. You'll see the status change from **Pending** to **Approved** (or **Rejected**,
with a reason, if the content looks too promotional or doesn't match the category).

> You only need to create templates for the notification types you actually care about over
> WhatsApp. Skipping one just means that particular notification quietly falls back to
> email/Telegram/SMS only — nothing breaks.

### Add a "Website" button to each template

Every notification also sends a real, tappable **button** instead of burying a link inside the
message text. In the template editor, after filling in the body:

1. Scroll to **Buttons** and click **Add a button**.
2. Choose button type **Visit website**.
3. Set the URL type to **Dynamic**.
4. In the URL field, enter **your own store's domain** followed by <code v-pre>/{{1}}</code> — for example, if the
   store runs at `https://yourappurl.com`, enter [<code v-pre>https://yourappurl.com/{{1}}</code>](#). This must be your
   actual domain (the same one your `APP_URL` environment variable points to), not the example
   above.
5. Set the button text from the table below (Meta limits this to 25 characters).

| Template name               | Button text       |
| --------------------------- | ----------------- |
| `sale_notification`         | View Sale         |
| `purchase_notification`     | View Purchase     |
| `payment_notification`      | View Payment      |
| `payment_receipt_status`    | View Payment      |
| `payment_receipt_upload`    | Review Payment    |
| `quotation_notification`    | View Quotation    |
| `quotation_signed`          | View Quotation    |
| `return_order_notification` | View Return Order |
| `transfer_notification`     | View Transfer     |
| `reservation_status`        | View Reservation  |

Meta will ask for a sample value for the button's <code v-pre>{{1}}</code> too — anything realistic works, e.g.
`sale/123?signature=abc123&expires=1700000000`. At send time the app fills this in automatically
with the real record's relative link (path and query string), so there's nothing to configure on
the app side beyond Step 5 — one button per template, no code changes needed.

---

## Step 7 — Test it

1. Make sure at least one customer, supplier, or reservation in the app has a real, reachable
   phone number in international format (e.g. `+15551234567`) — the app formats it to WhatsApp's
   required E.164 format automatically, but it needs a real starting number.
2. **Add that phone number as an allowed test recipient**: while your WABA is not yet fully
   verified for production, Meta restricts you to sending to numbers added under **WhatsApp →
   API Setup → To → Manage phone number list**.
3. Trigger a real notification through the app's normal flow — e.g. record a sale, create a
   quotation, or confirm a reservation for that customer.
4. Check the recipient's WhatsApp for the message, including the button. If it doesn't arrive,
   see Troubleshooting below.

---

## Troubleshooting

| Symptom                                                                             | Likely cause                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message never arrives, no error visible in the app                                  | Check Laravel's logs (`storage/logs/laravel.log`) — the notification system swallows delivery failures rather than breaking the request (same behavior as email/SMS/Telegram). Look for a `CouldNotSendNotification` entry with the raw Meta API error.           |
| Error mentions the template name / "template not found"                             | The template name in Meta doesn't exactly match one of the names in the table above, or it's still **Pending** approval — approved templates only.                                                                                                                |
| Error mentions the recipient phone number                                           | The number isn't in the WABA's allowed test-recipient list yet (Step 7.2), or isn't a valid WhatsApp number, or isn't in E.164 format on the customer/store/supplier record.                                                                                      |
| Template was **Rejected**                                                           | Meta's review flagged the wording as too promotional for the "Utility" category. Rephrase to sound like a status update about an existing transaction, not a sales pitch, and resubmit.                                                                           |
| **"This template has too many variables for its length"** while creating a template | The body doesn't have enough static text around its variables, or a variable sits at the start/end or two are back-to-back. Use the exact body text from Step 6's table — don't trim the wrapping words around <code v-pre>{{1}}</code>/<code v-pre>{{2}}</code>. |
| The button doesn't work, or Meta rejects the button URL                             | The dynamic URL must start with your store's actual domain (the same one `APP_URL` is set to) followed by `/{{1}}` — a mismatched or placeholder domain (like `yourappurl.com` from this guide) will send people to the wrong site or fail Meta's URL validation. |
| Everything is configured but nothing sends at all                                   | Confirm **Enable WhatsApp notifications** is actually turned on and saved on the Settings page (Step 5), and that the access token hasn't been set to expire (Step 3.5).                                                                                          |

---

## Going live (moving off the sandbox)

While your WABA is unverified, you can only message the test numbers you explicitly added. To
message any customer:

1. Complete **Meta Business Verification** (Business Settings → Security Center) — this requires
   real business documents and can take a few days.
2. Once verified, the "allowed test recipients" restriction is lifted and you can message any
   opted-in WhatsApp user.

No app configuration changes are needed for this — it's entirely a Meta-side status change.
