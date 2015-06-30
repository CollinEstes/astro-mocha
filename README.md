# astro-mocha
[astro](https://www.npmjs.com/package/astro) module that provides [mocha](https://www.npmjs.com/package/mocha) test running


## Options

*Any 'global' options listed below are only global to the testing context, they do not impact your application beyond test running*

#### --chai

Adds [chai](https://www.npmjs.com/package/chai), chai.expect, chai.should, and chai.assert to the global for testing.  No need to include chai into your project's dev dependencies or require it in, in each spec file.

```
global.chai = require('chai');
global.expect = chai.expect;
global.should = chai.should;
global.assert = chai.assert;
```

#### --sinon

Adds [sinon](https://www.npmjs.com/package/sinon), and if --chai is specified, will add [sinon-chai](https://www.npmjs.com/package/sinon-chai) to the global chai implmentation.

```
global.sinon = require('sinon');
```

#### --proxyquire
Adds [proxyquire](https://www.npmjs.com/package/proxyquire) to the global for testing. No need to include proxyquire into your project's dev dependencies or require it in, in each spec file.

```
global.proxyquire = require('proxyquire');
```

#### --babel

Adds [babel](https://github.com/babel/babel) transpilation compiler option

```
mocha --compilers js:babel/register
```



## Want more globals or additional options?

[Submit a PR or open an issue](https://github.com/CollinEstes/astro-mocha)


