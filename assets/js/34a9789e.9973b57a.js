"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[9345],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3481:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Getting Started",c={unversionedId:"tutorial-extras/getting-started",id:"tutorial-extras/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"We support direct calls to our healing API from Selenium tests running outside of our own service. For this purpose, we have released Selenium packages for Java, Javascript, and Python that interface with our API and obtain healed XPaths or CSS selectors for web automation tests that run in your own environment. These Wring Interceptor packages can be used in place of the usual Selenium packages to take advantage of our API. These packages are available on the Installation Page.",source:"@site/docs/tutorial-extras/getting-started.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/getting-started",permalink:"/Wring_docs/docs/tutorial-extras/getting-started",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/Wring_docs/docs/tutorial-basics/congratulations"},next:{title:"Customizing Interceptor Execution",permalink:"/Wring_docs/docs/tutorial-extras/customizing-interceptor"}},p=[{value:"Using Interceptor Packages",id:"using-interceptor-packages",children:[],level:2},{value:"Selenium Setup",id:"selenium-setup",children:[{value:"Java",id:"java",children:[],level:3},{value:"Javascript",id:"javascript",children:[],level:3},{value:"Python",id:"python",children:[],level:3}],level:2},{value:"Cypress Setup",id:"cypress-setup",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"We support direct calls to our healing API from Selenium tests running outside of our own service. For this purpose, we have released Selenium packages for Java, Javascript, and Python that interface with our API and obtain healed XPaths or CSS selectors for web automation tests that run in your own environment. These Wring Interceptor packages can be used in place of the usual Selenium packages to take advantage of our API. These packages are available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Installation Page"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The installation page requires an activated account. Account activation can take up to 24 hours. If your account has not been activated within 24 hours please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@wring.dev"},"support@wring.dev")))),(0,i.kt)("h2",{id:"using-interceptor-packages"},"Using Interceptor Packages"),(0,i.kt)("p",null,"A single environment variable is required for the Interceptor packages to interface with our API. Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"TG_TOKEN")," as directed on the download page, then install one of the Interceptor packages."),(0,i.kt)("p",null,"Run your Selenium tests as normal, making sure the TG_TOKEN environment variable is set. The Interceptor will log its actions and the results of the XPath/CSS selector healing process to the terminal console. It will also provide a results URL where you can browse the results of each encounter and the outcomes of the healing process."),(0,i.kt)("h2",{id:"selenium-setup"},"Selenium Setup"),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"Include this Selenium JAR in the Java classpath when you run your test instead of the normal Selenium JAR. This JAR contains our Selenium Interceptor, as well as its dependencies."),(0,i.kt)("h3",{id:"javascript"},"Javascript"),(0,i.kt)("p",null,"Download the Interceptor package and install it using NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install <interceptor-package-name>.tgz\n")),(0,i.kt)("p",null,"This will override your usual Selenium NPM dependency automatically."),(0,i.kt)("h3",{id:"python"},"Python"),(0,i.kt)("p",null,"Download the interceptor package from the installation page. Then use pip to install the interceptor. This will overwrite any selenium installations you have installed previously. If you want to install the interceptor alongside existing selenium installations, you can install the interceptor in a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install <interceptor-package-name>.whl -U\n")),(0,i.kt)("p",null,"Please make sure that your python and pip paths are properly configured. You can check those with ",(0,i.kt)("inlineCode",{parentName:"p"},"which python")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"which pip")," in your terminal."),(0,i.kt)("h2",{id:"cypress-setup"},"Cypress Setup"),(0,i.kt)("p",null,"Download the Cypress Interceptor Package and install it using NPM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @aichemy/wring-cypress-plugin\n")),(0,i.kt)("p",null,"For Cypress settings visit this link: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@aichemy/wring-cypress-plugin"},"https://www.npmjs.com/package/@aichemy/wring-cypress-plugin")))}d.isMDXComponent=!0}}]);