# List Types

## Ordered Lists

The `<ol>` tag creates an ordered list, with `<li>` list items

### `<ol>` attributes

- `type` attribute allows ordered number, letters, or roman numerals
- `start` attribute defines what number the list starts from
- `reversed` attribute list items in reverse order

### `<li>` attributes

- The `value` attribute is like `start` in that it sets the value of the list item
- `type` is an override of the parent `<ol>` for the list item

## Unordered Lists

The `<ul>` tag is for unordered lists. The `type` attribute can be `circle`, `disc`, or `square` - `triangle` is supported by some browsers.

`<ul>` and `<ol>` lists can be nested in each other

## `<dl>` description list, `<dt>` description term, `<dd>` description details

A description list encloses a list of groups of terms `<dt>` and descriptions `<dd>`.

Can be used to implement a glossary, or a list of key-value pairs.

Can have many description terms in sequence, or many description details in sequence.