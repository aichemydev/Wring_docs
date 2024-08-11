---
sidebar_position: 2
---

# Playwright

The Wringr platform is a versatile tool that allows users to create and manage UI tests for their projectlications. One of the key features of Wringr is the ability to use Playwright, a popular open-source testing library, to automate interactions with the user interface.

In addition to organizing tests effectively, it is also crucial to consider the scope and coverage of your tests when using Playwright in the Wringr platform. It is recommended to create a comprehensive test suite that covers all critical functionalities of the projectlication, including user authentication, form submissions, and error handling. By testing a wide range of scenarios, users can ensure that their projectlication is robust and reliable in various situations.

## How to generate playwright from Wringr platform? 

Now that we know how to record a session, simply navigate to the download button and select the option for Playwright.

![Playwright](/img/playwright-1.png)

1. Before proceeding, create a folder and then

```
npm i
```
and 
```
npx install playwright
```
2. Next, within the folder, locate the "tests" directory and place the downloaded test files there.

![Playwright](/img/playwright-2.png)

3. Now you can do `npx playwright test` to run all the tests or `npx playwright test name_of_test.spec.js`

![Playwright](/img/playwright-3.png)

4. Then `npx playwright show-report`

![Playwright](/img/playwright-4.png)

or

5. If you do `npx playwright test name_of_test.spec.js --ui`, you will see it loading step by step

![Playwright](/img/playwright-5.png)
