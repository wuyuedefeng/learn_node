//api http://nodejs.org/api/url.html
var urlString = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
var url = require('url');

// url.parse(urlStr[, parseQueryString][, slashesDenoteHost])
var urlObj1 = url.parse(urlString);
console.log( urlObj1 );

var urlObj2 = url.parse(urlString, true);
console.log( urlObj2 );

//url.format(urlObj)
var urlString = url.format(urlObj1);
console.log(urlString);

var urlString = url.format(urlObj2);
console.log(urlString);

//url.resolve(from, to)
var u1 = url.resolve('/one/two/three', 'four');         // '/one/two/four'
console.log(u1);

var u2 = url.resolve('/one/two/three/', 'four');         // '/one/two/three/four'
console.log(u2);

var u3 = url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
console.log(u3);

var u4 = url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
console.log(u4);











