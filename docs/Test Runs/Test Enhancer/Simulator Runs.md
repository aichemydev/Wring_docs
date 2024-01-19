---
sidebar_position: 2
---

# Expander Runs

## Expander Feature

Expander is a tool that helps you explore different paths/selectors on your website. You are able to edit and explore all the selectors you want, which can increase its functionality. When you start using this tool, it will let you see all of the selectors on your website, edit them with ease and continue on with your current path or choose a new one.

You can expand details of any step by clicking on the screenshot with that step highlighted.

![Expander](/img/expander2.png)

On the top of the screenshot, you can see some buttons that allow you to manovrate with your path/selectors.

![Expander](/img/expander3.png)

1. Expander will help you navigate through your upcoming/previous steps.
2. Explore button allows you to explore all the similar selectors easier(green highlight).
![Expander](/img/expander4.png)

3. Save all your changes (actions, selectors, similar selectors) with just one click.
4. If you delete something without saving, you can always reset it.
![Expander](/img/sexpander.png)
5. Advanced - Expander allows quick, easy navigation between data and selectors. On the right side of the screenshot, you are able to see action, selectors(also method), similar selectors(if explore is ON), data etc.
![Expander](/img/expander5.png)
 - If explore is ON, it will look like this. You can also go to advanced tab and uncheck explore for this screenshot.
![Expander](/img/expander6.png)

Now you're ready to start an Expander run.

## Strategies (Algorithms)
 
Every step any algorithm generates list of candidate actions:
- case when step has “explore” flag: candidates are all similar elements
- case when step contains variables with range: candidates are all buckets/values (if set).
- If step has no “explore” flag and no variables: the only candidate is original action

Algorithm should select an action from a list of candidates every step during Expander run. Here, the candidate can take multiple actions sequentially or simultaneously.

After you press run, you see a modal window and look at two options there.

Recommended - *run exploration by default*

- **Exploration** - *Perform exploration runs. Auto verifications will be computed. Explore and validate new features for your app, including interactions and behaviors.*

*Total amount of episodes:  num_explorable_steps! - number of ways to arrange steps* 

![Wring Dashboard](/img/expander1.png)

Once you run Exploration, the agent will generate AI_Verify steps in order to find a bug.

![Wring Dashboard](/img/expander_7.png)

On Runs List/Episode runs, you will see all the steps with screenshots and details(bug logs and more).

![Wring Dashboard](/img/expander_8.png)

Click on `view log` and you'll see bug details/logs.

![Wring Dashboard](/img/expander_9.png)


Advanced runs - *There are four options*

- **Randomize** - *Randomize data used in testing.*
*Randomize is a deterministic algorithm, which means that it does not take into consideration order or dependence between steps. It provides final action sampling via a sampling technique called pseudo-randomness. This strategy repeats the same steps at every decision point, regardless of which actions have already been selected and whether those actions have already been performed. Final action will be sampled randomly from the candidate list at any step. Doesn’t take into consideration order or dependence between steps. Can repeat the same steps throughout episodes.*

*Total amount of episodes: specified by user.*

- **Sequential** - *Apply data provided in data file sequentially.*
*Steps that are “explored” or have variables with type other than “set” are performed in the same way as Randomize.* 
*This strategy is useful when there are a lot of “set” type variables (e.g. datafile is loaded), as it will select candidate in the specified order of the “set” parameter.*
 
*Total amount of episodes: number of rows in datafile (number of elements in “set” array).*

- **Exhaustive** - *Covers all data combinations. Larger episode sizes provide better results.*
*Each Expander episode only one step with candidates changes the current candidate, other steps are fixed. When all candidates of that one step are exhausted, the algorithm moves to another step and tries candidates of that step. That is happening until all possible candidate combinations are explored.*

*Total amount of episodes:  num_cand_1 * num_cand_2 *... * num_cand_n, where n is number of steps with candidates*

- **Permutation** - *Try intelligent permutations of explorable steps.*
*This is an exhaustive variant of the algorithm for changing step order of the explorable steps. According to this strategy, all candidates of the steps are selected randomly just as in Randomize strategy. Though, the order of explorable steps will be different throughout episodes. All possible permutations of the steps order will be calculated and tried by this algorithm.*

*Total amount of episodes:  num_explorable_steps! - number of ways to arrange steps*

![Wring Dashboard](/img/agents.png)

One thing Expander lets you do is connect its runs with Live events with only one click away. Those can be merged with the existing projects inside your account and also, you can see this session on live events and see what expander does.

![Wring Dashboard](/img/connect.png)


If you select any agent, e.g. `permutation` - it gets every `select` action that we valued as `yes` on `explore` from `edit` steps.
 
 And if you go to `Runs` - it will look like this:

 ![Wring Dashboard](/img/runn1.png)

If you add the steps that we did on Expander/Get Started.md section and run Permutation agent, it will check for bugs for this added steps.

```note
SAVE "//*[@id="__next"]/div/div[1]/div/div/div[2]/div/div[2]/div/span" into "duration" 
SAVE "//a[contains(string(), "Confirm")]/preceding-sibling::a/div[1]" into "timeslot"
VERIFY_CONTAINS css selector "div.af-confirm" - ${timeslot} + ${duration}

```
On episode, you can check the simulator bug.

 ![Wring Dashboard](/img/expander7.png)

If you hover on screenshots, you will be able to see this step highlighted.

 ![Wring Dashboard](/img/expander8.png)



On the test run, you can notice three buttons there: 

- **Detail** - *you can check the number of episodes there*

![Wring Dashboard](/img/detail.png)

In the `Detail button`, you have `steps` button - where you can check all the steps in details(*selector,action, total_bugs,..etc*)

![Wring Dashboard](/img/steps.png)


- **Variables** - *you will have there all the variables that are generated automatically*

![Wring Dashboard](/img/v.png)

- **Delete** - *you can easily delete Expander runs* 

![Wring Dashboard](/img/delete.png)

<!-- You can also download the Expander runs report, which it provides screenshots and all the necessary details.

![Wring Dashboard](/img/r1.png) -->
