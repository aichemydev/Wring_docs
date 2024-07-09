---
sidebar_position: 2
---

# Wringr - Data Driven Tests

Wringr is a versatile and powerful platform that allows organizations to easily create and run data-driven tests. By offering a wide range of features and capabilities, Wringr empowers organizations to conduct tests with precision and accuracy, leading to more reliable results.

Example generated feature file:
```
Feature: Playwright site
Scenario Outline: Session
Given I navigate to the page "https:\/\/www.google.com" 
When I enter "<value_2>" into the element "textarea[title='Search']; [role='combobox']; textarea[name='q']; textarea[id='APjFqb']; [aria-label='Search']; xpath=//textarea[contains(@role, 'combobox')]; xpath=//textarea[@title='Search']; xpath=//textarea[@id='APjFqb']; xpath=//textarea[@name='q']; xpath=//textarea[@aria-label='Search']; xpath=None; xpath=/html/body[1]/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/textarea[1]"
When I click on the element "text='SAP'" "text='SAP'; xpath=//em[contains(text(), 'SAP')]; xpath=None; xpath=/html/body[1]/div[5]/div[1]/div[13]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]/em[1]"
Then I should see the text "<value_to_verify>"
Examples:
| value_2   | value_to_verify   |
| Sap23\n     | Sap               |
|  sap24\n    | Sap               |
|  sap25\n    | Sap               |
```

How to get this? Follow the steps below: 

1. On the Wring Platform, navigate to the project sessions.
2. Edit the project and add a tag there. 

![Cucumber](/img/cucumber-7.png)

3. Go to Steps and add the fixture 

![Cucumber](/img/cucumber-8.png)

4. Now go to steps and find verify step and add values 

![Cucumber](/img/cucumber-9.png)

5. Download the Cucumber File dhe extract it. 

![Cucumber](/img/cucumber-10.png)

6. If you check features in cucub=mber file, you will see the details there 

![Cucumber](/img/cucumber-11.png)

7. Now go to terminal and do `npm i` then `npm test`.

![Cucumber](/img/cucumber-12.png)

and 

![Cucumber](/img/cucumber-13.png)
