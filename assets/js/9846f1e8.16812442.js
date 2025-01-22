"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6571:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},s="Dashboard",i={unversionedId:"Dash",id:"Dash",isDocsHomePage:!1,title:"Dashboard",description:"The Dashboard offers a comprehensive overview of your testing activities, presenting key metrics and statistics to help you monitor and manage your test executions effectively. Here's what you can find:",source:"@site/docs/Dash.md",sourceDirName:".",slug:"/Dash",permalink:"/Wring_docs/docs/Dash",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Wring_docs/docs/intro"},next:{title:"Projects Intro",permalink:"/Wring_docs/docs/APPS/Projects Intro"}},l=[{value:"Recent Tests for All Users",id:"recent-tests-for-all-users",children:[],level:4},{value:"Generated Tests Complexity",id:"generated-tests-complexity",children:[],level:4},{value:"Avg Time to Generate Test",id:"avg-time-to-generate-test",children:[],level:4},{value:"1. <strong>My Profile</strong>",id:"1-my-profile",children:[],level:4},{value:"2. <strong>Subscription Plans</strong>",id:"2-subscription-plans",children:[],level:4},{value:"3. <strong>Documentation</strong>",id:"3-documentation",children:[],level:4},{value:"4. <strong>Report a Bug</strong>",id:"4-report-a-bug",children:[],level:4},{value:"5. <strong>Language Selection</strong>",id:"5-language-selection",children:[],level:4}],u={toc:l};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,"The Dashboard offers a comprehensive overview of your testing activities, presenting key metrics and statistics to help you monitor and manage your test executions effectively. Here's what you can find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Sessions:")," Displays the total number of user sessions recorded in the system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tests Generated:")," Shows the total number of tests that have been generated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tests Per Session:")," Indicates the average number of tests generated per session."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tests Per User:")," Displays the average number of tests per user.")),(0,a.kt)("h4",{id:"recent-tests-for-all-users"},"Recent Tests for All Users"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tests:")," A list of recent tests conducted by all users. You can view the test names here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status:")," Indicates the current status of each test, whether it passed or failed.")),(0,a.kt)("h4",{id:"generated-tests-complexity"},"Generated Tests Complexity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pie Chart:")," Visual representation of the complexity of generated tests. It categorizes tests into three levels: easy, medium, and hard.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy:")," Number of easy tests generated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Medium:")," Number of medium complexity tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard:")," Number of hard tests generated.")))),(0,a.kt)("h4",{id:"avg-time-to-generate-test"},"Avg Time to Generate Test"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Time Display:")," Shows the average time taken to generate a test.")),(0,a.kt)("p",null,"This dashboard is designed to give you quick insights into your testing activities, enabling you to assess the overall effectiveness of your test generation and execution processes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wringr Dashboard",src:n(2711).Z})),(0,a.kt)("p",null,"The right-side panel in the Wringr Dashboard provides quick access to account management options and settings. "),(0,a.kt)("h4",{id:"1-my-profile"},"1. ",(0,a.kt)("strong",{parentName:"h4"},"My Profile")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Option:"),' Click on "My profile" to view and edit your account details, such as your username, email, and other personal information.')),(0,a.kt)("h4",{id:"2-subscription-plans"},"2. ",(0,a.kt)("strong",{parentName:"h4"},"Subscription Plans")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Option:"),' Click on "Subscription Plans" to view and manage your subscription. Here you can upgrade, downgrade, or renew your plan based on your needs.')),(0,a.kt)("h4",{id:"3-documentation"},"3. ",(0,a.kt)("strong",{parentName:"h4"},"Documentation")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Option:"),' Selecting "Documentation" will redirect you to the help and support documentation. This section contains detailed guides and FAQs on using Wringr\'s features.')),(0,a.kt)("h4",{id:"4-report-a-bug"},"4. ",(0,a.kt)("strong",{parentName:"h4"},"Report a Bug")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Option:"),' If you encounter any issues or bugs while using Wringr, click on "Report a Bug" to submit feedback to the support team. This helps improve the platform.')),(0,a.kt)("h4",{id:"5-language-selection"},"5. ",(0,a.kt)("strong",{parentName:"h4"},"Language Selection")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dropdown:"),' The "Language" dropdown allows you to select the language in which the Wringr interface is displayed.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wringr Dashboard",src:n(6633).Z})),(0,a.kt)("p",null,"By using this panel, you can efficiently manage your account settings, access help documentation, report issues, and adjust language preferences to ensure the best user experience on the Wringr platform."),(0,a.kt)("h1",{id:"congratulations"},"Congratulations!"),(0,a.kt)("p",null,"You have now explored some of the basic features in the ",(0,a.kt)("strong",{parentName:"p"},"Wringr AI"),", and how to use them. Now you are ready to explore a few advanced features and get to know how they work."),(0,a.kt)("p",null,"Remember, if at any point you want to reference the documentation, ",(0,a.kt)("strong",{parentName:"p"},"the link is one click away from the AI"),"!"))}c.isMDXComponent=!0},2711:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Dashboard-1877152a92f3e9d403f5048ff23e6874.png"},6633:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/language-5e8f2e3b6e241be47aca507f4906a70f.png"}}]);