"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1244:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:2},l="Test Runs",u={unversionedId:"tutorial-basics/Test-Explorer",id:"tutorial-basics/Test-Explorer",isDocsHomePage:!1,title:"Test Runs",description:"Overview",source:"@site/docs/tutorial-basics/Test-Explorer.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Test-Explorer",permalink:"/Wring_docs/docs/tutorial-basics/Test-Explorer",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dashboard",permalink:"/Wring_docs/docs/tutorial-basics/Dashboard"},next:{title:"Integrations",permalink:"/Wring_docs/docs/tutorial-basics/Integrations"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Adding a Test Run",id:"adding-a-test-run",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-runs"},"Test Runs"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The test explorer is where to go when you want to browse all the tests you have added to Wring. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Test Explorer",src:n(6313).Z})),(0,i.kt)("p",null,"This page displays the test runs along with quick access to high level information such as a description, run time, total paths, healed paths. By default, the your results will be displayed chronologically. Clicking on a Test Run shows you further detail about the particular Test Run."),(0,i.kt)("p",null,"The test explorer is the destination for your test runs as well as test suites."),(0,i.kt)("h2",{id:"adding-a-test-run"},"Adding a Test Run"),(0,i.kt)("p",null,"The test explorer tab can is also the place to upload new tests. Here you can click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Test")," button to upload test scripts and set run options."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Currently Supported Formats ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At the Moment, Katalon (.xml) and Selenium IDE (.side) are supported through this menu"))),(0,i.kt)("p",null,"This is the add test modal."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Adding a Test",src:n(2381).Z})),(0,i.kt)("p",null,"This is where you specify run properties and fill in the required fields before adding a test to Wring. The run name is required and is one of the ways you can search for your test. You can also add a description to help you and others understand what is going on in each test. "),(0,i.kt)("p",null,"There is also a tab with advanced options. This includes: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ignore disabled elements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ignore invisible elements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Collect page-interaction event data for test case augmentation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This option allows you to take advantage of features in the test Enhancer and app map sections of the product."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Collect extra element data & try to fix broken selectors"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Selecting this option enabled deep heal. This will make Wring compare the results of the whole script and rewrite them, if it finds collisions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generate selectors for all elements on each visited page"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Selecting this option will generate optimal selectors for all elements on the pages visited during this test. This is a very intensive process and test execution time is dependent on the number of elements that exist on the pages."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Try to avoid string/text methods when generating XPath selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Verify suggested selectors"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This option will rerun the tests in the background using selectors that were reccomended by Wring."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger integrations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By selecting this option, you are includng this test and susbequent reruns of this test to be included for any integrations you may have set up. For example, if this test was to fail in this or subsequent runs, selecting this indicates that you would like to be notfied via a Wring integration."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid these attributes when generating selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use these attributes when generating selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Continue test suite execution if a component test fails"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Test suites may sometimes be depend on the successful completion of earlier tests for later tests to pass. In that case, using this option will avoid unecessary runs in the case a test fails earlier in the test suite."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time out and cancel"))))}d.isMDXComponent=!0},2381:function(e,t,n){t.Z=n.p+"assets/images/Add-Test-0b0e487d4e32464ae4ffe0f672c43664.png"},6313:function(e,t,n){t.Z=n.p+"assets/images/Test-Explorer-ea62999052e5cfe3cbf758d056c1c5be.png"}}]);