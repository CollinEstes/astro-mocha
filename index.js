/**
*
* astro-mocha: astro-cli module that executes mocha test-runner
*							 against a user's current working directory '/test' folder
*
* AVAILABLE OPTIONS
*	--chai: adds chai, expect, should, assert, and sinon-chai to the global
*	--sinon: adds sinon to the global
* --babel: adds a babel compiler to the mocha options
*
**/
'use strict';
var buildArgs = require('./src/buildArgs')
	, path = require('path')
	, fs = require('fs')
	;


module.exports = function (projectDir, options) {

	var args = buildArgs(projectDir, options)
		, cmd = path.resolve(fs.realpathSync(__dirname), './node_modules/.bin/_mocha');

	// set up
	return {cmd: cmd, args: args};
};