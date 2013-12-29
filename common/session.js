/**!
 * nae-web - common/logger.js
 *
 * Copyright(c) nae team and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var session = require('koa-sess');
var redisStore = require('koa-redis');
var ms = require('ms');
var config = require('../config');

var key = 'naeweb.sid';
var cookie = {path: '/', httpOnly: true, maxAge: ms('7d')};

if (config.debug) {
  module.exports = session({
    key: key,
    cookie: cookie
  });
} else {
  module.exports = session({
    key: key,
    cookie: cookie,
    store: redisStore(config.redis)
  });
}
