# SQL - Learn the Basics

I found that the first chapters of Designing Data Intensive Applications is a better introduction to relational databases and comparison with other databases, than the articles recommended by roadmap.sh

That book also has interesting insights in the use of the ACID acronym (Atomicity, Consistency, Isolation, Durability)

Also that book lays out that the tradition disadvantages of relational SQL databases having a rigid schema has largely been solved by modern Postgres with JSON data types etc.

## Basic Syntax

Already familiar with basic syntax.

- `BETWEEN` - can use for `WHERE` clause for values between specified min and max - the range is invluce

``` SQL
birth_date BETWEEN ‘2003-01-01’ AND ‘2003-12-31’
```

### `TOP` vs `LIMIT`

Basically, SQL Servers uses `TOP` and MySQL and PostgreSQL use `LIMIT`.

``` SQL
SELECT TOP 2 * FROM Persons;
```

``` SQL
SELECT * FROM Persons limit 2;
```

### `WHERE` vs `HAVING`

- `WHERE` filters before `GROUP BY` is applied.
- `HAVING` filter after.
- The consequence is that `HAVING` can reference aggregations such as `COUNT(*) > 0`

### Data types

- TINYINT - 1 byte int
- SMALLINT - 2 byte int
- INT - 4 byte int
- BIGINT - 8 byte int
- DECIMAL(p,s) - exact value decimal number, required for finance/money. p is total digits, s is digits after decimal
- NUMERIC(p,s) - same as DECIMAL(p,s)
- FLOAT(n) - An approximate-value, floating-point number.
- REAL - less precise/smaller version of FLOAT
- DATE
- TIME
- DATETIME
- TIMESTAMP - number of seconds since Unix epoch (1970-01-01 00:00:00)

- BINARY(n) - data that is always the same size
- VARBINARY(n) - small variable-sized data
- BLOB - large files up to 4GB

#### VARCHAR vs NVARCHAR

Essentially NVARCHAR can store any Unicode characters. VARCHAR is restricted to an 8-bit codepage. Using NVARCHAR is simpler unless there are specified reasons for VARCHAR.

### Set operators

Set operators can combine results of multiple queries.

- UNION - duplicate rows are automatically removed unless UNION ALL is used
- INTERSECT
- EXCEPT