---
sidebar_position: 2
---

# Simulator Runs

## Strategies (Algorithms)
 
Every step any algorithm generates list of candidate actions:
- case when step has “explore” flag: candidates are all similar elements
- case when step contains variables with range: candidates are all buckets/values (if set).
- If step has no “explore” flag and no variables: the only candidate is original action

Algorithm should select an action from a list of candidates every step during simulator run. Here, the candidate can take multiple actions sequentially or simultaneously.

After you press run, you see a modal window and look at four options there.
- **Randomize** - *Randomize data used in testing.*
*Randomize is a deterministic algorithm, which means that it does not take into consideration order or dependence between steps. It provides final action sampling via a sampling technique called pseudo-randomness. This strategy repeats the same steps at every decision point, regardless of which actions have already been selected and whether those actions have already been performed. Final action will be sampled randomly from the candidate list at any step. Doesn’t take into consideration order or dependence between steps. Can repeat the same steps throughout episodes.*

*Total amount of episodes: specified by user.*

- **Sequential** - *Apply data provided in data file sequentially.*
*Steps that are “explored” or have variables with type other than “set” are performed in the same way as Randomize.* 
*This strategy is useful when there are a lot of “set” type variables (e.g. datafile is loaded), as it will select candidate in the specified order of the “set” parameter.*
 
*Total amount of episodes: number of rows in datafile (number of elements in “set” array).*

- **Exhaustive** - *Covers all data combinations. Larger episode sizes provide better results.*
*Each simulator episode only one step with candidates changes the current candidate, other steps are fixed. When all candidates of that one step are exhausted, the algorithm moves to another step and tries candidates of that step. That is happening until all possible candidate combinations are explored.*

*Total amount of episodes:  num_cand_1 * num_cand_2 *... * num_cand_n, where n is number of steps with candidates*

- **Permutation** - *Try intelligent permutations of explorable steps.*
*This is an exhaustive variant of the algorithm for changing step order of the explorable steps. According to this strategy, all candidates of the steps are selected randomly just as in Randomize strategy. Though, the order of explorable steps will be different throughout episodes. All possible permutations of the steps order will be calculated and tried by this algorithm.*

*Total amount of episodes:  num_explorable_steps! - number of ways to arrange steps*

- **Exploration** - *Perform exploration runs. Auto verifications will be computed. Explore and validate new features for your app, including interactions and behaviors.*

*Total amount of episodes:  num_explorable_steps! - number of ways to arrange steps*

![Wring Dashboard](/img/agents.png)

If you select any agent, e.g. `permutation` - it gets every `select` action that we valued as `yes` on `explore` from `edit` steps.
 
 And if you go to `Runs` - it will look like this:

 ![Wring Dashboard](/img/runn1.png)

On the test run, you can notice three buttons there: 

- **Detail** - *you can check the number of episodes there*

![Wring Dashboard](/img/detail.png)

In the `Detail button`, you have `steps` button - where you can check all the steps in details(*selector,action, total_bugs,..etc*)

![Wring Dashboard](/img/steps.png)


- **Variables** - *you will have there all the variables that are generated automatically*

![Wring Dashboard](/img/v.png)

- **Delete** - *you can easily delete simulator runs* 

![Wring Dashboard](/img/delete.png)

You can also download the Simulator runs report, which it provides screenshots and all the necessary details.

![Wring Dashboard](/img/r1.png)
