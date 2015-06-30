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
		expect(result.cmd).to.equal('mocha');
	});
});