---
sidebar_position: 4
---

# Side file - Expander Example

#### *How to run Expander for side files?*

Instructions:

1. Record with ***TG Smart Observer***  or upload a saved *.side* file.
2. Sent from Observer or add *.side* file in [https://dev.wring.dev/](https://dev.wring.dev/)

This is how it looks in browser for [Calendar](https://calendar.testgold.dev/):

![Side](/img/side1.png)

3. Go to Expander/Setup and you will see all the steps

![Side](/img/simulator.png)

4. . Edit all `select` actions – Explore from No to Yes ( `Explore: Yes`)

![Side](/img/simulator1.png)

5. After the second `select` action, add manually `Save` and `verify_contains` steps from `Add` button.

![Side](/img/simulator2.png)

6. Add these steps manually:

-  `SAVE` "//*[@id="__next"]/div/div[1]/div/div/div[2]/div/div[2]/div/span" into "duration"
-  `SAVE` "//a[contains(string(), "Confirm")]/preceding-sibling::a/div[1]" into "timeslot"
-  `VERIFY_CONTAINS` css selector "div.af-confirm" - ${timeslot} + ${duration}

![Side](/img/simulator3.png)

7. After adding these steps, Expander steps will look like this:

![Side](/img/simulator4.png)

8. Now you're ready to run our agents. You have `Run the Expander` button in top-right.
Then, you can start running one of our agents.

 - Randomize
 - Sequential
 - Exhaustive
 - Permutation

![Side](/img/simulator5.png)

9. In Expander/Runs, you will see agent runs.

![Side](/img/simulator6.png)

10. Here you will check if agents found any bugs(try permutation), Go to Episodes. Here you see that there are two runs, and in one of them has found a bug.

![Side](/img/sim.png)

11. Check logs to see the bug. See below:

![Side](/img/sim1.png)

12. And you can also see screenshots and details for each step.

![Side](/img/sim2.png)


Check below:

import ReactPlayer from 'react-player'

<ReactPlayer playing controls url='https://youtu.be/CkdJrQ0LWmY' />
