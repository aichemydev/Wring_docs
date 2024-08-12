"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[305],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),g=c(r),f=a,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||i;return r?n.createElement(d,o(o({ref:e},p),{},{components:r})):n.createElement(d,o({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3225:function(t,e,r){r.r(e),r.d(e,{contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:2},s="Playwright",c={unversionedId:"Test Languages/playwright",id:"Test Languages/playwright",isDocsHomePage:!1,title:"Playwright",description:"The Wringr platform is a versatile tool that allows users to create and manage UI tests for their projectlications. One of the key features of Wringr is the ability to use Playwright, a popular open-source testing library, to automate interactions with the user interface.",source:"@site/docs/Test Languages/playwright.md",sourceDirName:"Test Languages",slug:"/Test Languages/playwright",permalink:"/Wring_docs/docs/Test Languages/playwright",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fixtures",permalink:"/Wring_docs/docs/Test Languages/Cucumber/Fixtures"},next:{title:"Sensetalk",permalink:"/Wring_docs/docs/Test Languages/sensetalk"}},p=[{value:"How to generate playwright from Wringr platform?",id:"how-to-generate-playwright-from-wringr-platform",children:[],level:2}],u={toc:p};function g(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"playwright"},"Playwright"),(0,i.kt)("p",null,"The Wringr platform is a versatile tool that allows users to create and manage UI tests for their projectlications. One of the key features of Wringr is the ability to use Playwright, a popular open-source testing library, to automate interactions with the user interface."),(0,i.kt)("p",null,"In addition to organizing tests effectively, it is also crucial to consider the scope and coverage of your tests when using Playwright in the Wringr platform. It is recommended to create a comprehensive test suite that covers all critical functionalities of the projectlication, including user authentication, form submissions, and error handling. By testing a wide range of scenarios, users can ensure that their projectlication is robust and reliable in various situations."),(0,i.kt)("h2",{id:"how-to-generate-playwright-from-wringr-platform"},"How to generate playwright from Wringr platform?"),(0,i.kt)("p",null,"Now that we know how to record a session, simply navigate to the download button and select the option for Playwright."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playwright",src:r(7108).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Before proceeding, create a folder and then")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i\n")),(0,i.kt)("p",null,"and "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx install playwright\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Next, within the folder, locate the "tests" directory and place the downloaded test files there.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playwright",src:r(3404).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Now you can do ",(0,i.kt)("inlineCode",{parentName:"li"},"npx playwright test")," to run all the tests or ",(0,i.kt)("inlineCode",{parentName:"li"},"npx playwright test name_of_test.spec.js"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playwright",src:r(8298).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Then ",(0,i.kt)("inlineCode",{parentName:"li"},"npx playwright show-report"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playwright",src:r(6199).Z})),(0,i.kt)("p",null,"or"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"If you do ",(0,i.kt)("inlineCode",{parentName:"li"},"npx playwright test name_of_test.spec.js --ui"),", you will see it loading step by step")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Playwright",src:r(7937).Z})))}g.isMDXComponent=!0},7108:function(t,e,r){e.Z=r.p+"assets/images/playwright-1-3a911f2c3d805963d903fccb95c05a77.png"},3404:function(t,e,r){e.Z=r.p+"assets/images/playwright-2-ce27da5bba1c6d3f09bf90d65634208f.png"},8298:function(t,e,r){e.Z=r.p+"assets/images/playwright-3-d7deb0dcc1891df72830895eb566216b.png"},6199:function(t,e,r){e.Z=r.p+"assets/images/playwright-4-df562651587ea35332e289e9a1462a4b.png"},7937:function(t,e,r){e.Z=r.p+"assets/images/playwright-5-3d4325a2276aafbe023069419904abff.png"}}]);