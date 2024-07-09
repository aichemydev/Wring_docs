"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[876],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3559:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},c="Scheduled Runs",u={unversionedId:"Connect/Scheduled",id:"Connect/Scheduled",isDocsHomePage:!1,title:"Scheduled Runs",description:"Wring is the easiest way to schedule your test runs for every day, every week, or any other days you want.",source:"@site/docs/Connect/Scheduled.md",sourceDirName:"Connect",slug:"/Connect/Scheduled",permalink:"/Wring_docs/docs/Connect/Scheduled",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CI Integrations",permalink:"/Wring_docs/docs/Connect/integration"},next:{title:"Getting Started",permalink:"/Wring_docs/docs/Connect/tutorial-extras/getting-started"}},d=[],s={toc:d};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduled-runs"},"Scheduled Runs"),(0,a.kt)("p",null,"Wring is the easiest way to schedule your test runs for every day, every week, or any other days you want."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(2335).Z})),(0,a.kt)("p",null,"To schedule a run, you have to fill all the fields, so it can be a proper scheduled run. You can run a scheduled run ",(0,a.kt)("inlineCode",{parentName:"p"},"once"),",",(0,a.kt)("inlineCode",{parentName:"p"},"daily"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"weekly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"monthly")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"use crontab expression")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(386).Z})),(0,a.kt)("p",null,"Schedule run provides two calendars ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple")," - Schedule one hour from your actual hour and it's available for three months.")),(0,a.kt)("p",null,"To start a scheduled run with ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple Calendar"),", check the video below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced")," - You can program start-end date and time by yourself.")),(0,a.kt)("p",null,"Once you add a scheduled run, you will see the screen below. You can schedule different days of the week or different times of day."),(0,a.kt)("p",null,"If the test is scheduled with ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple calendar")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integrations",src:n(3437).Z})),(0,a.kt)("p",null,"If the test is scheduled with ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced calendar")," :"))}p.isMDXComponent=!0},386:function(e,t,n){t.Z=n.p+"assets/images/run-368fda6dc5c7241c9a8d2bec6efdc3a8.png"},2335:function(e,t,n){t.Z=n.p+"assets/images/scheduled-19854e022dcb22b8041262018ad3a2d6.png"},3437:function(e,t,n){t.Z=n.p+"assets/images/simplee-da2855f42a8634f7e613e3d053ebab80.png"}}]);