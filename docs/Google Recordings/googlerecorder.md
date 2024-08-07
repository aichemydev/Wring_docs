---
sidebar_position: 1
---

# Wringr AI with Google Recorder

Using the "Recorder" in Chrome DevTools can be an efficient way to automate and document your UX testing. This tool allows you to record user interactions with your web application and replay them to verify functionality or identify issues. Here's a step-by-step guide on how to use the Recorder:

### 1. Launch Chrome
1. Open Google Chrome.
2. Navigate to the web application you want to test.

### 2. Open DevTools
1. Right-click on the page and select **"Inspect."**
2. Alternatively, press `Ctrl+Shift+I` (for Windows) or `Cmd+Opt+I` (for Mac) to open DevTools.

### 3. Access the Recorder Tool
1. In the DevTools panel, find the **"Recorder"** tab.
2. If you don't see the **"Recorder"** tab, click on the three vertical dots in the top right corner of the DevTools panel, select **"More tools,"** and then choose **"Recorder."**

![Recorder](/img/recorder1.png)

### 4. Start Recording

1. **Click on the "Start recording" button**:
   - This button is indicated by the red circle in the screenshot.

2. **Name Your Recording**:
   - A dialog box will appear where you can enter a name for your recording. This helps in organizing and identifying your test sessions later.
   - Enter a descriptive name in the "Recording Name" field (e.g., "User Login Test" or "Add to Cart Test").

3. **Configure Selector Attributes (Optional)**:
   - You can specify custom selector attributes if needed by entering them in the "Selector Attribute" field.
   - By default, common selector types such as CSS, ARIA, Text, XPath, and Pierce are selected for recording. You can adjust these based on your requirements.

![Recorder](/img/recorder3.png)

### 5. Begin Interaction Recording

1. **Start Interaction Recording**:
   - After naming your recording and configuring any optional settings, start interacting with your web application.

2. **Perform Actions**:
   - Perform the actions you want to test, such as clicking buttons, entering text into fields, or navigating through the site. The Recorder tool will capture these interactions.

![Recorder](/img/recorder4.png)

### 6. Stop Recording

1. **Stop Recording**:
   - Once you have completed the necessary interactions, click the **"Stop recording"** button.

![Recorder](/img/recorder5.png)

### 7. Exporting the Recording

#### Export
1. To document or share the recorded session, you can export it.
2. Click on the **"Export"** button in the DevTools Recorder panel.
3. Choose the desired export format, such as JSON, Puppeteer, or other supported formats.

![Recorder](/img/recorder7.png)

### 8. Integrating with Wringr AI

Once the recording is complete, you can seamlessly integrate it into Wringr AI for further analysis and debugging.








