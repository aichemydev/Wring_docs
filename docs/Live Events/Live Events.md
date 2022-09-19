---
sidebar_position: 1
---

### Pageviews

Live Events or as we call it - "Pageviews" is a tool that allows you to record user actions on a website and generate a test case from these actions. Also, with Pageviews, you can see most common paths how users moves from one webpage to another that allows to improve website usability and to find and fix critical bugs.

#### How to use Pageviews?

It's easy, all you have to do is go to a browser (Google, Microsoft Edge, Opera...etc) and open the page you want to record. 
Like this: 


import ReactPlayer from 'react-player'

<ReactPlayer width="100%" playing controls url='/img/Pageview.mp4' />


After recording the steps, you can see all the runs in Wring platform, including the last run too. You can easily check from which Continent/Country the test is prepared, which url or site you tried to test, which browser, date and time and also you can see how long it took for the test to prepare (duration). 

![Pageview](/img/pageview.png)

This is the view you see after you click on your run. you can see a video of every step you did so far. 

![Pageview](/img/field.png)

It records mouse moves too - you will see every move you do drawn in red. 

![Pageview](/img/pagg.png)


Pageviews allows you to run the 'recorded' test from Live Events by only clicking the run button in the top right.

![Pageview](/img/runbutton.png)

After you click that, you will see your test running in `Test runs` 

![Pageview](/img/start1.png)
![Pageview](/img/running.png)

After the run is finished, it will be considered as a regular test run.