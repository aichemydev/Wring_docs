---
sidebar_position: 3
---

# Integrations

Wring offers a variety of integrations and connectors for popular apps and platforms. This is where you can add new integrations and manage existing integrations.

## Overview

The integrations page shows available integrations as cards located at the top of the integrations page. Below it, the table displays all active integrations for this user. You can use this table to manage user integrations. Different actions are available for different integrations.

![Integrations](/img/Integrations.png)

## Get Started
### Github
The Wring integration with Github enables fast and easy reporting to speed up issue creation. When a test that has been run on the Wring platform, fails, you can be immediately notified in your teams Github. Wring will open an issue with details about the test as well as the logs from the test run. This helps you stay on top of any errors and keep track of the progress.

To setup a Github integration, click on the Github card on. This will bring up a modal asking for some info to get started.

Please provide the following information:

- Github repository name
- Github repository owner
- Github token


### Gitlab
The Wring Gitlab integration can be used to keep track of your test runs in
Gitlab. To set this up you will need to provide a few things:

- Gitlab Organization Name
    - There are a couple ways to get this. The organization name precedes the
      project name in the list of projects. You can also get the organization
      name by selecting the project you want to integrate with and look in the url. This should contain the organization the project belongs to.
- Gitlab Project Name
    - This is the name of the project you want to integrate with.
- Gitlab Access Token
    - This is the personal access token that you can create in Gitlab. This is
      required to create an issue in the project. Gitlab offers personal
      access tokens which are tied to a user or gives you the option to
      create a project access token. For more information, please visit the
      Gitlab documentation linked here:
      https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html

### Slack
The Wring Reporter Slack app keeps your team up to date with the status of your tests to a slack channel. Get started by selecting the Slack card on the integrations page. This will redirect you to slack where you will be prompted to accept permissions and select a slack channel to receive notifications to. Once you select the `Allow` button on Slack, you will be redirected back to the integrations page.

### Jenkins
Automate your tests with Jenkins while taking advantage of the advanced healing and intelligence offered by Wring by integrating Jenkins with the Wring Interceptor. To configure this, select your Jenkins job and add a new build step in the build environment.

``` bash
#!/bin/bash
git clone git@github.com:your_github_username/your_repo_name.git
cd /repo/
source .jenkins-secrets
export TG_ANALYZER=1
cd /repo/testlocation
wget https://vision.Wring.dev/interceptor/download/secured/selenium-webdriver-20.11.0.Wringz?walToken=${WAL_TOKEN} -O selenium-webdriver-20.11.0.Wringz
npm install selenium-webdriver-20.11.0.Wringz
# Run Tests Here
```


### CircleCI
Use the Wring Interceptor with your CircleCI builds! Getting Started with CircleCI is easy.
#### Creating a New Configuration
If you are starting from scratch, we have a couple templates to help you get started.
```yml title="config.yml"
# Use the latest 2.1 version of CircleCI pipeline process engine.
# See: https://circleci.com/docs/2.0/configuration-reference
version: 2.1

# Orbs are reusable packages of CircleCI configuration that you may share across projects, enabling you to create encapsulated, parameterized commands, jobs, and executors that can be used across multiple projects.
# See: https://circleci.com/docs/2.0/orb-intro/
orbs:
  # See the orb documentation here: https://circleci.com/developer/orbs/orb/circleci/python
  python: circleci/python@1.2
  browser-tools: circleci/browser-tools@1.2.3

# Define a job to be invoked later in a workflow.
# See: https://circleci.com/docs/2.0/configuration-reference/#jobs
jobs:
  build-and-test: # This is the name of the job, feel free to change it to better match what you're trying to do!
    # These next lines defines a Docker executors: https://circleci.com/docs/2.0/executor-types/
    # The executor is the environment in which the steps below will be executed - below will use a python 3.8 container
    # Change the version below to your required version of python
    docker:
      - image: cimg/python:3.8
    # Checkout the code as the first step.
    # CircleCI will report the results back to your VCS provider.
    steps:
      - checkout
      # This is where we install browsers which will be used later when running your tests.
      - browser-tools/install-browser-tools:
          chrome-version: 85.0.4183.102
          firefox-version: 80.0.1
      - run:
          command: |
            google-chrome --version
            firefox --version
          name: Check install
      # From the browser-tools orb, we can install the necessary drivers to run tests on a browser.
      # For more information on this orb, checkout this link: https://circleci.com/developer/orbs/orb/circleci/browser-tools
      - browser-tools/install-chrome
      - browser-tools/install-chromedriver

      # Now, we will configure the Wring interceptor. Make sure to add your TG_TOKEN to your project secrets.
      # For a full list of interceptor options check out the documentation: https://Wring.readthedocs.io/en/latest/externaluse.html
      - run:
          name: Download and Configure Wring Interceptor
          command: |
            wget https://Wringapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl
            pip install selenium-20.11.0-py2.py3-none-any.whl -U
            export TG_ANALYZER=1
            export TG_TOKEN=$TG_TOKEN
      - python/install-packages:
          pkg-manager: pip
          # app-dir: ~/project/package-directory/  # If your requirements.txt isn't in the root directory.
          # pip-dependency-file: test-requirements.txt  # if you have a different name for your requirements file, maybe one that combines your runtime and test requirements.
      - run:
          name: Run tests
          command: python reactbank_test_old.py

# Invoke jobs via workflows
# See: https://circleci.com/docs/2.0/configuration-reference/#workflows
workflows:
  sample: # This is the name of the workflow, feel free to change it to better match your workflow.
    # Inside the workflow, you define the jobs you want to run.
    jobs:
      - build-and-test
```

