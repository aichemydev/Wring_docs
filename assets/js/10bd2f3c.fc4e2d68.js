"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[278],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=p(r),g=i,d=f["".concat(s,".").concat(g)]||f[g]||u[g]||a;return r?n.createElement(d,o(o({ref:e},c),{},{components:r})):n.createElement(d,o({ref:e},c))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2505:function(t,e,r){r.r(e),r.d(e,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={sidebar_position:7},s="Guidelines for Using Playwright for UI Testing",p={unversionedId:"APPS/playwright",id:"APPS/playwright",isDocsHomePage:!1,title:"Guidelines for Using Playwright for UI Testing",description:"The Wringr platform is a versatile tool that allows users to create and manage UI tests for their applications. One of the key features of Wringr is the ability to use Playwright, a popular open-source testing library, to automate interactions with the user interface.",source:"@site/docs/APPS/playwright.md",sourceDirName:"APPS",slug:"/APPS/playwright",permalink:"/Wring_docs/docs/APPS/playwright",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"API Tests",permalink:"/Wring_docs/docs/APPS/Cucumber/apiui"},next:{title:"API",permalink:"/Wring_docs/docs/APPS/Api"}},c=[],u={toc:c};function f(t){var e=t.components,l=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guidelines-for-using-playwright-for-ui-testing"},"Guidelines for Using Playwright for UI Testing"),(0,a.kt)("p",null,"The Wringr platform is a versatile tool that allows users to create and manage UI tests for their applications. One of the key features of Wringr is the ability to use Playwright, a popular open-source testing library, to automate interactions with the user interface."),(0,a.kt)("p",null,"n addition to organizing tests effectively, it is also crucial to consider the scope and coverage of your tests when using Playwright in the Wringr platform. It is recommended to create a comprehensive test suite that covers all critical functionalities of the application, including user authentication, form submissions, and error handling. By testing a wide range of scenarios, users can ensure that their application is robust and reliable in various situations."),(0,a.kt)("p",null,"How to generate playwright from Wringr platform? "),(0,a.kt)("p",null,"Now that we know how to record a session, simply navigate to the download button and select the option for Playwright."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Playwright",src:r(7108).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Before proceeding, create a folder and then")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i\n")),(0,a.kt)("p",null,"and "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx install playwright\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Next, within the folder, locate the "tests" directory and place the downloaded test files there.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Playwright",src:r(3404).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now you can do ",(0,a.kt)("inlineCode",{parentName:"li"},"npx playwright test")," to run all the tests or ",(0,a.kt)("inlineCode",{parentName:"li"},"npx playwright test name_of_test.spec.js"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Playwright",src:r(8298).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Then ",(0,a.kt)("inlineCode",{parentName:"li"},"npx playwright show-report"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Playwright",src:r(6199).Z})),(0,a.kt)("p",null,"or"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"If you do ",(0,a.kt)("inlineCode",{parentName:"li"},"npx playwright test name_of_test.spec.js --ui"),", you will see it loading step by step")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Playwright",src:r(7937).Z})))}f.isMDXComponent=!0},7108:function(t,e,r){e.Z=r.p+"assets/images/playwright-1-3a911f2c3d805963d903fccb95c05a77.png"},3404:function(t,e,r){e.Z=r.p+"assets/images/playwright-2-ce27da5bba1c6d3f09bf90d65634208f.png"},8298:function(t,e,r){e.Z=r.p+"assets/images/playwright-3-d7deb0dcc1891df72830895eb566216b.png"},6199:function(t,e,r){e.Z=r.p+"assets/images/playwright-4-df562651587ea35332e289e9a1462a4b.png"},7937:function(t,e,r){e.Z=r.p+"assets/images/playwright-5-3d4325a2276aafbe023069419904abff.png"}}]);