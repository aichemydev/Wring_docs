---
sidebar_position: 4
---

# Appmap

"Appmap" serves as a utility that empowers the visualization and analysis of critical user action flows within a web application. This tool facilitates the detailed examination of transitions between web pages and user actions within a singular page. The representation of web page transitions takes the form of a directed graph, wherein nodes depict distinct web pages accompanied by screenshots, and edges symbolize user actions. This graphical representation provides a comprehensive overview, enabling a thorough analysis of the intricate interactions and user journeys within the web application.

 It allows for the analysis of transitions between web pages and user actions within a single page. The map of web page transitions is displayed as a directed graph, where nodes represent different web pages (with screenshots) and edges represent user actions.

 ![appmap](/img/appmapp.png)

To update the appmap with the latest sessions and changes, you can simply click the refresh button. This action triggers the system to fetch and incorporate the most recent data, ensuring that the appmap accurately reflects the current state of the web application based on the latest user sessions. This streamlined process allows users to stay up-to-date with the evolving structure and interactions within the application.

 ![appmap](/img/appmap-1.png)

Wring offers an alternative, user-friendly view in the appmap that provides a comprehensive look at snapshots and their connections. This view is designed to enhance the visual experience, making it easier for users to understand the relationships between different snapshots within the web application.

 ![appmap](/img/appmap-2.png)

 The buttons in the top right corner of an interface often serve as quick-access controls or options

 ![appmap](/img/appmap-3.png)

- 1. If you have access to appmap and are looking for specific information, please check "Dataview" button 

 ![appmap](/img/appmap-4.png)

- 2. Restore Button: Users might have the option to click a "restore" button, which would prompt them to choose a specific version or revert the appmap .

- 3. Save as image - Wring provides a feature to export or save the appmap as an image:

- 4. Zoom - Users can increase the magnification level to view details more closely.
- 5. Zoom/Reset - It will return the view to its default or original magnification level.

This approach provides a chronological or step-by-step representation of user actions, making it easier to analyze and understand the flow of the application. It's a valuable feature for visualizing user journeys, identifying potential bottlenecks, and gaining insights into how users navigate through different pages or elements.

 ![appmap](/img/appmap-5.png)

 ![appmap](/img/appmap-6.png)

We have a visual representation of the appmap in a sequential order with individual snapshots. Clicking on each snapshot allows you to trace the journey or road through the appmap, offering a detailed view of how interactions unfold within your web application.

 ![appmap](/img/appmap-7.png)




## Key Flows

Key flows is a tool that allows to find the best test coverage among all tests generated from apps. By default, it groups tests that cover at least 20% of the most frequent webpage elements. Rel Cov % means relative coverage percentage and it shows the coverage of a test against other tests in the list.

It uses a greedy algorithm and allows you to create a list that covers all tests, as well as generate several other metrics such as Rel Cov %.

To execute a Key Flows analysis, access the dropdown menu situated on your left and choose a specific Key Flow from the list. This action will initiate the Key Flows tool, allowing you to evaluate and optimize test coverage based on the defined criteria. By selecting a Key Flow from the dropdown, you streamline the process of running the analysis, enabling efficient exploration and prioritization of essential test scenarios within the Wring platform.

 ![Key Flow](/img/key-flow.png)

and it looks like this:

 ![Key Flow](/img/key-flow-1.png)

The flexibility of Wring extends to the capability of incorporating a Key Flow directly into your Testsuite and initiating its execution. This feature allows you to seamlessly integrate the optimized test scenarios identified by the Key Flows analysis into your broader testing workflow. By adding a Key Flow to your Testsuite and running it, you ensure a comprehensive and efficient approach to test coverage within the Wring platform.

 ![Key Flow](/img/key-flow-2.png)

Another notable feature in Wring is the option to download the DAI (Deep Autoencoder for Images) model specific to a Key Flow. This functionality provides users with the ability to obtain and utilize the DAI model associated with a particular Key Flow. The DAI model, being a deep autoencoder for images, is a crucial component for understanding and analyzing visual elements within the identified Key Flow. This download option enhances your capabilities in leveraging and integrating machine learning models for more sophisticated and insightful testing processes within the Wring platform.

 ![Key Flow](/img/key-flow-3.png)

