---
sidebar_position: 6
---

# Convert gauge to cypress (via Live Events)

*How to run gauge tests?*

## Instructions (*Linux*): 

1. Navigate to where you have stored these Gauge tests examples by using cd, for example: cd ~/Github/gauge-examples
2. Make sure to do get `Taiko plugin`, check: https://www.npmjs.com/package/taiko-delay
3. npm install
4. npm test

and it will bring up a browser and looks like this: 

 ![Gauge](/img/taiko1.png)

 Then go to your account on Wring Platform, - in Live events tab, you will see your run (if you put pageviews snippet on your website/app)

  ![Gauge](/img/taiko2.png)

To run and convert it to cypress,-  please enable (Generate CSS selectors during run (slow, needed for Cypress export)) 

  ![Gauge](/img/taiko3.png)

Run is finished

  ![Gauge](/img/taiko4.png)

Inside this test `calendar.testgold.dev/ Chrome Canada file_0.wring`, go to Details/View/edit steps (look for cypress button on top right)

  ![Gauge](/img/taiko5.png)

Now you can run your cypress script (check [Examples/Cypress JS Examples](https://aichemydev.github.io/Wring_docs/docs/Examples/cypress) section to run cypress)


## Instructions(*for Windows*)

1. Open powershell
2. npm install -g @getgauge/cli
3. Navigate to where you have stored these Gauge tests examples by using cd, for example: cd ~/Github/gauge-examples
4. npm install
5. $env:TAIKO_PLUGIN='delay'
6. $env:TAIKO_DELAY_SECONDS=2
7. npm test

  ![Gauge](/img/taiko6.png)

and it will bring up a browser and looks like this: 

 ![Gauge](/img/taiko1.png)

Then go to your account on Wring Platform, - in Live events tab, you will see your run (if you put pageviews snippet on your website/app)

  ![Gauge](/img/taiko7.png)

To run and convert it to cypress,-  please enable (Generate CSS selectors during run (slow, needed for Cypress export)) 

  ![Gauge](/img/taiko3.png)

Run is finished

  ![Gauge](/img/taiko8.png)

Inside this test `calendar.testgold.dev/ Chrome North Macedonia file_0.wring`, go to Details/View/edit steps (look for cypress button on top right)

  ![Gauge](/img/taiko9.png)

Now you can run your cypress script (check [Examples/Cypress JS Examples](https://aichemydev.github.io/Wring_docs/docs/Examples/cypress) section to run cypress)



