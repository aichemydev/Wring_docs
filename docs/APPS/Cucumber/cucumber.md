---
sidebar_position: 1
---

# Guidelines for Using Cucumber for UI Testing


In the fast-paced world of software development, ensuring that user interfaces function correctly across various platforms and devices is crucial. This is where automated UI testing comes into play, providing a reliable and efficient way to validate application behavior. Among the many tools available, Playwright and Cucumber stand out for their robustness and flexibility. When integrated with the Wringr platform, these tools offer a powerful solution for comprehensive UI testing.

One of the significant advantages of using the Wringr platform is its capability to generate Cucumber feature files. This feature simplifies the test creation process, enabling teams to quickly define their test scenarios using the Gherkin syntax. 

All you need is Glean to record sessions and then from those sessions, you will be able to generate Cucumber files by default. 

![Cucumber](/img/cucumber-1.png)

On the right side, you'll see several buttons. Click on the "Steps" button to view all the steps from the session.

![Cucumber](/img/cucumber-2.png)

It will display a comprehensive list of each step in the session, providing an organized overview of the workflow.

![Cucumber](/img/cucumber-3.png)

On the top right, you will see a download button. Clicking this will open a list of possible download options. Check the third option, which is the "Cucumber file" button.

![Cucumber](/img/cucumber-4.png)

Once the zip file is downloaded, you'll need to extract its contents. After extraction, navigate to the extracted directory using your terminal or command prompt. Then, follow these steps:

Install Dependencies: Run the following command to install dependencies:

```
npm install
```

Run Tests: Once dependencies are installed, execute the following command to run tests:

```
npm test
```

By following these steps in your terminal or command prompt, you'll ensure that the downloaded Cucumber files are properly set up, dependencies are installed, and tests are executed to validate the functionality of your application.

![Cucumber](/img/cucumber-5.png)

and this format provides a summary of executed scenarios, their steps, and the overall test duration.

![Cucumber](/img/cucumber-6.png)


With Wringr, users can easily create Cucumber feature files within the platform, defining the behavior of the application in a clear and concise manner. These feature files can then be executed using Cucumber's test runner, which will validate that the application is functioning as expected. By seamlessly integrating the testing process into the generating platform, developers can quickly identify and fix any issues before they escalate into larger problems.

By creating and running Cucumber files within the platform, development teams can easily define the behavior of their applications and ensure that they meet the desired requirements. This seamless integration promotes collaboration, transparency, and efficiency, ultimately leading to a higher quality end product.