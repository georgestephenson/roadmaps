# Standard Attributes

These standard attributes can be used on almost all HTML element types.

They provide additional info, or functionality.

## `id` attribute

`id` is a global attribute - more strong than a common attribute, it applies to *all* HTML elements

Defines an ID for the element unique to the document.

- No whitespace
- Commonly used in styling and scripting to identify an element
- CSS select `id="foo"` with `#foo`

## `class` attribute

- Specify one (or more) classes for an element. The list of classes for the element.
- Encouraged to use class names for semantic intent rather than pure presentational implementation
- CSS select `class="bar"` with `.bar`

## data attributes

Store extra data against a particular element

Any attribute starting with `data-` is a data element.

For example 

``` HTML
<p 
  data-foo="1234"
  data-bar="abc">
  Test
</p>
```

- In Javascript, you can get/set the data attributes with the dataset object and its properties
- Typically for data local to the page/site

## `style` global attribute

- Apply style to an element
- Recommended not to be used and for styles to be in a separate file.