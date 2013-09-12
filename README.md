
# Domenic

This is a Node.js-packaged-module that normalizes the interface for
parsing HTML and XML documents in Node.js and in the browser.  It can be
used in browsers using [Browserify][] or [Mr][].  The interface for
using `domenic` is:

```javascript
var domenic = require("./domenic");
var parser = new domenic.DOMParser();
var document = parser.parseFromString(content, contentType);
```

The content type can be "text/html" or "application/xml".  In the
browser, it uses every dirty trick in the book to make the DOMParser
work for both of these content types, but behaves like an ornery subset
of what DOMParser was intended to be.  In Node.js, it uses either the
`minidom` or `xmldom` module from `npm` to accomplish the same thing.

[Browserify]: https://github.com/substack/node-browserify
[Mr]: https://github.com/montagejs/mr

