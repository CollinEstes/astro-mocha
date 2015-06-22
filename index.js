/**
*
* astro-mocha/index.js - ENTRYPOINT for astro-mocha
*
**/
'use strict';
var spawn = require('child_process').spawn;
var buildArgs = require('./src/buildArgs');


module.exports = function (projectDir, options) {

	var args = buildArgs(projectDir, options);

	// set up
	return {cmd: 'mocha', args: args};
};