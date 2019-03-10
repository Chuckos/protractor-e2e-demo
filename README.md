# Protractor-e2e-demo
Demonstration of how I create automated test using [protractor](http://www.protractortest.org/#/).  This is an example of how I would create a minimal set of automated tests to validate a search functionality.

## Installation:

1. Install protractor globally:

```
npm install -g protractor
```

2. Install webdriver-manager

```
webdriver-manager update
```

## To Run Tests:

Start up a selenium server with:

```
webdriver-manager start
```
Run the tests with the following command in root folder.

```
protractor conf.js
```
