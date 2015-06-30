/**
*
* buildArgsSpec.js
*
**/

var buildArgs = require('../src/buildArgs');

describe('buildArgs.js', function () {

	beforeEach(function () {
		this.allOptions = {
			"chai": true,
			"sinon": true,
			"proxyquire": true
		};

		this.someOptions = {
			sinon: true
		};

		this.mockPath = '/src'

	});

	it('should return a string array', function () {
		expect(buildArgs(this.mockPath, this.allOptions)).to.be.an.instanceof(Array);
	});

	it('should have options in string array', function () {
		var args = buildArgs(this.mockPath, this.allOptions).join(' ');
		expect(args.indexOf('sinon.js')).to.not.equal(-1);
		expect(args.indexOf('chai.js')).to.not.equal(-1);
		expect(args.indexOf('proxyquire.js')).to.not.equal(-1);
	});

	it('should have not have option not passed in, in the string array', function () {
		var args = buildArgs(this.mockPath, this.someOptions).join(' ');
		expect(args.indexOf('sinon.js')).to.not.equal(-1);
		expect(args.indexOf('chai.js')).to.equal(-1);
		expect(args.indexOf('proxyquire.js')).to.equal(-1);
	});

	it('should handle no args', function () {
		var args = buildArgs(this.mockPath, {});
		expect(args).to.be.ok;
	});


});
