/**!
 * nae-web - servers/web.js
 *
 * Copyright(c) nae team and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var koa = require('koa');
var http = require('http');

var app = koa();

app.use(function *() {
  this.body = 'Hello NAE';
});

module.exports = http.createServer(app.callback());
