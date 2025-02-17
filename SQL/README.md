# SQL

# What is a Database?
A databse is a collection of data stored in a format that can easily be accessed.
In order to access a database a DBMS is ued, A Database Management System. Which is used for querying or modifying data, the DBMS will execute the instructions and results are returned.

# Relational Databases
Data stored in tables that are linked to each other using relational tables.<br>
Each table stroes data on a specific type or object, such as Customer, Product, Order.<br>
SQL (Structured Query Language)
Is used to work with relational database management systems. Which is used to query or modify data.
```sql
SELECT *
FROM products
WHERE category = 'food'
ORDER BY price
```

Non-Relational Databases (NoSQL)
No tables or relationships, NoSQL do not understand SQL and use their own query language.

# SQL (MySQL)
Syntax matters in SQL, the order is important:
```sql
SELECT, FROM, WHERE, ORDER BY, LIMIT

SELECT *
FROM customers 
WHERE customer_id = 1
ORDER BY first_name;
```
# SELECT 
```sql
SELECT 
	last_name, 
    first_name, 
    points, 
    (points + 10) * 100 AS "discount factor"
FROM customers;

SELECT DISTINCT state 
FROM customers;

SELECT
	name,
    unit_price,
    unit_price * 1.1 AS "new price"
FROM products;
```
- Can use ```*``` to obtain all columns in a table using ```SELECT```, or you can specifiy the columns with the identifiers.
- Can use Arithmetic using the data.
- Can change the column identifier using the "```AS```" keyword.

# WHERE
```sql
SELECT *
FROM customers
WHERE points > 3000;

SELECT *
FROM customers
WHERE state != "VA";

SELECT *
FROM customers
WHERE birth_date > "1990-01-01";
```
- Can use comparison operators within WHERE clause, to obtain records which satisfies condition.

## AND, OR, NOT Operators
```sql

SELECT *
FROM customers
WHERE 
	birth_date > "1990-01-01" OR
    (points > 1000 AND state = "VA")
;

-- THE QUERIES BELOW ARE THE SAME.
SELECT *
FROM customers
WHERE NOT (birth_date > "1990-01-01" OR points > 1000);

SELECT *
FROM customers
WHERE birth_date <= "1990-01-01" AND points <= 1000;
```
- AND, merges two conditions to return a result.
- OR, gets results from one or the other condition.
- NOT, gets the oppoisite of the condition given.

## IN Operator
```sql
SELECT *
FROM customers
WHERE state = "VA" OR state = "GA" OR state = "FL";

-- This uses the IN operator which shorten a list of conditions.
SELECT *
FROM customers
WHERE state IN ("VA", "FL", "GA");

-- Using the NOT operator in conjunction with IN.
SELECT *
FROM customers
WHERE state NOT IN ("VA", "FL", "GA");
```
- IN operator is used when using a list of values.

## BETWEEN Operator
```sql
SELECT *
FROM customers
WHERE points >=1000 AND points <= 3000;

SELECT *
FROM customers
WHERE points BETWEEN 1000 AND 3000;
```
- BETWEEN operator is equivalant to using a range between two values.

## LIKE Operator (OLD)
```sql
SELECT *
FROM customers
WHERE last_name LIKE "%y";

SELECT *
FROM customers
WHERE last_name LIKE "_____y";

-- % any number of characters
-- _ single character
```
- LIKE operator is used to obtain specfic string conditions.

## REGEX Operator
```sql
SELECT *
FROM customers
WHERE last_name LIKE "%field%";

SELECT *
FROM customers
WHERE last_name REGEXP "field$|mac|rose";
-- ^ beginning of a string
-- $ end of a string
-- | logical OR
-- [abcd]  
-- [a-h]

SELECT *
FROM customers
WHERE last_name REGEXP "[gim]e";
-- any customer which can have (ge,ie,me)

SELECT *
FROM customers
WHERE last_name REGEXP "[a-h]e";
-- a range of characters use -, instead of abcdefgh
```
Using REGEX within SQL to statisfy conditions to obtain strings.

## IS NULL Operator
```sql
SELECT *
FROM customers
WHERE phone IS NOT NULL;

SELECT *
FROM orders
WHERE shipped_date IS NULL;
```
IS NULL, obtains records which have a NULL value within them. IS NOT NULL is the opposite.

# ORDER BY
```sql
SELECT *
FROM customers
ORDER BY first_name;

SELECT *
FROM customers
ORDER BY state DESC, first_name;

SELECT first_name, last_name, 10 AS points
FROM customers
ORDER BY 1, 2;

SELECT *
FROM order_items
WHERE order_id = 2
ORDER BY (quantity * unit_price) DESC;
```
ORDER BY, sorts/filters the records on the specficic condition or column given, this can be in ascending order or descending order by using ASC or DESC.

