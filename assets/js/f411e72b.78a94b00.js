"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[890],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6868:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:1},s="Get Started with Simulator",c={unversionedId:"Test Enhancer/Get Started",id:"Test Enhancer/Get Started",isDocsHomePage:!1,title:"Get Started with Simulator",description:"What is Simulator?",source:"@site/docs/Test Enhancer/Get Started.md",sourceDirName:"Test Enhancer",slug:"/Test Enhancer/Get Started",permalink:"/Wring_docs/docs/Test Enhancer/Get Started",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"View Test",permalink:"/Wring_docs/docs/TG Smart Observer/view"},next:{title:"Simulator Runs",permalink:"/Wring_docs/docs/Test Enhancer/Simulator Runs"}},p=[{value:"What is Simulator?",id:"what-is-simulator",children:[],level:2},{value:"What can Simulator do?",id:"what-can-simulator-do",children:[{value:"Try it out:",id:"try-it-out",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started-with-simulator"},"Get Started with Simulator"),(0,i.kt)("h2",{id:"what-is-simulator"},"What is Simulator?"),(0,i.kt)("h2",{id:"what-can-simulator-do"},"What can Simulator do?"),(0,i.kt)("p",null,"Tool for increasing coverage of your tests. It is able to intelligently alter your tests to find new paths in the application in order to detect new bugs."),(0,i.kt)("p",null,"Key features: ",(0,i.kt)("strong",{parentName:"p"},"step exploration, variables, verify actions.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each step of the test can be \u201cexplored\u201d. It means that during test Simulator runs, it will generate similar steps (will interact with similar elements)."),(0,i.kt)("li",{parentName:"ol"},"Test Simulator is able to generate new data using \u201cvariables\u201d concept. During initial test run, all data used in the test will be mapped to a specific type (e.g. \u201cJohn\u201d -> \u201cFirst name\u201d, ",(0,i.kt)("inlineCode",{parentName:"li"},"john@gmail.com")," -> \u201cemail\u201d). During test Simulator runs, new data will be generated according to parsed type."),(0,i.kt)("li",{parentName:"ol"},"In order to find specific bugs, verify action can be added as any step in your test. Verify action support complex operations with variables, so you can combine multiple variable in a single verify step. This allows test Simulator catch dependencies between different elements of the web-page")),(0,i.kt)("h3",{id:"try-it-out"},"Try it out:"),(0,i.kt)("p",null,"A sample test can be setup to use the test Simulator on ",(0,i.kt)("a",{parentName:"p",href:"https://dev.wring.dev/dashboard"},"https://dev.wring.dev/dashboard"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To start, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"Send test")," button from recorder testcase but you can upload an existing testcase too."),(0,i.kt)("li",{parentName:"ol"},"If you choose to upload a test (.side file) - You can run this test by uploading it from the test explorer tab - ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Test")," button."),(0,i.kt)("li",{parentName:"ol"},"Once the test is complete, click on the test and navigate to the Simulator tab.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(4600).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Easiest way to get started is to add a variable. Click the variable button - there you can find autogenerated variables ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(8121).Z})),(0,i.kt)("p",null,"or you can add a variable by yourself to generate values by selecting that as a type."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(8146).Z})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Find a step to edit and use the variable you created earlier by modifying the data field with the following format: ",(0,i.kt)("inlineCode",{parentName:"li"},"${var_name}"))),(0,i.kt)("p",null,"5.1.  Find a step to edit and change ",(0,i.kt)("inlineCode",{parentName:"p"},"explore")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"No")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," actions"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(975).Z})),(0,i.kt)("p",null,"5.2  Find a step to add a variable and try to modify ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),",",(0,i.kt)("inlineCode",{parentName:"p"},"xpath"),"-",(0,i.kt)("em",{parentName:"p"},"manually"),",",(0,i.kt)("inlineCode",{parentName:"p"},"data"),",",(0,i.kt)("inlineCode",{parentName:"p"},"selector"),",etc."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(2775).Z})),(0,i.kt)("p",null,"Here, you can see added variables that are modified."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wring Dashboard",src:a(5447).Z})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you are ready to press run.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select an agent and type the episode value."))),(0,i.kt)("p",null,"To check more on Simulator Runs, please go to next document page."))}d.isMDXComponent=!0},4600:function(e,t,a){t.Z=a.p+"assets/images/Enhancer-5f0ead5907c4cb71ff238f93be75c6c4.png"},8146:function(e,t,a){t.Z=a.p+"assets/images/ad-variable-a629f655b5526d5ca2feb39fb17f0ac5.png"},8121:function(e,t,a){t.Z=a.p+"assets/images/add-a2c8ee7be345b8809c7ba9cf1f055ec4.png"},5447:function(e,t,a){t.Z=a.p+"assets/images/add1-4f53881eec26d769c12704d6e27ad403.png"},2775:function(e,t,a){t.Z=a.p+"assets/images/addd-6dbf16ae0469884f65385a1e4883cfeb.png"},975:function(e,t,a){t.Z=a.p+"assets/images/edit-99fc822691e2261e772eae81af7e58cf.png"}}]);