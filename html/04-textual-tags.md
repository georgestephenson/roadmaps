# Textual Tags

## `<h1>` to `<h6>`

Section heading tags in order of precedence.

- Best practice to have at most one `<h1>` tag per page.
- For accessibility, don't skip levels, each level should increment, e.g. h1, then h2, then h3.

## `<title>` tag

- Placed in `<head>` block
- Only text content
- Content has major SEO implications
- Try to make each page title unique within the site. Can also update with page state information.

## `<p>` tag

Represents a paragraph

- block-level elements
- breaking content into paragraphs help accessibility
- but avoid using empty `<p>` tags
- Separated by a single blank line by default, can be changed with CSS

## `<hr>` thematic break (horizontal rule)

Represents a thematic break between paragraphs - historically a horizontal rule, but HTML is about semantics and can be styled in different ways, the modern name is thematic break.

## `<br>` line break

- Produces a line break (carriage return)
- Not typically styled. Has a simple function
- Shouldn't be used to produce paragraphs (use `<p>`)

## `<b>` element

Use to be used for bold text, but now is used for semantics, to draw reader's attention to contents. Visually distinguished, not necessarily more important. The CSS `font-weight` attribute should be used to make boldface text. 

## `<strong>` strong importance

`<strong>` should be used for elements with special importance, seriousness or urgency.

## `<i>` idiomatic text

Originally italicised text, now since HTML 5 used only for semantics where italics are often incidentally used, to mean idiomatic, technical terms, taxonomical designations, and other uses.

## `<em>` emphasis

Used to stress emphasis. Can be nested in itself, with each level indicating higher emphasis.

## `<pre>` preformatted text

Text presented exactly as written in the HTML file, particularly including whitespace, typically rendered monospace.

Commonly might contain `<code>` elements for displaying code, or `<samp>` for computer output, or `<kbd>` for user input.

## `<mark>` mark or highlight

Text which is marked or highlighted for ease of reference or notation purposes

- Could often be used inside `<q>` or `<blockquote>`

## `<sub>`

Text subscript, e.g. CO<sub>2</sub>

Used for typographical reasons, e.g. footnotes, mathematical variables, chemical formulas.

## `<sup>`

Superscript used for typographical reasons, e.g. x<sup>2</sup>.

## `<a>` anchor element

The anchor element most famously has the `href` attribute, for creating a web hyperlink, or any other type of URL.

- `download` attribute will treat the linked file as a download
- has several other attributes possible
- can be relative links e.g. `href="../p"`
- can link to an HTML ID on the same page e.g. `href="#Section_further_down"`