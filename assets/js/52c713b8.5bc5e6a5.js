"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={slug:"introducing-Wring",title:"Introducing Wring",authors:{name:"The Wring Team",title:"Introducing Wring",image_url:"/Wring_docs/img/favicon.png"},tags:["Introduction"]},l=void 0,u={permalink:"/Wring_docs/blog/introducing-Wring",source:"@site/blog/2020-06-15-first-blog-post.md",title:"Introducing Wring",description:"What is Wring and what can it do?",date:"2020-06-15T00:00:00.000Z",formattedDate:"June 15, 2020",tags:[{label:"Introduction",permalink:"/Wring_docs/blog/tags/introduction"}],readingTime:2.01,truncated:!0,authors:[{name:"The Wring Team",title:"Introducing Wring",image_url:"/Wring_docs/img/favicon.png",imageURL:"/Wring_docs/img/favicon.png"}]},c={authorsImageUrls:[void 0]},d=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Ideal Situation for QA",id:"ideal-situation-for-qa",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"What is Wring and what can it do?"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"We believe Selenium is a great open platform for testing software. However, testing software with Selenium has lead people to constantly rewrite and maintain their tests to keep up with development cycles."),(0,i.kt)("p",null,"Unfortunately, due to these struggles, we now require two teams of coders - a set of developers and a set of testers. The testers have to keep updating their selenium scripts to match the pace of developers. This leads to a cat and mouse catchup game for testers worldwide."),(0,i.kt)("p",null,"Instead of allowing QA teams freedom and flexibility to improve coverage and predict user behavior, modern QA teams are simply verifying that yesterday\u2019s changes did not break core functionality. They are re-checking that login, search, and a few key flows from yesterday\u2019s new build did not break their selenium tests. Furthermore, in the likely case that it did break their selenium tests, QA engineers will rewrite the tests, update page object models, fix locator and object detectors, improve timeouts, and then commit these into the repository. There is full knowledge that this process will rinse and repeat."),(0,i.kt)("h2",{id:"ideal-situation-for-qa"},"Ideal Situation for QA"),(0,i.kt)("p",null,"QA managers have told us that during key releases, rewriting selenium tests can easily take more than 95% of the time consumed by QA engineers. QA managers have told us that instead of spending time on rewriting selenium, they would like them to:"),(0,i.kt)("p",null,"Improve scenario and test coverage by 5-10x\nEnable faster release cycles to the customer\nAllow enterprises to issue bug fixes quickly to affected customers"),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"As a counter to efficient testing, we hear of lax stories of A/B testing from some teams at large social media/entertainment companies. The claim is you don\u2019t need to test software as much, and can fix customer reported bugs quickly. That\u2019s great if you are serving social media consumers, but what if you are serving critical enterprise applications. Enterprise solutions have a lot of competition, for cost, customer support, and feature velocity. Can you afford a lax attitude for testing?"),(0,i.kt)("p",null,"Our solution is a method that empowers QA, removes their drudgery with maintenance of tests to move on to the higher value problems that software managers are looking for."),(0,i.kt)("p",null,"By supporting selenium interception on various languages, Java, Python, Javascript, and even the Selenium IDE, our aim is to make maintenance painless while letting QA focus on more interesting challenges."))}m.isMDXComponent=!0}}]);