---
sidebar_position: 1
---

# Getting Started

We support direct calls to our healing API from Selenium tests running outside of our own service. For this purpose, we have released Selenium packages for Java, Javascript, and Python that interface with our API and obtain healed XPaths or CSS selectors for web automation tests that run in your own environment. These Wring Interceptor packages can be used in place of the usual Selenium packages to take advantage of our API. These packages are available on the `Installation Page`.

:::info 

The installation page requires an activated account. Account activation can take up to 24 hours. If your account has not been activated within 24 hours please contact support@Wring.dev
:::


## Using Interceptor Packages
A single environment variable is required for the Interceptor packages to interface with our API. Set the `Wring_TOKEN` as directed on the download page, then install one of the Interceptor packages.

Run your Selenium tests as normal, making sure the Wring_TOKEN environment variable is set. The Interceptor will log its actions and the results of the XPath/CSS selector healing process to the terminal console. It will also provide a results URL where you can browse the results of each encounter and the outcomes of the healing process.

## Selenium Setup
### Java
Include this Selenium JAR in the Java classpath when you run your test instead of the normal Selenium JAR. This JAR contains our Selenium Interceptor, as well as its dependencies.

### Javascript
Download the Interceptor package and install it using NPM
```bash
npm install <interceptor-package-name>.tgz
```
This will override your usual Selenium NPM dependency automatically.

### Python
Download the interceptor package from the installation page. Then use pip to install the interceptor. This will overwrite any selenium installations you have installed previously. If you want to install the interceptor alongside existing selenium installations, you can install the interceptor in a `virtualenv`.
```bash
pip install <interceptor-package-name>.whl -U
```
Please make sure that your python and pip paths are properly configured. You can check those with `which python` and `which pip` in your terminal.

## Cypress Setup
Download the Cypress Interceptor Package and install it using NPM.
```bash
npm install @aichemy/Wring-cypress-plugin
```
For Cypress settings visit this link: https://www.npmjs.com/package/@aichemy/Wring-cypress-plugin

