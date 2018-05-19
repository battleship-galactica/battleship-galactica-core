const f = require('.');

describe('mocha tests for `src/**/*.(spec|test).js`', function () {
  it('should pass', function (done) {
    setTimeout(() => {
      done();
    }, 100);
  });
});

describe('istanbul', function() {
  it('1/2 true branch', function(done) {
    f(true);
    f(false);
    done();
  });
});
