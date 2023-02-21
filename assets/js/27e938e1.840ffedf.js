"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[5621],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7955:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={sidebar_position:2},l="Expander Runs",p={unversionedId:"tutorial-basics/Test Runs/Test Enhancer/Simulator Runs",id:"tutorial-basics/Test Runs/Test Enhancer/Simulator Runs",isDocsHomePage:!1,title:"Expander Runs",description:"Strategies (Algorithms)",source:"@site/docs/tutorial-basics/Test Runs/Test Enhancer/Simulator Runs.md",sourceDirName:"tutorial-basics/Test Runs/Test Enhancer",slug:"/tutorial-basics/Test Runs/Test Enhancer/Simulator Runs",permalink:"/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Simulator Runs",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Started with Expander",permalink:"/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Get Started"},next:{title:"Data File Upload Variables",permalink:"/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Datafile"}},u=[{value:"Strategies (Algorithms)",id:"strategies-algorithms",children:[],level:2}],c={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expander-runs"},"Expander Runs"),(0,i.kt)("h2",{id:"strategies-algorithms"},"Strategies (Algorithms)"),(0,i.kt)("p",null,"Every step any algorithm generates list of candidate actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"case when step has \u201cexplore\u201d flag: candidates are all similar elements"),(0,i.kt)("li",{parentName:"ul"},"case when step contains variables with range: candidates are all buckets/values (if set)."),(0,i.kt)("li",{parentName:"ul"},"If step has no \u201cexplore\u201d flag and no variables: the only candidate is original action")),(0,i.kt)("p",null,"Algorithm should select an action from a list of candidates every step during Expander run. Here, the candidate can take multiple actions sequentially or simultaneously."),(0,i.kt)("p",null,"After you press run, you see a modal window and look at two options there."),(0,i.kt)("p",null,"Recommended - ",(0,i.kt)("em",{parentName:"p"},"run exploration by default")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exploration")," - ",(0,i.kt)("em",{parentName:"li"},"Perform exploration runs. Auto verifications will be computed. Explore and validate new features for your app, including interactions and behaviors."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Total amount of episodes:  num_explorable_steps! - number of ways to arrange steps")," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(6564).Z})),(0,i.kt)("p",null,"Advanced runs - ",(0,i.kt)("em",{parentName:"p"},"There are four options")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Randomize")," - ",(0,i.kt)("em",{parentName:"li"},"Randomize data used in testing."),(0,i.kt)("em",{parentName:"li"},"Randomize is a deterministic algorithm, which means that it does not take into consideration order or dependence between steps. It provides final action sampling via a sampling technique called pseudo-randomness. This strategy repeats the same steps at every decision point, regardless of which actions have already been selected and whether those actions have already been performed. Final action will be sampled randomly from the candidate list at any step. Doesn\u2019t take into consideration order or dependence between steps. Can repeat the same steps throughout episodes."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Total amount of episodes: specified by user.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sequential")," - ",(0,i.kt)("em",{parentName:"li"},"Apply data provided in data file sequentially."),(0,i.kt)("em",{parentName:"li"},"Steps that are \u201cexplored\u201d or have variables with type other than \u201cset\u201d are performed in the same way as Randomize."),(0,i.kt)("em",{parentName:"li"},"This strategy is useful when there are a lot of \u201cset\u201d type variables (e.g. datafile is loaded), as it will select candidate in the specified order of the \u201cset\u201d parameter."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Total amount of episodes: number of rows in datafile (number of elements in \u201cset\u201d array).")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exhaustive")," - ",(0,i.kt)("em",{parentName:"li"},"Covers all data combinations. Larger episode sizes provide better results."),(0,i.kt)("em",{parentName:"li"},"Each Expander episode only one step with candidates changes the current candidate, other steps are fixed. When all candidates of that one step are exhausted, the algorithm moves to another step and tries candidates of that step. That is happening until all possible candidate combinations are explored."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Total amount of episodes:  num_cand_1 ")," num_cand_2 ",(0,i.kt)("em",{parentName:"p"},"... ")," num_cand_n, where n is number of steps with candidates*"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Permutation")," - ",(0,i.kt)("em",{parentName:"li"},"Try intelligent permutations of explorable steps."),(0,i.kt)("em",{parentName:"li"},"This is an exhaustive variant of the algorithm for changing step order of the explorable steps. According to this strategy, all candidates of the steps are selected randomly just as in Randomize strategy. Though, the order of explorable steps will be different throughout episodes. All possible permutations of the steps order will be calculated and tried by this algorithm."))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Total amount of episodes:  num_explorable_steps! - number of ways to arrange steps")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(1742).Z})),(0,i.kt)("p",null,"One thing Expander lets you do is connect its runs with Live events with only one click away. Those can be merged with the existing projects inside your account and also, you can see this session on live events and see what expander does."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(8737).Z})),(0,i.kt)("p",null,"If you select any agent, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"permutation")," - it gets every ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," action that we valued as ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"explore")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," steps."),(0,i.kt)("p",null," And if you go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Runs")," - it will look like this:"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Wring Dashboard",src:a(6909).Z})),(0,i.kt)("p",null,"On the test run, you can notice three buttons there: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Detail")," - ",(0,i.kt)("em",{parentName:"li"},"you can check the number of episodes there"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(1578).Z})),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Detail button"),", you have ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," button - where you can check all the steps in details(",(0,i.kt)("em",{parentName:"p"},"selector,action, total_bugs,..etc"),")"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(351).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Variables")," - ",(0,i.kt)("em",{parentName:"li"},"you will have there all the variables that are generated automatically"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(6684).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete")," - ",(0,i.kt)("em",{parentName:"li"},"you can easily delete Expander runs")," ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(5014).Z})))}d.isMDXComponent=!0},1742:function(e,t,a){t.Z=a.p+"assets/images/agents-4ccb0c794e27ef47e575181e244f0a1a.png"},8737:function(e,t,a){t.Z=a.p+"assets/images/connect-ca82d1e849ddd6a72af408365bda74d3.png"},5014:function(e,t,a){t.Z=a.p+"assets/images/delete-338fa6547eecb61145216eb93792e64e.png"},1578:function(e,t,a){t.Z=a.p+"assets/images/detail-9efa00b018538c8848eac76f04d50795.png"},6564:function(e,t,a){t.Z=a.p+"assets/images/expander1-6cc35e667186d52008af51be98cf1fb0.png"},6909:function(e,t,a){t.Z=a.p+"assets/images/runn1-5ffa1d486adcb95cf002e43893c6a456.png"},351:function(e,t,a){t.Z=a.p+"assets/images/steps-897ae96ea28d653f28311a9e3e2e3d7b.png"},6684:function(e,t,a){t.Z=a.p+"assets/images/v-c3ec530d94c98d3cd582ba269f448702.png"}}]);