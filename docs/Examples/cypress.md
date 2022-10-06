---
sidebar_position: 5
---

# Cypress JS Examples

#### *How to run Cypress JS*

Instructions for Windows: 
1. Open PowerShell - enable powershell script running in windows. 
1. Do `npm install` to install Cypress
2. Install our plugin - `npm install @aichemy/wring-cypress-plugin`
3. Copy/Paste `TG_TOKEN` from [Installation page](https://app.wring.dev/details/installation)
4. Then `$env:CYPRESS_TG_ENABLED='true'`
5. `./node_modules/.bin/cypress open`

![Cypress](/img/installation6.png)

6. Cypress will open, then you can click on a (existing)test it finds.

![Cypress](/img/i6.png)

This is how test looks like running:

![Cypress](/img/i7.png)


Instructions for MacOS/Linux: 
1. Open shell 
1. Do `npm install` to install Cypress
2. Install our plugin - `npm install @aichemy/wring-cypress-plugin`
3. Copy/Paste `TG_TOKEN` from [Installation page](https://app.wring.dev/details/installation)
4. then `export CYPRESS_TG_ENABLED=true`
5. `./node_modules/.bin/cypress open`
6. Cypress will open, then you can click on a (existing) test it finds.

Check video: 

import ReactPlayer from 'react-player'

<ReactPlayer playing controls url='https://youtu.be/xgbLFF4YMXA' />