var app = require('./index');
var assert = require('assert');
var request = require('supertest').agent(app.listen());

describe('koa example app', function () {
  it('should return body with hello world', function (done) {
    request
      .get('/')
      .expect(200)
      .expect("Hello World", done);
  });
});