'use strict';

var basicSearchPage = function () {
    this.searchBox = element(by.id('query'));
    this.resultList = element(by.id('results-list'));
    this.searchButton = element(by.id('search'));
    this.newSearchButton = element(by.id('global-search-new'));
    this.contentTypeFacet = element(by.id('content-type-facet'));
    this.resultOnlyAccess = element(by.id('results-only-access'));
    this.sortResults = element(by.id('sort-results'));
    this.resultListTitle = element.all(by.css('.content-item-list')).all(by.css('.title'));
    this.languageButton = element(by.id('lang'));
    this.changeLanguageDutch = element(by.id('change-language-Deutsch'));
    this.registerLink = element(by.id('register-link'));

    this.searchOptions = element(by.id('search-options'));
    this.advancedSearchLink = element(by.id('advanced-search-link'));

    this.searchResultsMetaAuthor = element(by.css('.authors'));
    this.datefilter = element(by.id('date-facet-remove'));
    this.numOfSearchResults = element(by.css('.number-of-search-results-and-search-terms'));

    // will move this to login page object.
    this.enterEmail = element(by.id('login-box-email'));
    this.enterPassword = element(by.id('login-box-pw'));
    this.loginButton = element(by.css('.btn-monster'));


    this.searchforWord = function (enterWord) {
        this.searchBox.sendKeys(enterWord);
        this.searchButton.click();
    };

    // will move this function to helper section.
    this.login = function (email, password) {
        this.enterEmail.sendKeys(email);
        this.enterPassword.sendKeys(password);
        this.loginButton.click();
    };


};

module.exports = basicSearchPage;