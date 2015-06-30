/**
*
* astroMochaSpec.js - main test
*
**/

var astroMocha = require('../')
	, cwd = '/test';

describe('astro-mocha', function () {

	it('should return command as mocha', function () {
		var result = astroMocha(cwd, {});
		expect(result.cmd.indexOf('astro-mocha/node_modules/.bin/mocha')).to.not.equal(-1);
	});
});