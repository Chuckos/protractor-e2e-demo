var env = require('../../environment.js');

describe('Load Page', function() {
    it('should have login page', function() {
        browser.get(env.baseUrl);
        browser.sleep(10000);
    });
});