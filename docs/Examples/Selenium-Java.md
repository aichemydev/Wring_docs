---
sidebar_position: 3
---

# Selenium Java Examples

Java Selenium testing provides thorough and functioning test cases that can test every aspect of your application. The TestGold service generates robust selectors, heals broken selectors, and helps maintains your Java Selenium tests.

- Run your tests using our enhanced Selenium, transparently replacing normal Selenium.
- Wring learns from a previously working example of your test run on your webapp.
- Make code changes to your webapp; this may break the selectors you were previously using.
- Run your tests again using our enhanced Selenium. Selectors that were broken will be healed and the test run will complete as expected.

#### *How to run Selenium Java?*

Instructions for Windows:

1. Make sure Java and Maven are installed.

First, you will need a JDK and Maven. We recommend [Adoptium's Temurin distribution.](https://adoptium.net)

- Download and install the JDK .msi file. Make sure that the `Set JAVA_HOME` option is checked when you install the package.
- Download the binary distribution of Maven from the Maven website.
- Unzip this and copy the maven-3.xx-bin folder to a place on your C: drive (we recommend using a directory in C:\Users\your-username.).Make sure that the `Set MAVEN_HOME` option is checked when you install the package.

2. Download Java Jar Package and make sure it is present in the expected folder

Now you're ready to run Java Selenium examples.

1. Open Powershell
2. Navigate to where you have stored these Java examples by using cd, for example: `cd ~/Github/selenium-java-examples`
3. Change to the reactbank directory `cd reactbank`
4. Make sure Maven validates the current package installs: 

  4.1. `mvn clean` 

  4.2. `mvn validate`
5. Copy/Paste `TG_TOKEN` from [Installation page](https://app.wring.dev/details/installation)
6. If you run our public [Java example\( https://github.com/aichemydev/selenium-java-examples), run the two examples provided as PowerShell ps1 files. 

  6.1. `./test_original_app.ps1`

  6.2 `./test_modified_app.ps1`

:::note
`test_original_app.ps1` contains:

- $env:REACTBANK_LANDING_URL='https://demo1.testgold.dev'
- mvn install

`test_modified_app.ps1` contains:

- $env:REACTBANK_LANDING_URL='https://demo2.testgold.dev'
- mvn install
:::

![Pageview](/img/installation3.png)




Instructions for MacOS/Linux:

1. Make sure Java and Maven are installed.

We recommend using [SDKman](https://sdkman.io) to install Java and Maven. Install the SDKMan CLI:

``` curl -s "https://get.sdkman.io" | bash ```

2. Restart your shell and then obtain Java and Maven.

```sdk install java```

```sdk install maven```

3. Download Java Jar Package and make sure it is present in the expected folder


Now you're ready to run Java Selenium examples.

1. Open shell
2. Navigate to where you have stored these Java examples by using cd, for example: `cd ~/Github/selenium-java-examples`
3. Change to the reactbank directory `cd reactbank`
4. Make sure Maven validates the current package installs: 

  4.1. `mvn clean` 

  4.2. `mvn validate`
5. Copy/Paste `TG_TOKEN` from [Installation page](https://app.wring.dev/details/installation)
6. If you run our public [Java example\( https://github.com/aichemydev/selenium-java-examples), run the two examples provided as PowerShell ps1 files. 

  6.1. `./test_original_app.sh`

  6.2 `./test_modified_app.sh`

:::note
`test_original_app.sh` contains:

- export REACTBANK_LANDING_URL='https://demo1.testgold.dev'
- mvn install

`test_modified_app.sh` contains:

- export REACTBANK_LANDING_URL='https://demo2.testgold.dev'
- mvn install
:::

![Pageview](/img/installation4.png)


Check [Selenium Java example](https://github.com/aichemydev/selenium-java-examples) below :

import ReactPlayer from 'react-player'

<ReactPlayer playing controls url='https://youtu.be/a7HY5rIZx-I' />