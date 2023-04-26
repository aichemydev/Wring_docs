---
sidebar_position: 3
---

# Capture Android Events

The `wringandroid` library for Android allows you to capture user interaction
events in your Android app. This library is provided as an Android AAR package,
which can be incorporated into your app and then configured to send events to
the Wring API. The Wring dashboard can then be used to visualize these events
and track users' journeys through your app with screenshots taken at the point
of event capture.

## Installing the library package

The `wringandroid` library is available from the Wring Maven repository at
https://repo.wring.dev. To install this library in your app, update your Android
project's root `build.gradle` file to include the Wring Maven repository:

```
repositories {
    ...
    maven {
        url 'https://repo.wring.dev/repository/maven-releases/'
    }
}
```

Then, add the dependency to your app module's `build.gradle` file's
`dependencies` block.

```
dependencies {
    ...
    implementation 'dev.wring:wringandroid:1.1.0'
}
```

In Android Studio, synchronize the Gradle project after editing these two files.
The `wringandroid` library will then be ready to use in your app project.

## Using the library package in Java apps

### API key and URLs

To connect the `wringandroid` library to the Wring API, you will need a project
token, as well as the URLs for the Wring event and screenshot ingestion
services. Setting these up as resources in your app or static constants in your
Android main activity source file is recommended. For example:

```java
package com.company.yourapp;

import android.app.Activity;

public class MainActivity extends Activity {

  private static final String WRING_EVENTS_URL = "https://wes.wring.dev";
  private static final String WRING_SCREENSHOTS_URL = "https://app.wring.dev/interceptor/pageviews";
  private static final String WRING_API_KEY = "phc_XXXXYYYYZZZZ";
  // ...
}
```

You may obtain the `WRING_API_KEY` from the Wring dashboard by setting up a new
Live Events project or reusing an existing one.

To create a new Live Events project dedicated to events from your Android app,
click on **Live Events** in the left sidebar, then Click on **Add new project**.
Fill in the form that appears. You will then receive an **API key**, which can
be used as the value of `WRING_API_KEY`.

To use an existing Live Events project, click on the **Project details** button
for the project in the list that appears after navigating to **Live Events** in
the Wring dashboard. In the dialog box that appears, copy the value of **API
KEY** and use it for the value of `WRING_API_KEY`.

### Initializing the library

Initialize the `wringandroid` library in your main `Activity` class or
`Application` class. This involves importing the `dev.wring.wringandroid`
package and then creating a singleton instance of the `WringAndroid` class. The
example below shows how this is done for an app using a `MainActivity` class.

```java
package com.company.yourapp;

import android.app.Activity;
import android.os.Bundle;

// import the class from the package
import dev.wring.wringandroid.WringAndroid;

public class MainActivity extends Activity {

  // variable used to hold the singleton instance
  WringAndroid wring;

  // required items to set up the WringAndroid singleton instance
  private static final String WRING_EVENTS_URL = "https://wes.wring.dev";
  private static final String WRING_SCREENSHOTS_URL = "https://app.wring.dev/interceptor/pageviews";
  private static final String WRING_API_KEY = "phc_XXXXYYYYZZZZ";

  protected void onCreate(Bundle savedInstanceState) {

    super.onCreate(savedInstanceState);
    setContentView(R.layout.main_activity);

    // set up the instance
    WringAndroid.Builder builder = new WringAndroid.Builder(
      this,
      WRING_API_KEY,
      WRING_EVENTS_URL,
      WRING_SCREENSHOTS_URL
    );
    WringAndroid.setSingletonInstance(builder.build());

    // ...

  }

}
```

`WringAndroid` now contains a singleton instance of the class, which can be
reused in other activity classes by importing
`dev.wring.wringandroid.WringAndroid` and using:

```
WringAndroid wring = WringAndroid.with(this);
```

where `this` refers to the current context (in this case, an Android
`Activity`). All event capture methods are made available from the `wring`
instance.

### Capturing events

To capture an event with an associated screenshot, use the
`WringAndroid.captureScr()` method in your interaction handler method. Make sure
the `WringAndroid` singleton has been made available in your source file first.

The `captureScr()` method takes the following arguments:

- String `eventName`: this describes the event that is being captured
- Activity `targetActivity`: the instance of the `Activity` that the action is
  being captured from
- View `targetView`: the instance of the `View` that the action is being
  captured from

To mask out sensitive information on the screenshot of the app view, for
example: SSNs, secrets, or PINs, call the `WringAndroid.captureScr()` method
with the following arguments:

- String `eventName`: this describes the event that is being captured
- Activity `targetActivity`: the instance of the `Activity` that the action is
  being captured from
- View `targetView`: the instance of the `View` that the action is being
  captured from
- `censorElementIds`: Array of integer view IDs to mask out on the screenshot
  (e.g. an array of `[R.id.a_textview_id, R.id.another_textview_id]`)

The example below shows how to capture a button click:

```java
package com.company.yourapp;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.app.AlertDialog;

// import the class from the package
import dev.wring.wringandroid.WringAndroid;

public class ButtonClickActivity extends Activity {

  WringAndroid wring;

  protected void onCreate(Bundle savedInstanceState) {

    // get the already instantiated singleton class
    wring = WringAndroid.with(this);

    // set up the activity UI from the resources
    super.onCreate(savedInstanceState);
    setContentView(R.layout.button_click_activity);

    Button targetButton = (Button) findViewById(R.id.targetButton);

    // set up the handler for the click action
    targetButton.setOnClickListener(new View.OnClickListener() {

      @Override
      public void onClick(View view) {

        // capture the click event with a screenshot
        wring.captureScr("target button clicked", ButtonClickActivity.this, view);

        // handle the button click itself
        handleTargetButtonClicked(view);
      }
    });

    // the click handler -- this shows an alert dialog when the button is clicked
    private void handleTargetButtonClicked(View view) {
      final AlertDialog alertDialog = new AlertDialog.Builder(c).create();
      alertDialog.setTitle("Clicked the button!");
      alertDialog.setMessage("Clicked the button!");
      alertDialog.setButton(AlertDialog.BUTTON_POSITIVE, "OK", new DialogInterface.OnClickListener() {
        public void onClick(DialogInterface dialog, int which) {
          alertDialog.hide();
        }
      });
      alertDialog.show();
    }

  }

}
```

## Viewing screenshots

We recommend making a new **Live Events** project specifically for mobile
events. Once events have been captured using the API key for this project, they
may be viewed in the Wring dashboard by navigating to **Live Events**, then
clicking on the project in the list that appears.

The dashboard will then show a list of mobile sessions that have been captured.

![list of mobile sessions](/img/list-of-mobile-sessions.png)

Click on a session in this list to bring up the screenshot viewer.

![screenshot events viewer](/img/screenshot-events-viewer.png)


## Using the library package in Kotlin apps

:::info
Instructions for using the `wringandroid` library with Kotlin  will be added shortly...
:::

## Examples

### Java

:::info
An example Java app will be added shortly...
:::

### Kotlin

:::info
An example Kotlin app will be added shortly...
:::
