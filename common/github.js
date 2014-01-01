/**!
 * nae-web - common/logger.js
 *
 * Copyright(c) nae team and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   dead_horse <dead_horse@qq.com> (http://deadhorse.me)
 */

'use strict';

/**
 * Module dependencies.
 */

var config = require('../config');
var Github = require('github');
var wrapper = require('co-github');

var github = new Github({
    // required
    version: "3.0.0",
    // optional
    debug: config.debug,
    protocol: "https",
    timeout: 5000
});

module.exports = wrapper(github);
