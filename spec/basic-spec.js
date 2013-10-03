/*global describe,it,beforeEach,expect */
var domenic = require("../domenic");
var he = it;

describe("Domenic", function () {
    var parser;
    beforeEach(function () {
        parser = new domenic.DOMParser();
    });

    he("parses HTML", function () {
        var document = parser.parseFromString("<html><body>hi</body></html>", "text/html");
        expect(document.children[0].tagName).toEqual("HTML");
    });

    he("parses XML", function () {
        var document = parser.parseFromString('<?xml version="1.0"?><quiz></quiz>', "application/xml");
        expect(document.childNodes[1].tagName).toEqual("quiz");
    });
});
