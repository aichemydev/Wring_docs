"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[3184],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2423:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},s="Deep Healing",c={unversionedId:"tutorial-extras/deep-healing",id:"tutorial-extras/deep-healing",isDocsHomePage:!1,title:"Deep Healing",description:"Healing vs Deep Healing",source:"@site/docs/tutorial-extras/deep-healing.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/deep-healing",permalink:"/Wring_docs/docs/tutorial-extras/deep-healing",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Customizing Interceptor Execution",permalink:"/Wring_docs/docs/tutorial-extras/customizing-interceptor"},next:{title:"Selenium JS Examples",permalink:"/Wring_docs/docs/Examples/Selenium-JS"}},u=[{value:"Healing vs Deep Healing",id:"healing-vs-deep-healing",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deep-healing"},"Deep Healing"),(0,o.kt)("h2",{id:"healing-vs-deep-healing"},"Healing vs Deep Healing"),(0,o.kt)("p",null,"Wring has two tiers of healing that can be used to fix broken selectors in your tests. "),(0,o.kt)("p",null,"Standard healing will process page information to resolve broken xpaths and css selectors. In this case, the Wring engine will use a snapshot of the current point in time to determine optimal healed selectors. "),(0,o.kt)("p",null,"Deep healing enables the Wring engine to use data from the entire lifecycle of the test. This allows Wring to make heals based on the result of the whole script and rewrite them. "),(0,o.kt)("p",null,"Benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This handles a wider range of situations compared to standard healing. One of these situations is when different broken xpaths may be healed to the same xpath.")),(0,o.kt)("p",null,"Drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deep healing requires intensive processing of the test which may result in longer test execution time.")))}f.isMDXComponent=!0}}]);