
var HtmlDom = require("minidom/lib/dom-level3").dom.level3.core;
var minidom = require("minidom");
var xmldom = require("xmldom");

exports.DOMParser = CrossPlatformDomParser;
function CrossPlatformDomParser() {
}

CrossPlatformDomParser.prototype.parseFromString = function (content, contentType) {
    if (contentType === "text/html") {
        return minidom(content);
    } else if (contentType === "application/xml") {
        return new xmldom.DOMParser().parseFromString(content, contentType);
    } else {
        throw new Error("Can't parse DOM because Content type not supported on both browsers and Node.js: " + contentType);
    }
};

exports.Node = HtmlDom.Node;
exports.Element = HtmlDom.Element;

