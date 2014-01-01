/**!
 * nae-web - test/servers/web.test.js
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

var should = require('should');
var request = require('supertest');
var app = require('../../servers/web');

describe('servers/web.test.js', function () {
  before(function (done) {
    app.listen(0, done);
  });
  after(function () {
    app.close();
  });

  it('should status 200', function (done) {
    request(app)
    .get('/')
    .expect(200)
    .expect('X-Response-Time', /^\d+$/)
    .expect('X-Powered-By', 'koa')
    .expect(/Hello NAE/, done);
  });
  it('should auth 302', function (done) {
    request(app)
    .get('/github/auth')
    .expect(302, done);
  });
});
