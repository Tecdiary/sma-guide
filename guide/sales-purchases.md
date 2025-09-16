---
title: Sales & Purchases
outline: deep
---

# Sales & Purchases

Sales (Invoices) to manage the sales and payments received. Add sale will automatically decrease the product quantity from the store. If your product has variants that will be synchronized.

Purchases (Inventories/Purchase Orders) to manage the incoming stock. Add purchase will automatically increase the product quantity in the store. If your product has variants that will be synchronized.

## List Sales (listing page)

List sales table is sortable by column headings (default sorting is latest records first). Each row has actions column to email, add delivery, edit and delete record. To view packaging list, please click the row to view and packaging (archive icon). The table row will have green background if paid, yellow if due and theme color for non-paid and non-due (pending) sales.

::: info Add payment
The total column for pending and due sale is action button to add payment.
:::

![Dashboard](/screenshots/sales.png)

## Sale Form (add/edit)

Sale form has Date, Reference (leave blank to auto generate), Customer (searchable by company, name, email and phone), Due Date, Attachments, Products (search or scab barcode) and details fields.

Once product is added by search/scan barcode, you can click the product name to change price, unit, apply discount, taxes and add comments.

![Dashboard](/screenshots/add-sale.png)

## List Purchases (listing page)

List purchases table is sortable by column headings (default sorting is latest records first). Each row has actions column to email, edit and delete record. The table row will have yellow background for unpaid and green background for paid.

::: info Add payment
The total column for unpaid purchase orders is action button to add payment.
:::

![Dashboard](/screenshots/purchases.png)

## Payments

List payments table is sortable by column headings (default sorting is latest records first). Each row has actions column to email, edit and delete record. To view packaging list, please click the row to view and packaging (archive icon). The table row will have green background for received and primary color background for sent. The default theme color for non-received payments.

::: info For column
For column is Customer company for incoming and Supplier company for outgoing payments.
:::

![Dashboard](/screenshots/payments.png)

## Deliveries

List deliveries table is sortable by column headings (default sorting is latest records first). Each row has actions column to edit and delete record.

**_Delivery can be added for any sale from the list sales page._**

## Quotations

_Quotations are same as sales but quotations won't have any effect on stock._ List quotation table is sortable by column headings (default sorting is latest records first). Each row has actions column to email, add delivery, edit and delete record.

## Expenses

Stock Manager Advance has option to record business expenses. List Expenses table is sortable by column headings (default sorting is latest records first). Supplier field is optional. Each row has actions column to edit and delete record.

## Gift Cards

Gift cards are used for payment. Customer can purchase them and make payment for orders. List Expenses table is sortable by column headings (default sorting is latest records first). Supplier field is optional. Each row has actions column to edit and delete record.

## Return Orders

Return orders can be added for sales and purchases. The products stock will be synced automatically. For return order for sale, you can set the sale number or reference to link to the main sale.
