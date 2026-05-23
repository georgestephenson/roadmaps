# Embedding Media

## Priority Hints

Add `fetchpriority` attribute to a `<img>`, `<link>` or `<script>` to fetch resources earlier in the loading process.

Default value is `auto`, can be set to `high` or `low` priority.

## Images

`<img>` contains image linked to using `src` attribute 

- Generally recommended to use relative links to image hosted on your own site
- `alt` text attribute for when image cannot be displayed. Good for visually impaired users or when image cannot be displayed, but it's useless to repeat text already in the main body of the webpage.
- `width` and `height` attribute are useful for telling the browser the dimensions of the image before it is loaded, so that doesn't suddenly jerk the layout of the web page when it loads in. Generally not recommended for *resizing* the image though.
- `title` attribute provides a tooltip for the image when hovered, however is unpredictable for screen problems so has accessibility problems

## Figure element

`<figure>` can contain and `<img>` or other content along with `<figcaption>` caption for the content. Useful for grouping content together with a textual explanation of that content. Good for accessibility, UX and SEO.

``` HTML
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

Code snippit example (in a code snippit)

``` HTML
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  let txt = `Browser CodeName: ${navigator.appCodeName};\n`;
  txt += `Browser Name: ${navigator.appName};\n`;
  txt += `Browser Version: ${navigator.appVersion};\n`;
  txt += `Cookies Enabled: ${navigator.cookieEnabled};\n`;
  txt += `Platform: ${navigator.platform};\n`;
  txt += `User-agent header: ${navigator.userAgent};`;
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

## Audio

`<audio>` is similar to `<img>` but for audio files, with the same kind of `src` attribute.

- `controls` attribute will include audio player controls for the user. `controlslist` offers different options on what controls are displayed
- Several other attributes, and also many events available around the audio playback lifecycle
- You can provide different audio file types within `<source>` tags nested in the `<audio>` tag.

## Video

`<video>` tag follows a similar pattern to `<audio>`

You can also nest `<a>` tags for downloads.

NB: modern browsers auto-mute sound and users have to opt-in to it

## Content Security Policy (CSP)

`Content-Security-Policy` HTTP header instructs the user's browser to place restrictions on what your site is able to do and what code should run.

Your site opts-in to this to minimise security risks and to become more compliant with security standards.

For example
- Prevent cross site scripting, set allowed hosts/sources
- Block resource types
- Block inline Javascript, set allowed source for scripts
- Allowed sources for stylesheets
- Allowed sources for images

## iframe

`<iframe>` allows embedding another HTML page within your HTML page.

- Each `iframe` has additional memory and computing resource allocated to it, with increased requirements
- It shouldn't really be used for your own content. It should be used for embedding externally sourced content when it makes sense to be in your own page and you want to keep traffic on your site, e.g. Google maps plugin. But redirecting would be much simpler.