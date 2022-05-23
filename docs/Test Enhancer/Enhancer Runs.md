---
sidebar_position: 2
---

# Enhancer Runs

After you press run, you see a modal window and look at four options there.
- **Randomize** - *Randomize data used in testing.*
- **Sequential** - *Apply data provided in data file sequentially.*
- **Exhaustive** - *Covers all data combinations. Larger episode sizes provide better results.*
- **Permutation** - *Try intelligent permutations of explorable steps.*

![Quikly Dashboard](/img/runn.png)

If you select any agent, e.g. `permutation` - it gets every `select` action that we valued as `yes` on `explore` from `edit` steps.
 
 And if you go to `Runs` - it will look like this:

 ![Quikly Dashboard](/img/runn1.png)

On the test run, you can notice three buttons there: 

- **Detail** - *you can check the number of episodes there*

![Quikly Dashboard](/img/detail.png)

In the `Detail button`, you have `steps` button - where you can check all the steps in details(*selector,action, total_bugs,..etc*)

![Quikly Dashboard](/img/steps.png)


- **Variables** - *you will have there all the variables that are generated automatically*

![Quikly Dashboard](/img/v.png)

You can also download the Enhancer runs report, which it provides screenshots and all the necessary details.

![Quikly Dashboard](/img/r1.png)
