var env = require('./environment.js');

// The main suite of Protractor tests.
exports.config = {
    seleniumAddress: env.seleniumAddress,

    framework: 'jasmine',

    // Spec patterns are relative to this directory.
    specs: [
        './test/e2e/*_spec.js'
    ],

    // Exclude patterns are relative to this directory.
    exclude: [
        'basic/exclude*.js'
    ],

    capabilities: env.capabilities,

    baseUrl: env.baseUrl + '/',

    params: {
        login: {
            user: 'tmcadeeko@googlemail.com',
            password: 'Springer_2017'
        }
    }
};
