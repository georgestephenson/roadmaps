# Table Tag

Represents data in a two-dimensional table of rows and columns

`<table>` contains
- `<caption>` description of table
- `<colgroup>` and `<col>` define the column groupings
- `<thead>` header columns in one or more table rows
- `<tbody>` body containing the table data
- `<tfoot>` for one or more footer rows
- `thead`, `tbody` and `tfoot` contain tables rows `<tr>`
- `<tr>` table rows contain `<th>` header cells or `<td>` data cells. The structure of where header cells and data cells can go in the table is not that enforced.

Tables can have complex shapes using `colspan` and `rowspan` attributes to control how many colums or rows a cell comprises of

Mozille MSN has a large article of examples and best practices [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table)