---
sidebar_position: 2
---

# Customizing Interceptor Execution

You may set the following environment variables to customize how the Interceptor
package and our API heals your tests:

## Supported Commands

- **TG_ENABLED** (set to '1' by default): Set this to ‘0’ to make the
  Interceptor package behave exactly like normal Selenium, with no calls to the
  Wring API for healing broken XPaths or CSS selectors.

- **TG_SERVER_TIMEOUT** (set to 600 by default): Sets how long to wait in
  seconds for each broken XPath or CSS selector to be healed by the Wring API.
  Most heals are complete within 30 seconds for uncomplicated web pages, but
  highly complex web pages may take several minutes for the Wring API to return
  a result for broken XPaths or CSS selectors.

- **TG_FILTER_DISPLAYED** (set to '1' by default): If set to ‘1’, only currently
  displayed elements will be used to generate a snapshot of the current state of
  a web page for the Wring API instead of all elements. This can greatly speed
  up processing for a highly complex web page.

- **TG_FILTER_ENABLED** (set to ‘1’ by default): If set to ‘1’, only currently
  enabled elements will be used to generate a snapshot of the current state of a
  web page for the Wring API instead of all elements. This can greatly speed up
  processing for a highly complex web page.

- **TG_NEIGHBOR_MAXDIST** (set to `600.0` by default): This sets the maximum
  radius in pixels of a circle centered around the original target web-element
  that will be searched for candidates matching the target element on an updated
  web-page when healing selectors is required. If set to a positive float value,
  the Interceptor will search for candidate matches in a region defined by a
  circle of the specified radius. If you're sure your elements don't move too
  much, setting this environment variable to a lower value can greatly speed up
  selector heal and suggest processing of complex pages. If you want to search
  the entire page for potential candidates for healing selectors, set this to
  `-1`.

- **TG_HANDLE_FAILURE** (set to 'exception' by default): If this is set to
  ‘suggest-xpaths’, broken XPaths or CSS selectors that are untrained (that were
  not uploaded to the Wring API for training our learning algorithms on a
  working version of the web page) will not immediately fail. The Wring API will
  instead attempt to heal them in-place, and suggest alternative XPaths or CSS
  selectors that may select the element that was intended to be selected. This
  is not as powerful as our usual healing engine, but provides a reasonable
  fall-back option if all you have is a broken XPath/CSS selector and no way to
  get to the initial known-good state of an XPath/CSS selector in a Selenium
  test.

- **TG_FAST_HEAL** (set to '0' by default): Every time the Wring Interceptor
  encounters an XPath or CSS selector and the resulting element selection is
  successful, it collects information on the element and the current state of
  the web page to send to the Wring API for training our healing engine. This
  processsing can sometimes slow down your tests. If you’ve already run a
  training session on web page for our API or you are sure that the state of a
  currently broken web page has not changed since your last test run, set this
  environment variable to ‘1’ to skip this information collection.

  This variable is set to ‘0’ by default to ensure the Wring API is always
  up-to-date on the latest state of the web page under test. Note that if the
  Wring API detects that the web page contents have changed since its last
  snapshot of the web page, it will not send stale healing results, in which the
  Interceptor will automatically collect all the required information to
  snapshot the current state of the web page and send it to the API.

- **TG_RESULT_JSON**: if this environment variable is set, it should point to a
  .json file on disk where the results for successful XPath/CSS selector heals
  and suggestions from the Wring API will be saved. The file name will be
  prefixed with the test run request ID as assigned by the Wring API.

- **TG_LOG_LEVEL**: Set to one of ‘1’ (debug), ‘2’ (info, default), ‘3’
  (warning), or ‘4’ (error). This affects the verbosity of the Interceptor
  logging.

- **TG_RUN_NAME**: Set this environment variable to specify a name for your test
  run. This will show up in the Wring UI and allow you to correlate your test
  run with its results using this name in addition to the test run ID assigned
  by the Wring API. By default, this is unset, and the interceptor attempts to
  set the name of the run using the test run filename.

- **TG_IGNORE**: If you need to ignore healing on certain selectors, you can
  add them to a `.tgignore` file and put the path of the file in this variable.
  Our interceptor will not try to heal those selectors. By default, the
  interceptor looks for this file in the current working directory.

- **TG_TAKE_SCREENSHOTS** (set to '1' by default): If you set this to '0', the
  interceptor will not take any screenshots during the entire process. You can
  choose this if you do not want screenshots of your application being saved
  anywhere.

- **TG_ALL_SUGGEST** (set to '0' by default): Set this variable to 1 when you
  wish to collect a list of suggested xpaths for every element of the pages
  visited in a test run. This is accompanied with element descriptions and
  screenshots.

- **TG_USE_ATTRIBUTES**: Set this variable to a comma-separated list of strings
  to provide HTML attributes to the Wring API that it should preferentially use
  when generating selector suggestions and healed selectors. For example:
  `TG_USE_ATTRIBUTES=data-test-id,data-test` will make sure the API considers
  these attributes when generating selectors.

- **TG_IGNORE_ATTRIBUTES**: Set this variable to a comma-separated list of
  strings to provide HTML attributes to the Wring API that it should avoid when
  generating selector suggestions and healed selectors. For example:
  `TG_USE_ATTRIBUTES=id,class` will make sure the API does not use these
  attributes at all when generating selectors. This is most useful when
  attributes for elements are automatically generated by Single-Page-Application
  (SPA) framework like React or Angular. In this case, you can provide hints for
  more stable attributes to be used when generating selectors.
