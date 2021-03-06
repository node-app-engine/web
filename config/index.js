/**!
 * nae-web - config/index.js
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

var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

fs.existsSync = fs.existsSync || path.existsSync;
var pkg = require('../package.json');

var root = path.dirname(__dirname);

var config = {
  version: pkg.version,
  webPort: 7001,
  enableCluster: false,
  debug: true, // if debug
  logdir: path.join(root, '.tmp', 'logs'),
  viewCache: false,
  cookieKeys: ['nae-web secret', 'haha other key'],
  github: {
    clientID: '5ec1d25d2a3baf99a03c',
    clientSecret: '513607494a244e2759738cae3d50a89494c1e7f0',
    callbackURL: 'http://localhost:7001',
    userKey: 'user',
    timeout: 10000
  },
};

// load config/config.js, everything in config.js will cover the same key in index.js
var customConfig = path.join(root, 'config/config.js');
if (fs.existsSync(customConfig)) {
  var options = require(customConfig);
  for (var k in options) {
    config[k] = options[k];
  }
}

mkdirp.sync(config.logdir);

module.exports = config;
