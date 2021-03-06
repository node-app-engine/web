/**!
 * nae-web - worker.js
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

var graceful = require('graceful');

var config = require('./config');
var web = require('./servers/web');

web.listen(config.webPort);

console.log('[%s] [worker:%d] Server started, web listen at %d, cluster: %s',
  new Date(), process.pid, config.webPort, config.enableCluster);

graceful({
  server: [web],
  error: function (err, throwErrorCount) {
    if (err.message) {
      err.message += ' (uncaughtException throw ' + throwErrorCount + ' times on pid:' + process.pid + ')';
    }
    console.error(err);
  }
});
