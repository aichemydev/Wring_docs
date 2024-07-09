---
sidebar_position: 3
---

# Tests which support API + UI

In Wringr, for tests that support APIs in the UI, you can generate feature files and code.

The outcome is this: 

```
Feature: Playwright site
Scenario: Session
Given I navigate to the page "" 
When I make a GET call to "https://www.google.com/search?q=roche", after I receive the response, I verify that the response status is 200
```

All you have to do is follow the steps: 

1. Go to the session and then edit button

![Cucumber](/img/cucumber-14.png)

2. In `Action to perform`, choose `Playwright API method` and type your request

```
Make a request to https://www.google.com/search?q=sap&oq=sa&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhIIARAuGEMYxwEY0QMYgAQYigUyBggCEEUYOTIGCAMQIxgnMhgIBBAuGEMYgwEYxwEYsQMY0QMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDAgIEAAYQxiABBiKBTISCAkQLhhDGMcBGNEDGIAEGIoF0gEJMzIxOGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8 and assert that the page load returns a status of 200
```
![Cucumber](/img/cucumber-15.png)

3. Download cucumber script file and extract it. 

4. Do `npm i` and `npm test` 

The results: 

![Cucumber](/img/cucumber-16.png)

![Cucumber](/img/cucumber-17.png)

![Cucumber](/img/cucumber-18.png)





