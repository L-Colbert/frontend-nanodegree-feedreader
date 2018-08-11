# Testing a web-based application using Jasmine

## Table of Context

1. Project Overview
2. Included Technologies
3. Getting Started
4. List of included test


## Project Overview

In this project you are given a web-based application that reads RSS feeds. The purpose of this project is to practive writing tests to test the appliation using [Jasmine](http://jasmine.github.io/).

### Included technologies

* [Jasmine 2.1.2](http://jasmine.github.io/)
* [Handlebars 2.0](https://handlebarsjs.com/)
* [Jquery 2.1.1](https://jquery.com/)
* [Javascript ES6](http://www.ecma-international.org/ecma-262/6.0/)

## Getting started

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)

2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).

3. Review the functionality of the application by loading the following file within your prefered browser.

```
index.html
```

## List of included tests

* loops through each feed in the ```allFeeds``` object and ensures it has a URL defined and that the URL is not empty.
* loops through each feed in the ```allFeeds``` object and ensures it has a name defined and that the name is not empty.
* ensures the menu element is hidden by default.
* ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* ensures when the ```loadFeed``` function is called and completes its work(there is at least a single ```.entry``` element within the ```.feed``` container).
* ensures when a new feed is loaded by the ```loadFeed``` function that the content actually changes.
