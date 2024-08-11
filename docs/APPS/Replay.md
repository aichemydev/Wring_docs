---
sidebar_position: 6
---

# User Sessions

### Uploading Recorded Sessions to Wringr

After recording a user session using the "Recorder" in Chrome DevTools (learn more about how to do this [here]([https://aichemydev.github.io/Wring_docs/docs/APPS/googlerecorder]), you can upload the session to your project on the Wringr platform for further analysis and testing.

#### Steps to Upload a Session:
1. **Navigate to Your Project:**
   - Once you're logged into Wringr, go to the "Projects" section and select the project to which you want to upload your session. This will take you to the project’s dashboard, where you can manage all related sessions.

2. **Go to the "Sessions" Tab:**
   - In your project’s interface, click on the "Sessions" tab. This section provides an overview of all recorded sessions associated with the project. 

3. **Upload the Recorded Session:**
   - Click on the "Upload" button located on the right side of the screen. A file dialog will appear, allowing you to select and upload your recorded session (typically in JSON format).

4. **Review the Uploaded Sessions:**
   - After uploading, the session will appear in the list as shown in the screenshot. The list includes details such as the session name (e.g., `fokoui nopcommerce.json`), the creation date, and the number of steps involved in the session.
   - You can perform various actions on each session, such as running tests, editing session details, deleting sessions, or tagging them for easier categorization.

This process allows you to integrate real user interactions into your Wringr project, enabling comprehensive analysis and automated testing based on actual user behavior.

 ![session replay](/img/replay2.png)

Now you can review the steps, descriptions, and screenshots, and even extract them for use in different integrations.

![session replay](/img/replay3.png)

### Sauce Cucumber Run

The **Sauce Cucumber Run** feature allows you to execute your Cucumber tests on the Sauce Labs platform directly from the Wringr interface. This seamless integration simplifies your testing process by enabling you to run and manage your Cucumber test scenarios in a cloud-based environment with ease.

#### Steps to Use Sauce Cucumber Run:
1. **Run Name:**  
   - Enter a unique name for your test run in the "Run name" field. This helps in organizing and identifying different test executions.

2. **Select Account:**  
   - From the "Account Sauce labs" dropdown, select the Sauce Labs account you want to use for this test run. This ensures that the tests are executed under the correct account with the appropriate settings.

3. **Initiate the Test Run:**  
   - Once you've entered the necessary information, click the "Run" button to start the test execution on Sauce Labs.

This feature integrates the powerful capabilities of Sauce Labs with Wringr, providing a streamlined solution for running and managing Cucumber tests in a scalable and efficient manner.

![session replay](/img/replay4.png)

## Steps

Wringr AI enables you to access and review the detailed sequence of actions captured during your test session. By navigating to this section, you can examine each recorded step, review the associated descriptions, and make any necessary adjustments to refine and ensure the accuracy of your test cases.

![session replay](/img/replay5.png)

### Delete Session

The "Delete Session" feature in Wringr AI empowers you to permanently remove an entire test session from the platform. By using this option, all associated data—including recorded steps, screenshots, and test results—will be permanently deleted. Please proceed with caution, as this action is irreversible and cannot be undone.

![session replay](/img/replay6.png)

### Add Fixture

Wringr AI enables you to insert predefined data or setups into your test session. Fixtures are valuable for establishing consistent test environments, ensuring that your tests run under the same conditions each time. By leveraging this feature, you can streamline test preparation and enhance the reliability of your results.

 ![session replay](/img/replay7.png)

In the Steps section, you will find detailed information about each recorded step in your test session. In the top right corner, you will see two buttons:

 ![session replay](/img/replay8.png)

1. Update Screenshots: This button allows you to refresh or replace the screenshots associated with each step, ensuring they accurately reflect the current state of the UI.

2. Download: This button allows you to convert the current test session into different formats, such as Wringr files, SenseTalk scripts, or Cucumber scenarios, making it easy to integrate with other testing frameworks and tools.

 ![session replay](/img/replay9.png)

Additionally, you can:

- Edit Steps: Modify existing steps to adjust descriptions or actions.
- Add Steps: Insert new steps into the test session to enhance coverage.
- Delete Steps: Remove unnecessary or incorrect steps to streamline your test case.
