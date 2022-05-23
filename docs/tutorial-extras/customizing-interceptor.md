---
sidebar_position: 2
---

# Customizing Interceptor Execution

You may set the following environment variables to customize how the Interceptor package and our API heals your tests:

## Supported Commands

- **Quikly_ENABLED**: This is set to ‘1’ by default. Set this to ‘0’ to make the Interceptor package behave exactly like normal Selenium, with no calls to the Quikly API for healing broken XPaths or CSS selectors.

- **Quikly_SERVER_TIMEOUT**: Sets how long to wait for each broken XPath or CSS selector to be healed by the Quikly API. Most heals are complete within 30 seconds for uncomplicated web pages, but highly complex web pages may take several minutes for the Quikly API to return a result for broken XPaths or CSS selectors. This is set to 10 minutes by default.

- **Quikly_FILTER_DISPLAYED**: This is set to ‘0’ by default. If set to ‘1’, only currently displayed elements will be used to generate a snapshot of the current state of a web page for the Quikly API instead of all elements. This can greatly speed up processing for a highly complex web page.

- **Quikly_FILTER_ENABLED**: This is set to ‘0’ by default. If set to ‘1’, only currently enabled elements will be used to generate a snapshot of the current state of a web page for the Quikly API instead of all elements. This can greatly speed up processing for a highly complex web page.

- **Quikly_NEIGHBOR_MAXDIST**: This sets the maximum radius in pixels of a circle centered around the original target web-element that will be searched for candidates matching the target element on an updated web-page. This environment variable is set to -1 by default, meaning the entire web-page will be searched for potential candidate matches. If set to a positive float value, the Interceptor will search for candidate matches in a region defined by a circle of the specified radius. This can greatly speed up selector heal and suggest processing of complex pages.

- **Quikly_HANDLE_FAILURE**: If this is set to ‘suggest-xpaths’ (default), broken XPaths or CSS selectors that are untrained (that were not uploaded to the Quikly API for training our learning algorithms on a working version of the web page) will not immediately fail. The Quikly API will instead attempt to heal them in-place, and suggest alternative XPaths or CSS selectors that may select the element that was intended to be selected. This is not as powerful as our usual healing engine, but provides a reasonable fall-back option if all you have is a broken XPath/CSS selector and no way to get to the initial known-good state of an XPath/CSS selector in a Selenium test.

- **Quikly_FAST_HEAL**: Every time the Quikly Interceptor encounters an XPath or CSS selector and the resulting element selection is successful, it collects information on the element and the current state of the web page to send to the Quikly API for training our healing engine. This processsing can sometimes slow down your tests. If you’ve already run a training session on web page for our API or you are sure that the state of a currently broken web page has not changed since your last test run, set this environment variable to ‘1’ to skip this information collection.

  This variable is set to ‘0’ by default to ensure the Quikly API is always up-to-date on the latest state of the web page under test. Note that if the Quikly API detects that the web page contents have changed since its last snapshot of the web page, it will not send stale healing results, in which the Interceptor will automatically collect all the required information to snapshot the current state of the web page and send it to the API.

- **Quikly_RESULT_JSON**: if this environment variable is set, it should point to a .json file on disk where the results for successful XPath/CSS selector heals and suggestions from the Quikly API will be saved. The file name will be prefixed with the test run request ID as assigned by the Quikly API.

- **Quikly_LOG_LEVEL**: Set to one of ‘1’ (debug), ‘2’ (info, default), ‘3’ (warning), or ‘4’ (error). This affects the verbosity of the Interceptor logging.

- **Quikly_RUN_NAME**: Set this environment variable to specify a name for your test run. This will show up in the Quikly UI and allow you to correlate your test run with its results using this name in addition to the test run ID assigned by the Quikly API.

- **Quikly_IGNORE** : If you need to ignore healing on certain selectors, you can add them to a .Quiklyignore file and put the path of the file in this variable. Our interceptor will not try to heal those selectors.

- **Quikly_TAKE_SCREENSHOTS** : This variable is set to 1 by default. If you set it to 0 the interceptor will not take any screenshots during the entire process. You can choose this if you do not want screenshots of your application being saved anywhere.

- **Quikly_ALL_SUGGEST**: Set this variable to 1 when you wish to collect a list of suggested xpaths for every element of the pages visited in a test run. This is accompanied with element descriptions and screenshots. This feature is currently only available for the Python Interceptor.

- **Quikly_LOCATOR_BANK**: Set this variable to 1 when you wish to enable to locator bank feature on Quikly. Doing so will store selector information for the purpose of identifying when multiple selectors reference the same element. By identifying when multiple selectors reference the same element, it is possible to standardize tests with optimal selectors therefore improving maintainability. Furthermore, if a selector needs to be healed, the locator bank can identify other tests with references to the same element and preemptively perform healing automatically.

