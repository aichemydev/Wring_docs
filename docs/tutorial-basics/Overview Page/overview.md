---
sidebar_position: 1
---

# Overview Page - Start a test!

The test explorer allows you to see all the tests you have added to Wring. You can also browse through your saved runs and see how they performed, run a particular test again or remove it entirely, and add notes or attachments to each test.

![Test Explorer](/img/Test-Explorer.png)

This page displays the test runs along with quick access to high level information such as descriptions, run times, total paths, and healed paths. 
It lists all of the test runs that occurred over a particular period of time.                                                                    
It allows you to quickly see if there were successful, failed or blocked paths and offers easy access to the output files to review what occurred during each test run.                                                    
By default, results will be displayed chronologically. Clicking on a Test Run shows you further detail about a particular Test Run.

The test explorer contains information for your test runs as well as test suites.

## Adding a Test Run

The performance test explorer tab can be used to upload new tests. Here you can click on the `Add Test` button to upload test scripts and set run options.

:::note Currently Supported Formats 

At the Moment, Katalon (.xml) and Selenium IDE (.side) are supported through this menu. Wring's custom .side files are supported as well. These can be created using the Wring Observer chrome extension.

:::

This is the add test modal. You can also add tests via your selenium/Cypress code, or the Wring Observer.

![Adding a Test](/img/Add-Test.png)

This is where you can specify run properties and fill in details before adding a test to Wring. The run name is only required field and is a handy way to search for your test. You can also add a description to help you and others understand what is going on in each test. 


Wring is the smart test search platform that helps you organize and track testing activities easily.                                                  
We support a filter button which allows you to use search easily across tests. If you click the filter button the search is performed immediately. You can search by `run name`, `date`, `description`...etc
One can clear filter data (`reset`) and `reset all` to go back to all results.

![Filter](/img/Filter.png)

In Overview, you can see `test status`*(passed/failed)*, `run time`, `test steps`, `failures`, `auto healed` and `time saved`. 

We also support videos for all our testcases, as you can see below. Rather than writing out a detailed explanation each time, we decided to show what really happens automatically with a video. We hope it helps make Unit Tests like this easier for you to read, write and understand!

![Filter](/img/overview.png)

You can generate a shareable url that only you have control. Wring allow you to generate a shareable url and share your test with your colleague and allow them to see the test, edit/add steps, run the simulator, and modify variables. 

It's a good idea to share your tests with colleagues. That way they can see what you were doing and make sure they don't make the same mistake again. You can also get away with leaving out all the details by sharing a test scenario with a detailed description, along with any bugs or steps that need to be fixed.

![Filter](/img/share.png)

You can share your shareable url in three options: 

- **Read only** - *You can just see all your changes but you aren't allowed to edit or add something.*
- **Edit Item properties** - *You can see all your changes and also you're allowed to edit them.*
- **Rerun this item** - *You can rerun this same test in your browser.*

![Filter](/img/share.gif)

Use the test script options to set your browser width, height and max wait time to customize your website tests.

![Adding a Test](/img/setting.png)

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

![Adding a Test](/img/advancedd.png)