# LIMIT
```sql
SELECT * 
FROM customers
LIMIT 300;

SELECT * 
FROM customers
LIMIT 6, 3;

SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3;
```
LIMIT clause always comes at the end. This clause obtains a specific number of records in the table. If the number exceeds the total number of records then the whole table is shown.

# INNER JOINS
```sql
SELECT order_id, o.customer_id, first_name, last_name
FROM orders o 
JOIN customers c
	ON o.customer_id = c.customer_id;
    
SELECT order_id, oi.product_id, quantity, oi.unit_price
FROM products p 
JOIN order_items oi
	ON oi.product_id = p.product_id
```
JOIN, this merges two tables togetherin in sql, and alyias can be used to make code shorter.
ON, is used for conditioning using the primary keys.

## JOINING ACROSS DATABASES
```sql
USE sql_store;

SELECT *
FROM order_items oi
JOIN sql_inventory.products p
	ON oi.product_id = p.product_id;
```
prefixing the databses which are not currently being used allows to fetch the records from that databse such as sql_inventory.products.

## SELF JOINS
```sql
USE sql_hr;

SELECT 
	e.employee_id, e.first_name,
	m.first_name AS manager
FROM employees e
JOIN employees m
	ON e.reports_to = m.employee_id
```
Joining a table with itself is the same as joining with another table, however an alias needs to be used for the two tables. This is called a SELF JOIN.

## Joining Multiple Tables
```sql
USE sql_store;

SELECT 
	o.order_id,
	o.order_date,
	c.first_name, 
	c.last_name,
	os.name
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
JOIN order_statuses os
	ON o.status = os.order_status_id
;
```
Joining multiple tables together using appropriate keys.<br>
This is done using multiple JOINS, to make it easier alias' are used throughout.

## Compound Join Conditions
```sql
SELECT *
FROM order_items oi
JOIN order_item_notes oin
	ON oi.order_id = oin.order_id
    AND oi.product_id = oin.product_id;
;
```
Compound join condition, when you need multiple conditions to join tables.<br>
Such as this when there are multiple primary keys within a table therefore more conditions are needed.

## Implicit Join Syntax
```sql
SELECT *
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id;
;

-- Implicit Join Syntax
SELECT *
FROM orders o, customers c
WHERE o.customer_id = c.customer_id;
```
The implicity syntax shortens the code however it is safer and more appropriate to use explicit syntax which is using the ```JOIN``` and ```ON``` operators.

# OUTER JOINS
```sql
USE sql_store;

SELECT 
	c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id
;

-- When using a LEFT Join all queries on the LEFT table,
-- are shown whether the query is true or not.
SELECT 
	c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
LEFT JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id
;

SELECT 
	c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
RIGHT JOIN orders o
	ON c.customer_id = o.customer_id
ORDER BY c.customer_id
;

SELECT 
	p.product_id,
    p.name,
    oi.quantity
FROM products p
LEFT JOIN order_items oi
	ON p.product_id = oi.product_id;
```
OUTER JOINS, are useful when joining two talbes together this allows to see data whether the data satisfies the condition or not.<br>
This allows data which have null values to be present in the query.

## Multiple OUTER JOINS
```sql
SELECT 
	c.customer_id,
    c.first_name,
    o.order_id,
    sh.name AS shipper
FROM customers c
LEFT JOIN orders o
	ON c.customer_id = o.customer_id
LEFT JOIN shippers sh
	ON o.shipper_id = sh.shipper_id
ORDER BY c.customer_id
;

-- Self Join Table using LEFT OUTER JOIN
SELECT 
	e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
LEFT JOIN employees m
	ON e.reports_to = m.employee_id;
```
Best practice to use only LEFT JOINS instead of RIGHT JOINS, as code becomes hard to read and understand.

## USING
```sql
SELECT 
	o.order_id,
    c.first_name,
    sh.name AS shipper
FROM orders o
JOIN customers c
	-- ON o.customer_id = c.customer_id;
    USING (customer_id)
LEFT JOIN shippers sh
	USING (shipper_id)
;

SELECT *
FROM order_items oi
JOIN order_item_notes oin
	-- ON oi.order_id = oin.order_id AND oi.product_id = oin.product_id;
    USING (order_id, product_id)

SELECT
	p.date,
    c.name,
    p.amount,
    pm.name
FROM payments p
JOIN clients c
    -- Column names are same
	USING(client_id)
JOIN payment_methods pm
    -- Column names are different
	ON p.payment_method = pm.payment_method_id
;
```
USING keyword is used to shorten the code for Joining multiple tables with the same key, such as ```o.customer_id = c.customer_id```, this does not work if the two tables being joined have different key names.<br>
Instead of using ```AND``` operator to add multiple keys for Joining, the USING operator just needs to key name.

