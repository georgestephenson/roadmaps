# Your First HTML File

## Tags

Tags used to create elements, e.g. <p></p> create a HTML paragraph element.

## Attributes

Attribute extends an HTML element, with the form `name="value"`

HTML attributes are *reflected* into Javascript properties where they are more easily mutated. The reflection is bidirectional, except for `value` and `checked` on form elements, where the HTML attribute is the default/initial value.

## Case Insensitivity

HTML is case insensitive when it comes to HTML elements like <hTmL> but it's generally best practice to use all lowercase <html>.

## HTML Entity aka Character Reference

A pattern of characters that represent another character, a character encoding, typically used for reserved characters. E.g. \&lt; is <

Also useful to type characters not available on a standard keyboard like \&copy; for &copy;

You can also write chars using decimal or hexadecimal. \&#60; is also <, so is \&#x3C;

## HTML Comments

Comments are denoted using `<!--` and `-->`

They can span one line or multiple.

## Whitespace

Common misconception - HTML collapses all whitespace. HTML does preserve whitespace between tags, which allows CSS to conditionally display it.

By default the whitespace is stripped.

Quite a detailed exploration in the [Mozilla MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text/Whitespace)