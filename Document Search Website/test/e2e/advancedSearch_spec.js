'use strict';

var env = require('../../environment.js');
var advancedSearch = require('./page-objects/advancedSearch-page.js');
var basicSearchPage = require('./page-objects/basicSearch-page.js');

var authorName = 'Smith';
var date = '1834';

describe('Search for author / editor using advanced search with date range', function () {

    //Objects
    var advancedSearchPage = new advancedSearch();
    var searchPage = new basicSearchPage();

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get(env.baseUrl);

        //navigate to advanced search page and enter details users.
        searchPage.searchOptions.click();
        searchPage.advancedSearchLink.click();
        advancedSearchPage.authorTextBox.sendKeys(authorName);
        advancedSearchPage.facetStartYear.sendKeys(date);
        advancedSearchPage.facetEndYear.sendKeys(date);
        advancedSearchPage.advanceSearhButton.click();
    });

    it('should display documents by author name containing Smith within specified date rage', function () {
        expect(searchPage.searchResultsMetaAuthor.getText()).toContain(authorName);

    });

    it('should have a date filter applied based on date range entered', function () {
        expect(searchPage.datefilter.getText()).toContain(date);
    });

    it('should return only 1 record', function () {
        expect(searchPage.numOfSearchResults.getText()).toEqual('1 Result(s)');
    });


});
