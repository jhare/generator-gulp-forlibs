/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var rimraf = require('rimraf');

describe('gulp-forlibs generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('gulp-forlibs:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  after(function(done) {
	  var tempTestPath = path.join(__dirname, 'temp');
	  rimraf(tempTestPath, done);
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig'
    ];

	/*
    helpers.mockPrompt(this.app, {
      'someOption': true
    });
	*/
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
