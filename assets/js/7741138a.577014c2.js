"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5758:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:6},i=void 0,a={unversionedId:"Test Frameworks/Puppeteer",id:"Test Frameworks/Puppeteer",isDocsHomePage:!1,title:"Puppeteer",description:"Puppeteer is a Node.js library that provides a high-level API to control Chrome or Chromium browsers. It is especially useful for developers and QA engineers who need to perform headless browser testing, automate UI interactions, or capture screenshots during the test process.",source:"@site/docs/Test Frameworks/Puppeteer.md",sourceDirName:"Test Frameworks",slug:"/Test Frameworks/Puppeteer",permalink:"/Wring_docs/docs/Test Frameworks/Puppeteer",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cypress",permalink:"/Wring_docs/docs/Test Frameworks/Cypress"},next:{title:"Wringr Recorder",permalink:"/Wring_docs/docs/Wringr Recorder/wringr"}},p=[],l={toc:p};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Puppeteer is a Node.js library that provides a high-level API to control Chrome or Chromium browsers. It is especially useful for developers and QA engineers who need to perform headless browser testing, automate UI interactions, or capture screenshots during the test process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to Generate a Puppeteer Test in Wringr"),(0,o.kt)("br",{parentName:"p"}),"\n",'To generate a test script in Puppeteer format using Wringr, navigate to the "Steps" section of your project. On the right-hand side, you\'ll find a panel titled "What Type Of Tests." Enter your test requirements, and then select "Puppeteer" from the dropdown list of available formats.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Downloading Your Generated Puppeteer Test"),(0,o.kt)("br",{parentName:"p"}),"\n",'After selecting the Puppeteer format and clicking the "Submit" button, Wringr will process your request. Once the processing is complete, a download link for the Puppeteer test script will appear on the screen. You can click this link to download the script file.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Puppeteer",src:r(7290).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Key Features of Puppeteer Scripts"),(0,o.kt)("br",{parentName:"p"}),"\n","The generated Puppeteer script, as shown in the screenshot, includes several distinctive features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Viewport Settings:")," The script allows for precise control over the browser window size, essential for responsive design testing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Navigation and Interaction:")," Puppeteer scripts handle navigation to URLs and interaction with specific elements on the page, such as clicks or form submissions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Promise Handling:")," The script uses Promises to manage asynchronous operations, ensuring that actions like navigation and element interactions are executed in the correct order."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Timeout and Event Handling:")," Puppeteer scripts can manage timeouts and wait for specific events before proceeding, ensuring that all elements are ready for interaction before actions are performed.")),(0,o.kt)("p",null,"This approach simplifies the process of generating detailed and reliable Puppeteer test scripts tailored to your project\u2019s requirements, ensuring comprehensive browser automation and testing."))}c.isMDXComponent=!0},7290:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Puppeteer1-3f7a8837f044a4268633c1b8c2540b11.png"}}]);