:::note

You will need to add a TG_TOKEN to your project secrets on CircleCI. For more information, see the documentation for CircleCI setup here: **[CircleCI Documentation](https://circleci.com/docs/2.0/env-vars/)**

:::



#### Adding Wring to your Existing Configurations
If you already have a config with CircleCI to run your Selenium Scripts, then the only thing you need to do is add a new run to configure the Wring Interceptor.

```yml title="config.yml"
- run:
    name: Download and Configure Wring Interceptor
    command: |
      wget https://Wringapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl
      pip install selenium-20.11.0-py2.py3-none-any.whl -U
      export TG_ANALYZER=1
      export TG_TOKEN=$TG_TOKEN
```

:::note

You will need to add a TG_TOKEN to your project secrets on CircleCI. For more information, see the documentation for CircleCI setup here: **[CircleCI Documentation](https://circleci.com/docs/2.0/env-vars/)**

:::

This will now use the Wring interceptor as the default selenium package. To learn more about using the interceptor, see the documentation at:

### Travis CI
Use the Wring Interceptor with Travis CI in a couple simple steps.

In this example, we setup the Wring Interceptor for Selenium Python.
```yml title=".travis.yml"
sudo: required
language: python
python:
  "3.8"
addons:
  chrome: stable

before_install:
- wget https://Wringapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl

before_script:
  - LATEST_CHROMEDRIVER_VERSION=`curl -s "https://chromedriver.storage.googleapis.com/LATEST_RELEASE"`
  - curl "https://chromedriver.storage.googleapis.com/${LATEST_CHROMEDRIVER_VERSION}/chromedriver_linux64.zip" -O
  - unzip chromedriver_linux64.zip -d ~/bin
  - export PATH=$PATH:$PWD/chromedriver

env:
  global:
  - export TG_ANALYZER=1

install:
  - pip install selenium-20.11.0-py2.py3-none-any.whl -U
  - pip install -r requirements.txt

script:
  python reactbank_test_old.py
```

:::note

You will need to add a TG_TOKEN to your project secrets on Travis CI. For more information, see the documentation provided by Travis CI here: **[Travis CI Documentation](https://docs.travis-ci.com/user/environment-variables/)**

:::

## Managing Your Integrations
When you add an integration, **this only applies to your user account**. This offers flexibility for others on your team to select different integrations or set them up specific to their use case.

You can manage your personal integrations which will be displayed in the integrations table on the integrations tab. Here, each integration be displayed along with a button to edit the integration. Each integration will have different fields that you can edit but they will all allow you to enable/disable the integration

:::warning

Changing the status of the integration here will apply to all tests regardless of test specific settings.

:::

Some integrations can be deleted via our UI. This will remove your data from our database but please note any access tokens you may have generated on other platforms such as Github or Gitlab will **need to be managed from those respective platforms**.

Other integrations such as Slack will need to be removed from those platforms.


## Scheduled runs

Wring allows you to schedule runs every time you want.

![Wring Dashboard](/img/scheduled.png)

To schedule a run, you have to fill all the fields, so it can be a proper scheduled run. You can run a scheduled run `once`,`daily`, `weekly`, `monthly` and `use crontab expression`

![Wring Dashboard](/img/run.png)

Schedule run provides two calendars `Simple` and `Advanced`

- **Simple** - Schedule one hour from your actual hour and it's available for three months.

To start a scheduled run with `Simple Calendar`, check the video below:

![Wring Dashboard](/img/Simple_Calendar.gif)

- **Advanced** - You can program start-end date and time by yourself.

To start a scheduled run with `Advanced Calendar`, check the video below:

![Wring Dashboard](/img/Adv_S.gif)

Here is how the Scheduled modal looks like:

![Wring Dashboard](/img/advanced.png)

After you add a scheduled run, you will see the screen below.

If the test is scheduled with `Simple calendar` :

![Integrations](/img/simplee.png)


If the test is scheduled with `Advanced calendar` :

![Integrations](/img/advancedTest.png)


When it runs in the process on Wring, it will look like this:

![Integrations](/img/schrun.png)

## Triggered runs

The Wring platform can execute test runs based on a trigger from an external
service. Currently, we support the following methods of triggers:

- GitHub: webhook trigger executed on a repository event (push)
- GitLab: webhook trigger executed on a repository event (push)
- manual: POST request trigger

### Adding a trigger

Add a trigger by navigating to the **Integration** tab and click on **Triggers**.

![trigger integrations](/img/triggers-1.png)

Click on the type of trigger you wish to set up, one of **GitHub**, **GitLab**,
or **POST request**. This brings up the following form:

![trigger setup form](/img/triggers-2.png)

Choose an existing previously uploaded Katalon XML, Selenium IDE, or Wring
Observer script that will be used to execute the test run when this trigger is
called. Set a name for the trigger, and an optional description. You may also
click on **Test run options** to see settings for the test run itself, including
tags and Wring test runner behavior options.

Click on the **Add webhook** button to add this new trigger and view important
information that will be needed by your trigger source.

![trigger execution info](/img/triggers-3.png)

The sections below contain instructions to add this trigger URL and secret for
GitHub, GitLab, and manual POST request.

### GitHub webhook

GitHub triggers are associated with repository events. You may add a new GitHub
trigger by navigating to the following URL in your repository settings:

```
https://github.com/{your github username}/{your github repository}/settings/hooks/new
```

Or click on the **Settings** tab in the top bar for your repository page, then
click on **Webhooks** in the left sidebar, then click on the **Add webhook**
button. On the subsequent page, fill in the **Trigger URL** and **Trigger
secret** form fields with the values from the Wring trigger setup page.

![github trigger repo setup](/img/triggers-4.png)

Click on **Add webhook**. GitHub will send a ping event to the Wring API to
confirm the webhook URL works correctly.

![github trigger test](/img/triggers-5.png)

To test the trigger execution, make a commit to your repository and push it to
Github. A webhook will be sent to the Wring API by GitHub, and a test run with
your chosen script and options will be queued and start executing immediately on
an available Wring runner. On GitHub's side, you can see recent webhook
deliveries and the response from the Wring API by clicking on the webhook and
then click on the **Recent Deliveries** tab.

![github trigger info](/img/triggers-6.png)

On Wring's side, you can see the executed run in the list of test runs with
appropriate tags marking it as a webhook triggered run.

![github trigger test run](/img/triggers-7.png)

### GitLab webhook

Click on **GitLab** on the Wring trigger setup page and fill out the form.

![gitlab trigger setup](/img/triggers-8.png)

GitLab triggers are also associated with repository events. You may add a new
GitLab trigger by navigating to the following URL in your repository settings:

```
https://gitlab.com/{your gitlab organization}/{your gitlab project repo}/-/hooks
```

Or click on **Settings** > **Webhooks** in the left sidebar on your repository
page. On the subsequent page, fill in the **Trigger URL** and **Trigger secret**
form fields with the values from the Wring trigger setup page.

![gitlab trigger repo setup](/img/triggers-9.png)

Click on **Add webhook**. You can test your webhook directly from the list of
webhooks:

![gitlab trigger test](/img/triggers-10.png)

If successful, you should see a banner alert similar to the one below:

![gitlab trigger success](/img/triggers-11.png)

On the Wring side, you can see the executed run with the appropriate run tags
marking it as a GitLab triggered test run.

![gitlab trigger test runs](/img/triggers-12.png)

### POST request

Click on **POST Request** on the Wring trigger setup page and fill out the form.

![POST request setup](/img/triggers-13.png)

Save the provided credentials and use these in any shell script with `cURL` or
an HTTP request library for your programming language.

![POST request credentials](/img/triggers-14.png)

The example below shows usage with `cURL` to execute the trigger and `jq` to
pretty-print the returned JSON response from the Wring API.

![POST request execute trigger](/img/triggers-15.png)

On the Wring side, you can see the executed run with the appropriate run tags
marking it as a manual POST request triggered run.

![POST request test run](/img/triggers-16.png)
