---
sidebar_position: 5
---

# Sessions

### Uploading Recorded Sessions to Wringr

After recording a user session using the "Recorder" in Chrome DevTools (learn more about how to do this [here](https://aichemydev.github.io/Wring_docs/docs/Google%20Recordings/googlerecorder)), you can upload the session to your project on the Wringr platform for further analysis and testing.

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

- Sauce Cucumber Run - This feature allows you to execute your Cucumber tests on the Sauce Labs platform directly from the Wringr interface. This integration streamlines the testing process, enabling you to run and manage your Cucumber test scenarios in a cloud-based environment with ease.

![session replay](/img/replay4.png)

- Steps - Wringr AI  allows you to access and review the detailed sequence of actions recorded during your test session. By clicking on this button, you can view each individual step, analyze the corresponding descriptions, and make any necessary adjustments to ensure the accuracy and completeness of your test cases.

![session replay](/img/replay5.png)

- Delete Session - The "Delete Session" button in the Wringr UI allows you to permanently remove an entire test session from the platform. This action will delete all associated data, including recorded steps, screenshots, and test results. Use this option carefully, as the deletion cannot be undone.

![session replay](/img/replay6.png)

- Add Fixture - Wringr AI allows you to insert predefined data or setups into your test session. Fixtures are useful for establishing consistent test environments, ensuring that your tests run under the same conditions each time. By using this feature, you can streamline test preparation and enhance the reliability of your results.

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
