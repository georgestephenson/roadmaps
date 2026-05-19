# Basic Tags

## Doctype

Required preamble at the top of all HTML documents

``` HTML
<!doctype html>
```

Originally to prevent browsers using "quirks mode" where they'd follow different document specs. Doctype standardises the specification that should be followed.

## `<html>` tag

`<html></html>` is the root element of the page, containing all other elements (except for `<!doctype html>`)

The `lang` attribute is important for screen readers and accessibility, e.g. `<html lang="en">`

## `<head>` tag

Contains metadata elements, like `<meta>`, `<link>`, `<script>` and `<title>`. Primarily for machine processing not human readability.

## `<meta>` tag

Metadata elements that don't fit in the more specific metadata tags like `<link>`, `<script>` and `<title>`.

- `<meta charset="utf-8" />` specifies the document's charset. Only UTF-8 is valid for HTML 5 documents.
- `name` and `content` attributes allow for name-value pairs applied at a document-level.
- `http-equiv` and `content` - can set a HTTP header and its value, this acts as a "pragma directive"
- `itemprop` for user-defined metadata.

## `<body>` tag

Main HTML element for the content of the document.

Has many event listener attributes that can be added.