## CROSS JOINS
```sql
SELECT 
	c.first_name AS customer,
    p.name AS product
-- FROM customers c, products p
FROM customers c
CROSS JOIN products p
ORDER BY c.first_name;
```
CROSS JOIN, join two tables together. Best use case would be a table of sizes(S,M,L) and a table of colours(RED, GREEN, BLUE). 

# UNIONS
Used to combine records from multiple queries from the same tables or different tables.<br>
The number of colums should be the same otherwise there will be an error, from those that are in the ```SELECT```.
```sql
SELECT 
	order_id,
    order_date,
    "Active" AS status
FROM orders
WHERE order_date >= "2019-01-01"
UNION
SELECT 
	order_id,
    order_date,
    "Archived" AS status
FROM orders
WHERE order_date < "2019-01-01";
```
```sql
SELECT
	customer_id,
    first_name,
    points,
    "Bronze" AS type
FROM customers
WHERE points < 2000
UNION
SELECT
	customer_id,
    first_name,
    points,
    "Silver" AS type
FROM customers c
WHERE points BETWEEN 2000 AND 3000
UNION
SELECT
	customer_id,
    first_name,
    points,
    "Gold" AS type
FROM customers c
WHERE points > 3000
order by first_name
```
Use case for using UNIONS and creating new columns.

# Inserting a ROW into a TABLE
```sql
INSERT INTO customers (
	last_name,
	first_name,
    birth_date,
    address,
    city,
    state)
VALUES (
	"Smith", 
	"Jhon", 
    "1990-01-01",
    "address",
    "city",
    "CA")

DEFAULT
```
This is a way of inserting a row/record into a table.<br>
The default operator auto inputs values based on the datatype.

## Inserting Multiple ROWS
```sql
INSERT INTO shippers (name)
VALUES ("Shipper1"),("Shipper2"),("Shipper3")
```
The brackets seperated by a comma in the VALUES section is how to insert multiple rows within a table.

## Insert ROWS into Multiple TABLES
```sql
INSERT INTO orders(customer_id, order_date, status)
VALUES (1, "2019-01-01", 1);

INSERT INTO order_items
VALUES 
	(LAST_INSERT_ID(), 1, 1, 2.95),
    (LAST_INSERT_ID(), 2, 1, 3.95)
```
Also known as heirachacle insert in SQL, these two tables have a parent-child relationship, therefore sharing columns within each table.<br>
When adding data to one table the other is affected.<br>
The function ```LAST_INSERT_ID()``` is a built in function for MySQL which gets the last known ID in the table.

# Creating a COPY of a TABLE
```sql
CREATE TABLE orders_archived AS
SELECT * FROM orders

INSERT INTO orders_archived
SELECT * 
FROM orders
WHERE order_date < "2019-01-01"
```
The ```CREATE TABLE``` is the main operator which creates a new table.<br>
The sub-query is the ```SELECT, FROM, WHERE``` clauses which obtains the records from another table for the newly created table.
```sql
USE sql_invoicing;
CREATE TABLE invoices_archived AS
SELECT 
	i.invoice_id,
    i.number,
    c.name AS client_name,
    i.invoice_total,
    i.payment_total,
    i.invoice_date,
    i.due_date,
    i.payment_date
FROM invoices i
JOIN clients c
	ON i.client_id = c.client_id
WHERE payment_date IS NOT NULL
```
Example exercise using COPY, JOINS, IS NOT, Selection.

# UPDATING a single row
```sql
UPDATE invoices

SET payment_total = DEFAULT, payment_date = NULL
WHERE invoice_id = 1;

SET 
	payment_total = invoice_total *0.5, 
    payment_date = due_date
WHERE invoice_id = 3
```
SET, clause allows to update a specfic column within a table in SQL.<br>
WHERE, caluse with the SET clause allows to choose the specific ROW that will be affected.

## UPDATING Multiple ROWS
```sql
UPDATE invoices

SET 
	payment_total = invoice_total * 0.5, 
    payment_date = due_date
WHERE client_id = 3
```
This updates all the client_id's which equal to 3 and updates the corresponding columns for those records.

## Using sub-queries in UPDATES
```sql
UPDATE invoices
SET 
	payment_total = invoice_total * 0.5, 
    payment_date = due_date
WHERE client_id IN
	(SELECT client_id
	FROM clients
	WHERE state IN ("CA", "NY"))
```
Can use SELECT query within UPDATING using ().

# DELETING ROWS
```sql
DELETE FROM invoices
WHERE client_id = (
	SELECT *
	FROM clients
	WHERE name = "Myworks"
)
```
```DELETE FROM``` operation removes all rows within the specified table using queries.<br>
Withouth a sub-query all rows will be deleted.