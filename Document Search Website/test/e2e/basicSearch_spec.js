'use strict';

var env = require('../../environment.js');
var basicSearchPage = require('./page-objects/basicSearch-page.js');

var wordTest = 'test';
var wordAutoInDutch = "auto";
var wordSoftware = "software";
var results;

describe('Load springer link website', function () {

    //Objects
    var searchPage = new basicSearchPage();

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get(env.baseUrl);
    });

    it('should display basic search box', function () {
        expect(searchPage.searchBox.isDisplayed()).toBeTruthy();
    });

    describe('click on search button with no characters in search box', function () {

        beforeEach(function () {
            searchPage.searchButton.click();
        });

        it('should show results listing page of journals', function () {
            expect(searchPage.resultList.isDisplayed()).toBeTruthy();
        });

        it('should display new search button', function () {
            expect(searchPage.newSearchButton.isDisplayed()).toBeTruthy();
        });

        it('should display refine your search facets box', function () {
            expect(searchPage.contentTypeFacet.isDisplayed()).toBeTruthy();
        });
        it('should display Include Preview-Only content', function () {
            expect(searchPage.resultOnlyAccess.isDisplayed()).toBeTruthy();
        });

        it('should display sort By box', function () {
            expect(searchPage.sortResults.isDisplayed()).toBeTruthy();
        });
    });

    describe('search for journals using the word test', function () {

        it('should return search results that has relevance to searched word test', function () {
            searchPage.searchforWord(wordTest);
            expect(searchPage.resultListTitle.getText()).toContain(wordTest);
        });
    });


    describe('search for journals in dutch localisation', function () {

        it('should return search results that has relevance to search in dutch', function () {
            searchPage.languageButton.click();
            searchPage.changeLanguageDutch.click();
            searchPage.searchforWord(wordAutoInDutch);

            searchPage.resultListTitle.getText()
                .then(function (object) {
                    results = JSON.stringify(object);
                    expect(results).toMatch(wordAutoInDutch);
                });


        });
    });


    describe('login and search', function () {

        it('should return search results that has relevance to search of word', function () {
            searchPage.registerLink.click();
            // will move credentials to environment file so file won't be part of public source code.
            searchPage.login('tmcadeeko@googlemail.com', 'Springer_2017');
            searchPage.searchforWord(wordSoftware);
            expect(searchPage.resultListTitle.getText()).toContain(wordSoftware);

        });

    });
});
