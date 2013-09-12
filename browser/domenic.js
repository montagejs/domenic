
var preamble = /^\s*<!doctype/;

exports.DOMParser = CrossPlatformDomParser;
function CrossPlatformDomParser() {
}

CrossPlatformDomParser.prototype.parseFromString = function (content, contentType) {
    if (contentType !== "text/html" && contentType !== "application/xml") {
        throw new Error("Can't parse DOM because Content type not supported on both browsers and Node.js: " + contentType);
    }
    var contentDocument;
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
    try {
        // WebKit returns null on unsupported types
        var parser = new DOMParser();
        contentDocument = parser.parseFromString(content, contentType);
    } catch (exception) {
        // Firefox/Opera/IE throw errors on unsupported types
        if (!/^\s*text\/html\s*(?:;|$)/i.test(contentType)) {
            throw exception;
        }
    }
    if (!contentDocument) {
        contentDocument = document.implementation.createHTMLDocument("");
        if (preamble.exec(content)) {
            contentDocument.documentElement.innerHTML = content;
        }
        else {
            contentDocument.body.innerHTML = content;
        }
    }
    return contentDocument;
};

exports.Node = Node;
exports.Element = Element;

