'use strict';

var AdvancedSearchPage = function () {

    this.authorTextBox = element(by.css('.author-is'));
    this.facetStartYear = element(by.id('facet-start-year'));
    this.facetEndYear = element(by.id('facet-end-year'));
    this.advanceSearhButton = element(by.id('submit-advanced-search'));

};

module.exports = AdvancedSearchPage;