var env = require('../../environment.js');

beforeEach(function (){
    browser.waitForAngularEnabled(false);
    browser.get(env.baseUrl);
});

describe('phptravels website navigation', function() {
    it('should load home page', function() {
    });


    it('should load login page', function(){
        browser.driver.findElement(by.css('.icon_set_2_icon-105')).click();
        //browser.sleep(5000);
        browser.driver.findElement(by.linkText('Login')).click();
        browser.sleep(5000);

    });
});

/*

beforeEach(function () {
    utils.getByUrl(dashboardPage.url);
    utils.checkLoginStatusAutoLogin(creds.mainUser, creds.mainPassword);
});*/
