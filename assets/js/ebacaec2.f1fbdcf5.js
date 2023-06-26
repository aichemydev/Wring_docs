"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[511],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),g=o,d=f["".concat(l,".").concat(g)]||f[g]||p[g]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},505:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={},l="Key Flows",c={unversionedId:"Live Events/Key Flows",id:"Live Events/Key Flows",isDocsHomePage:!1,title:"Key Flows",description:"Key flows is a tool that allows to find the best test coverage among all tests generated from live events. By default, it groups tests that cover at least 20% of the most frequent webpage elements. Rel Cov % means relative coverage percentage and it shows the coverage of a test against other tests in the list.",source:"@site/docs/Live Events/Key Flows.md",sourceDirName:"Live Events",slug:"/Live Events/Key Flows",permalink:"/Wring_docs/docs/Live Events/Key Flows",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testsuites",permalink:"/Wring_docs/docs/Live Events/Testsuites"},next:{title:"Multiple Sessions with Pageviews",permalink:"/Wring_docs/docs/Live Events/Multiple sessions with Pageviews"}},u=[],p={toc:u};function f(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-flows"},"Key Flows"),(0,a.kt)("p",null,"Key flows is a tool that allows to find the best test coverage among all tests generated from live events. By default, it groups tests that cover at least 20% of the most frequent webpage elements. Rel Cov % means relative coverage percentage and it shows the coverage of a test against other tests in the list."),(0,a.kt)("p",null,"It uses a greedy algorithm and allows you to create a list that covers all tests, as well as generate several other metrics such as Rel Cov %."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(1089).Z})),(0,a.kt)("p",null,"Clicking the key flows button will display a test list of the corresponding keys used in live event sessions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(3086).Z})),(0,a.kt)("p",null,"By clicking on Filter, you can search your Covering tests in an interval of days (7 days to be exact). Key features of our test include URL checking, number and percentage coverage of main page elements, whether the test is being covered by the most frequent elements and much more."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(8401).Z})),(0,a.kt)("p",null,"Keys to coverage are organized into categories. To help you remember what steps you did to complete your coverage test, we added a video for each step. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(5018).Z})),(0,a.kt)("p",null,"You can also check number and percentage coverage of main page elements by selecting the exact cov. percentage you want. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(2813).Z})),(0,a.kt)("p",null,"The coverage percentage you can search are 20%, 50%, 70%, 90% and 100%.\nFor example, this is how it looks if you search 70% coverage. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(4332).Z})),(0,a.kt)("p",null,"The purpose of the video is to understand which steps are done and find out how you can optimize them. You can also run this test and download the results.\nThe idea is to see if the user can navigate through a simple learning experience, but while seeing the whole video. This way, you can also see if they understood what they were doing and if they did it correctly. This is prefered if the test is done from some other user (maybe a colleague)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pageview",src:n(2359).Z})))}f.isMDXComponent=!0},1089:function(e,t,n){t.Z=n.p+"assets/images/key-4510be9dfa81590f8b6520b3b969106a.png"},3086:function(e,t,n){t.Z=n.p+"assets/images/key1-b147dcc8c479e27b230539b05f32bafc.png"},8401:function(e,t,n){t.Z=n.p+"assets/images/key2-9e8c54e464a6f9690c1918af081bca41.png"},5018:function(e,t,n){t.Z=n.p+"assets/images/key3-4b564a8855a2b781901f626a65236f9f.png"},2359:function(e,t,n){t.Z=n.p+"assets/images/key4-63d7514131db8f0b3d5be5c74ff7669c.png"},2813:function(e,t,n){t.Z=n.p+"assets/images/key5-54a48efd68c4c98a8f0ec77ffe94a642.png"},4332:function(e,t,n){t.Z=n.p+"assets/images/key6-e988a045b7ed50fc71d3c49ed4c4af72.png"}}]);