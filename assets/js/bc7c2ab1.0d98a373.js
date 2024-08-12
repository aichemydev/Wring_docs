"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[387],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6233:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:4},l=void 0,u={unversionedId:"Test Languages/Selenium",id:"Test Languages/Selenium",isDocsHomePage:!1,title:"Selenium",description:"Selenium is a widely-used tool for automating web applications for testing purposes. It's particularly beneficial for developers and QA teams who need to execute repetitive tasks across different browsers and platforms. Selenium supports multiple programming languages and is known for its flexibility and ability to handle complex test scenarios.",source:"@site/docs/Test Languages/Selenium.md",sourceDirName:"Test Languages",slug:"/Test Languages/Selenium",permalink:"/Wring_docs/docs/Test Languages/Selenium",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SenseTalk",permalink:"/Wring_docs/docs/Test Languages/SenseTalk"},next:{title:"Cypress",permalink:"/Wring_docs/docs/Test Languages/Cypress"}},c=[{value:"How to Generate a Selenium Test in Wringr",id:"how-to-generate-a-selenium-test-in-wringr",children:[],level:3},{value:"Downloading Your Generated Test",id:"downloading-your-generated-test",children:[],level:3},{value:"Key Features of Selenium Scripts",id:"key-features-of-selenium-scripts",children:[],level:3}],p={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Selenium")," is a widely-used tool for automating web applications for testing purposes. It's particularly beneficial for developers and QA teams who need to execute repetitive tasks across different browsers and platforms. Selenium supports multiple programming languages and is known for its flexibility and ability to handle complex test scenarios."),(0,o.kt)("h3",{id:"how-to-generate-a-selenium-test-in-wringr"},"How to Generate a Selenium Test in Wringr"),(0,o.kt)("p",null,'To generate a test script in Selenium format using Wringr, navigate to the "Steps" section of your project. On the right-hand side, you\'ll find a panel labeled ',(0,o.kt)("strong",{parentName:"p"},'"What Type Of Tests."')," In this panel, enter your test requirements. Then, from the list of available formats, select ",(0,o.kt)("strong",{parentName:"p"},'"Selenium"')," from the dropdown menu."),(0,o.kt)("h3",{id:"downloading-your-generated-test"},"Downloading Your Generated Test"),(0,o.kt)("p",null,"Once you have selected the Selenium format and clicked the ",(0,o.kt)("strong",{parentName:"p"},'"Submit"')," button, Wringr will process your request. After a short processing time, a download link for the generated Selenium script will appear on the screen. You can click this link to download the script file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Seleniumt",src:n(6876).Z})),(0,o.kt)("h3",{id:"key-features-of-selenium-scripts"},"Key Features of Selenium Scripts"),(0,o.kt)("p",null,"The generated Selenium script, as seen in the screenshot, includes several distinct features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browser Initialization:")," The script initializes different browsers (e.g., Chrome, Firefox) using the WebDriver API, allowing for cross-browser testing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Screenshot Capture:")," It takes screenshots at every step, helping to visually confirm the test execution and identify any issues."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Error Handling and Timeouts:")," The script includes error handling and timeouts to ensure stability during the testing process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Detailed Steps:")," Each action, such as resizing the browser window, navigating to a URL, and interacting with elements, is clearly defined and logged.")),(0,o.kt)("p",null,"This process allows you to generate comprehensive Selenium test scripts tailored to your testing requirements, ensuring robust and repeatable test execution across multiple environments."))}d.isMDXComponent=!0},6876:function(e,t,n){t.Z=n.p+"assets/images/Selenium1-0c05d517e4464fc242cdd164b324d26c.png"}}]);