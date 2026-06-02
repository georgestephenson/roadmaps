# Semantic Markup

Semantic markup is tags that convey meaning rather than cosmetic appearance.

## `<del>` deleted text element

Indicates text that has been deleted, often rendered using a strike-through over the text.

``` HTML
<p>The quick brown <del>cat</del> fox jumps over the lazy <del>pigeon</del> dog</p>
```

an have attributes `cite` and `datetime` like `ins`. See `ins` for why this is useful.

## `<s>` strikethrough element

Originally for rendering text with a strike-through, so similar to `del`, but semantically this means the text is no longer relevant or accurate.

## `<ins>` inserted text element

Complements `del` in that this represent text inserted into a document. For example looks at a `git diff` you would see text deleted and inserted line-by-line, this would be the correct HTML tags to represent that semantically.

Can have attributes `cite` and `datetime` which also demonstrate that it is useful for change management applications, like git repositories.

## `<abbr>` abbreviation element

Tag an abbreviated work along with the explanation outside of the tag

``` HTML
<p>
    <abbr>HTML</abbr> (HyperText Markup Language)
</p>
```

Optional attribute `title` gives the description or expansion, often presented as a tooltip. Only provide if not provided in the text itself.

``` HTML
<p>
    <abbr title="HyperText Markup Language">HTML</abbr>
</p>
```

- Can be useful providing explanations of abbreviations outside the flow of document content

## `<cite>` citation element

Mark the title (name) of a creative work

``` HTML
<cite>The Lord of the Rings</cite>
```

By default often rendered in italics by browsers

## `<dfn>` definition element

Indicates a term to be defined

If the `<dfn>` element has an `id` attribute, it can be linked to with an `<a>` element

- Can be contained in a paragraph `<p>` defining the term
- Or full definition can be in a `<dt>`/`<dd>` pairing
- Or in the nearest section type element (`<aside>`, `<content>`, etc)

## `<address>` contact address element

Address / contact information for a person, people or organisation

- Can take any form of content (have any elements inside it)
- ...but semantically should only be contact information (no publication date or other metadata)

## `<blockquote>` block quotation

The enclosed text inside the element is an extended quotation.

- Can provide a URL for the source in the `cite` attribute, and a text representation of the source in the `<cite>` element (to be placed outside the `<blockquote>` element)
- Thise is for blocks of quotes, use `<q>` for shorter inline quotes

``` HTML
<div>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they'll go through
      anything. You read and you're pierced.
    </p>
  </blockquote>
  <p>—Aldous Huxley, <cite>Brave New World</cite></p>
</div>
```

## `<q>` inline quote element

Enclose text is a short inline quotation.

- Modern browsers surround the quote in quotation marks.
- Can also have the `cite` attribute like `<blockquote>`

## `<header>` element

Represent introductory content

- In the context of `<body>` as its parent, it defines a `banner` landmark (global header with site logo, company name, etc)
- Historically it represented any header text before being replaced by `h1-h6`.

## `<nav>` navigation section element

Section of a page containing navigation links

- Intended to be a major block of navigation links - doesn't have to encapsulate all links or even all navigation links
- Page can have several `<nav>` blocks

## `<main>` element

Contains primary content of `<body>`

## `<section>` generic section element

Section of a document that doesn't have a more semantically specific element to represent it, e.g. `<nav>` or `<article>` or `<main>`.

- If it's just a styling wrapper, use `<div>` instead.

## `<article>` article content element

Self-contained composition - intended to be distributable or reusable

- For example, forum or blog post, magazine or newspaper article.