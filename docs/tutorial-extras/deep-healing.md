---
sidebar_position: 3
---

# Deep Healing

## Healing vs Deep Healing

Wring has two tiers of healing that can be used to fix broken selectors in your tests. 

Standard healing will process page information to resolve broken xpaths and css selectors. In this case, the Wring engine will use a snapshot of the current point in time to determine optimal healed selectors. 

Deep healing enables the Wring engine to use data from the entire lifecycle of the test. This allows Wring to make heals based on the result of the whole script and rewrite them. 

Benefits:
- This handles a wider range of situations compared to standard healing. One of these situations is when different broken xpaths may be healed to the same xpath.

Drawbacks:
- Deep healing requires intensive processing of the test which may result in longer test execution time. 

