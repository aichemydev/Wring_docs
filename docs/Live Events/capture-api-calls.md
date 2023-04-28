---
sidebar_position: 6
---

import SnippetWidget from '@site/src/components/SnippetWidget';

# Capture API Calls

The Wring API call interceptor can be used to intercept API calls made during
the operation of your web app. After these calls have been captured, you can use
the Wring Live Events dashboard to analyze them.

## Installing the JS snippet

<SnippetWidget />

Replace the `phc_XXXX` item above with the API key from a Wring Live Events
project that is already being used to capture user actions on your web app, for
example:

![Live events API key](/img/pag6.png)

In this way, you will be able to analyze API calls and user actions at the same
time.

After the interceptor is initialized as described above, it will begin capturing
API calls from your web app and will send these to the Wring API, where they are
securely stored. You can monitor this operation using your browser's dev
console, for example:

![Browser console showing API call interceptor working](/img/apicall-interceptor-browser-console.png)

## Viewing API calls in the Wring dashboard

:::info
This section is under construction. More detailed documentation will be added shortly...
:::
