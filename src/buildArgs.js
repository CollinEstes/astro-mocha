/**
*
* buildArgs.js - processes the arguments provided
*
**/

var path = require('path')
	, fs   = require('fs')
	;

function buildArgs (projectDir, options) {
	var optionKeys = Object.keys(options)
		, setupfiles = []
		, finalArg = projectDir + '/test'
		, args = []
		, setupPath  = path.join(path.dirname(fs.realpathSync(__filename)), './setup/');
		;

 	if (options.babel) {
 		args = ['--compilers js:babel/register']
 	}

 	// recursively search test directory
 	args.push('--recursive');

	optionKeys.forEach(function (key) {
		switch (key) {
			case 'chai':
				setupfiles.push(setupPath + 'chai.js');
				break;
			case 'sinon':
				setupfiles.push(setupPath + 'sinon.js');
				break;
			default:
				break;
		}
	});

	args = args.concat(setupfiles);
	args.push(finalArg);
	return args;

}

module.exports = buildArgs;