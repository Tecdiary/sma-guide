---
title: People
outline: deep
---

# People

People menu is for the customers, suppliers and users along with related features like customer group, price groups and user roles.

## Customers

Customers are the clients of your companies/organizations. They purchase the products that you/your companies/organizations sell. You can add customer groups i.e, Normal Customer, Regular Customer, Resellers, Distributors etc and assign percentage decrement/increment to the price depending on their group.

Only Name (Contact Person) fields is required. You can add extra information about the customer using custom fields.

If the customer is not company, system will use the name as company as by default the search and autocomplete/combobox displays the company as option value.

The inputs for customer in other modules are autocomplete/combobox, you can type in search filed to get the suggestions and select any suggestion available in database for customers. You can add customer by clicking the Add Customer. The interface is quite easy to understand.

![Dashboard](/screenshots/customers.png)

![Dashboard](/screenshots/add-customer.png)

### Customer Groups

The percentage in the customer groups are the addition/subtraction in the product price for that group. If you have set 10 percentage for customer group, then each customer of the group will have (10%) higher price automatically calculated on sales. If you set it to -10 percent, then the products price will be (10%) lower than normal price.

### Price Groups

The price group can be assigned to customer and then all the sales will use that price group for the customer. This feature will help you set the different prices for customers.

Please be informed that the customer group percentage will be applied to the prices from price group too. Means that whatever customer price is the customer group percentage will be applied at the end.

## Suppliers

Suppliers are the vendors/supplying companies, the companies you buy your stock/products from.

Only Name (Contact Person) fields is required. You can add extra information about the supplier using custom fields. If the supplier is not company, you can leave the company field blank/empty OR so that system can use the name as company.

The inputs for supplier in other modules are autocomplete/combobox, you can type in search filed to get the suggestions and select any suggestion available in database for suppliers. You can add supplier by clicking the Add supplier. The interface is quite easy to understand. The interface is almost same as customers, easy to use.

## Users & Roles

Users are the staff members (your employees). You can add any number of users and assign
them roles as you need.

Super Admin, Customer and Supplier roles are with fixed permissions. You can add roles and set permissions as need.

The users added in customer/supplier modules will be saved in this table too.

![Dashboard](/screenshots/add-user.png)
