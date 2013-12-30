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
var logger = require('../common/logger');
var rt = require('koa-rt');
var favicon = require('koa-favicon');
var session = require('../common/session');
var config = require('../config');

var app = koa();

app.name = 'nae-web';
app.outputErrors = config.debug;
app.keys = config.cookieKeys;
app.proxy = true; // to support `X-Forwarded-*` header

app.use(favicon());
app.use(rt());
app.use(session);

app.use(function *handler() {
  this.body = 'Hello NAE';
});

app.on('error', function (err) {
  if (!err.status || err.status >= 500) {
    logger.error(err);
  }
});

module.exports = http.createServer(app.callback());
