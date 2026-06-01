# Using Forms

## `<label>` label element

Used as a caption / label for another HTML element

Use with `for` attribute to point to the id of another element which is "labelable" (certain form control elements like `<input>`)

You can also nest the form control inside the `<label>` in which case the `for` is not needed, it's implicit.

Accessibility and screen reader wise, the label becomes programatically associated with that form control element

- Avoid putting interactive content and headings nested inside the label, this will interfere with assistive technology

## `<input>` input element

Interactive control for web forms

- Many different values of `type` attribute, some of which are
    - button
    - checkbox
    - date
    - email
    - file
    - hidden
    - month (month and year)
    - number
    - password
    - radio
    - submit
    - text
- Many attributes give power to the input element. The [MDN docs input element page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) gives a good detailed description.
- The attributes provide for client-side validation without needing Javascript, e.g. `min` and `max` on numbers.
- Many methods for Javascript on the `HTMLInputElement` interface
- CSS UI pseudo-classes allows for fast sophisticated styling of input controls without any Javascript at all
- Also CSS selectors for attributes, placeholder text, caret-color, field-sizing, etc.
- Placeholders aren't accessible, so shouldn't be required to understand the form.

### `<input type="file">` file upload type attribute

- Path to file when selected stored in `value` attribute
- `accept` attribute defines accepted filetypes for example `accept="image/png, image/jpeg"`. Can be file extensions, MIME types, or wildcards for MIME type categories like `video/*` 
- `capture` attribute can capture images, video or audio from cameras and microphones. The `accept` again denotes the type of file, and browser works out whether it needs camera or microphone. Works better on mobile, on desktop it will typically just display the standard file picker. Two available options:
    - `capture="user"` for the front user-facing camera/microphone
    - `capture="environment"` for the outward-facing camera/microphone
    - These options demonstrate that it's quite mobile-centric (mobiles and tablets typically have front and rear cameras)
- `multiple` attribute for more than one file

## Form validation

- Built-in form validation without javascript, for example, attributes like `required`, `min` and `max`, `type` (number, email, etc), `pattern` accepts regex.
- CSS pseudo-classes available such as `:valid` and `:invalid`
- We can use the Constraint Validation API in Javascript to interact with the HTML validation and e.g. `setCustomValidity` to write custom code that sets check validation errors using the same interface as the built-in validation.