---
sidebar_position: 1
---

# Overview Page

The test explorer is where to go when you want to browse all the tests you have added to Wring. 

![Test Explorer](/img/Test-Explorer.png)

This page displays the test runs along with quick access to high level information such as a description, run time, total paths, healed paths. By default, your results will be displayed chronologically. Clicking on a Test Run shows you further detail about the particular Test Run.

The test explorer is the destination for your test runs as well as test suites.

## Adding a Test Run

The test explorer tab can is also the place to upload new tests. Here you can click on the `Add Test` button to upload test scripts and set run options.

:::note Currently Supported Formats 

At the Moment, Katalon (.xml) and Selenium IDE (.side) are supported through this menu

:::

This is the add test modal.

![Adding a Test](/img/Add-Test.png)

This is where you specify run properties and fill in the required fields before adding a test to Wring. The run name is required and is one of the ways you can search for your test. You can also add a description to help you and others understand what is going on in each test. 

We support filter button which allows you to use all defined filter as buttons in Search header. If you click a button the filter in the search is added automatically and executes the search immediately. You can search by `run name`, `date`, `description`...etc
There is the posssibility to clear the filter data (`reset`) and also `reset all` to go back to all results.

![Filter](/img/Filter.png)

In Overview, you can see `test status`*(passed/failed)*, `run time`, `test steps`, `failures`, `auto healed` and `time saved`. 

We also support videos for all our testcases, you can see it in the photo below.

![Filter](/img/overview.png)

If you want to share your test with your colleague and he/she can be able to see all the edit/add steps, simulator and all variables,... Yes, it's possible - Wring allows you to generate a shareable url. 

![Filter](/img/share.png)

You can share your shareable url in three options: 

- **Read only** - *You can just see all your changes but you aren't allowed to edit or add something.*
- **Edit Item properties** - *You can see all your changes and also you're allowed to edit them.*
- **Rerun this item** - *You can rerun this same test in your browser.*

![Filter](/img/share.gif)

There is also a tab with advanced options. This includes: 

- **Ignore disabled elements**
- **Ignore invisible elements**
- **Collect page-interaction event data for test case augmentation**
  - This option allows you to take advantage of features in the test Enhancer and app map sections of the product.
- **Collect extra element data & try to fix broken selectors**
  - Selecting this option enabled deep heal. This will make Wring compare the results of the whole script and rewrite them, if it finds collisions.
- **Generate selectors for all elements on each visited page**
  - Selecting this option will generate optimal selectors for all elements on the pages visited during this test. This is a very intensive process and test execution time is dependent on the number of elements that exist on the pages.
- **Try to avoid string/text methods when generating XPath selectors**
- **Verify suggested selectors**
  - This option will rerun the tests in the background using selectors that were reccomended by Wring.
- **Trigger integrations**
  - By selecting this option, you are includng this test and susbequent reruns of this test to be included for any integrations you may have set up. For example, if this test was to fail in this or subsequent runs, selecting this indicates that you would like to be notfied via a Wring integration.
- **Avoid these attributes when generating selectors**
- **Use these attributes when generating selectors**
- **Continue test suite execution if a component test fails**
  - Test suites may sometimes be depend on the successful completion of earlier tests for later tests to pass. In that case, using this option will avoid unecessary runs in the case a test fails earlier in the test suite.
- **Time out and cancel**

![Filter](/img/options.png)



