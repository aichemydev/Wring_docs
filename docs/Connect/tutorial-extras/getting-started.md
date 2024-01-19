---
sidebar_position: 1
---

# Getting Started

We support direct calls to our healing API from Selenium and Cypress tests
running outside of our own service. For this purpose, we have released Selenium
packages for Java, Javascript, and Python, as well as a Cypress plugin that all
interface with our API and obtain healed XPaths or CSS selectors for web
automation tests that run in your own environment. For Selenium, these Wring
Interceptor packages can be used in place of the usual Selenium packages to take
advantage of our API. For Cypress, the plugin can be installed from NPM and
configured to take advantage of our API.

Instructions for installing these packages are available on the `Installation
Page`.

:::info

The installation page requires an activated account. Account activation can take
up to 24 hours. If your account has not been activated within 24 hours please
contact <team@wring.dev>

:::


## Using Interceptor Packages

A single environment variable is required for the Interceptor packages to
interface with our API. Set the `TG_TOKEN` as directed on the Installation page,
then install one of the Interceptor packages.

Run your Selenium or Cypress tests as normal, making sure the `TG_TOKEN`
(`CYPRESS_TG_TOKEN` for Cypress) environment variable is set. The Interceptor
will log its actions and the results of the XPath/CSS selector healing process
to the terminal console. It will also provide a results URL where you can browse
the results of each encounter and the outcomes of the healing process.

## Selenium Setup

### Java

Include the downloaded Selenium JAR in the Java classpath when you run your test
instead of the normal Selenium JAR. This JAR contains our Selenium Interceptor,
as well as its dependencies.

### Javascript

Download the Interceptor package and install it using NPM

```bash
npm install <interceptor-package-name>.tgz
```

This will override your usual Selenium NPM dependency automatically.

### Python

Download the interceptor package from the installation page. Then use pip to
install the interceptor. This will overwrite any selenium installations you have
installed previously. If you want to install the interceptor alongside existing
selenium installations, you can install the interceptor in a `virtualenv`.

```bash
pip install <interceptor-package-name>.whl -U --force-reinstall
```

Please make sure that your python and pip paths are properly configured. You can
check those with `which python` and `which pip` in your terminal.

For Live-Events, you need to have the installation above, nothing more.

## Cypress Setup

Download the Cypress Interceptor Package and install it using NPM.

```bash
npm install @aichemy/wring-cypress-plugin
```

For Cypress settings visit this link:
https://www.npmjs.com/package/@aichemy/wring-cypress-plugin

To create Live Events, please set ` “commandWaitSeconds”: 1 ` on cypress.json.

```yml title="cypress.json"
{
  “viewportHeight”: 1000,
  “viewportWidth”: 1280,
  “retries”: {
    “runMode”: 0,
    “openMode”: 0
  },
  “defaultCommandTimeout”: 30000,
  “wring”: {
    “enabled”: true,
    “serverTimeout”: 180.0,
    “handleFailure”: “exception”,
    “filterEnabled”: true,
    “filterDisplayed”: true,
    “neighborMaxDist”: 100.0,
    “fastHeal”: false,
    “takeScreenshots”: false,
    “imageComparison”: false,
    “allSuggestEnabled”: false,
    “commandWaitSeconds”: 1
  }
}
```

Then, you can have/generate live events for your app.