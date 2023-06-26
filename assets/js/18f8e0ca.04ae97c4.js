"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[1210],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=n.createContext({}),l=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=i,b=c["".concat(g,".").concat(d)]||c[d]||p[d]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3937:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return g},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:2},g="Triggered runs",l={unversionedId:"tutorial-basics/Integrations/Triggers",id:"tutorial-basics/Integrations/Triggers",isDocsHomePage:!1,title:"Triggered runs",description:"The Wring platform can execute test runs based on a trigger from an external",source:"@site/docs/tutorial-basics/Integrations/Triggers.md",sourceDirName:"tutorial-basics/Integrations",slug:"/tutorial-basics/Integrations/Triggers",permalink:"/Wring_docs/docs/tutorial-basics/Integrations/Triggers",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/Wring_docs/docs/tutorial-basics/Integrations/Installation"},next:{title:"CI Integrations",permalink:"/Wring_docs/docs/tutorial-basics/Integrations/integration"}},u=[{value:"Adding a trigger",id:"adding-a-trigger",children:[],level:3},{value:"GitHub webhook",id:"github-webhook",children:[],level:3},{value:"GitLab webhook",id:"gitlab-webhook",children:[],level:3},{value:"POST request",id:"post-request",children:[],level:3}],p={toc:u};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"triggered-runs"},"Triggered runs"),(0,a.kt)("p",null,"The Wring platform can execute test runs based on a trigger from an external\nservice. Currently, we support the following methods of triggers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: webhook trigger executed on a repository event (push)"),(0,a.kt)("li",{parentName:"ul"},"GitLab: webhook trigger executed on a repository event (push)"),(0,a.kt)("li",{parentName:"ul"},"manual: POST request trigger")),(0,a.kt)("h3",{id:"adding-a-trigger"},"Adding a trigger"),(0,a.kt)("p",null,"Add a trigger by navigating to the ",(0,a.kt)("strong",{parentName:"p"},"Integration")," tab and click on ",(0,a.kt)("strong",{parentName:"p"},"Triggers"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger integrations",src:r(3618).Z})),(0,a.kt)("p",null,"Click on the type of trigger you wish to set up, one of ",(0,a.kt)("strong",{parentName:"p"},"GitHub"),", ",(0,a.kt)("strong",{parentName:"p"},"GitLab"),",\nor ",(0,a.kt)("strong",{parentName:"p"},"POST request"),". This brings up the following form:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger setup form",src:r(1019).Z})),(0,a.kt)("p",null,"Choose an existing previously uploaded Katalon XML, Selenium IDE, or Wring\nObserver script that will be used to execute the test run when this trigger is\ncalled. Set a name for the trigger, and an optional description. You may also\nclick on ",(0,a.kt)("strong",{parentName:"p"},"Test run options")," to see settings for the test run itself, including\ntags and Wring test runner behavior options."),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Add webhook")," button to add this new trigger and view important\ninformation that will be needed by your trigger source."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger execution info",src:r(1861).Z})),(0,a.kt)("p",null,"The sections below contain instructions to add this trigger URL and secret for\nGitHub, GitLab, and manual POST request."),(0,a.kt)("h3",{id:"github-webhook"},"GitHub webhook"),(0,a.kt)("p",null,"GitHub triggers are associated with repository events. You may add a new GitHub\ntrigger by navigating to the following URL in your repository settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://github.com/{your github username}/{your github repository}/settings/hooks/new\n")),(0,a.kt)("p",null,"Or click on the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab in the top bar for your repository page, then\nclick on ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," in the left sidebar, then click on the ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),"\nbutton. On the subsequent page, fill in the ",(0,a.kt)("strong",{parentName:"p"},"Trigger URL")," and ",(0,a.kt)("strong",{parentName:"p"},"Trigger\nsecret")," form fields with the values from the Wring trigger setup page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger repo setup",src:r(8388).Z})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),". GitHub will send a ping event to the Wring API to\nconfirm the webhook URL works correctly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger test",src:r(4726).Z})),(0,a.kt)("p",null,"To test the trigger execution, make a commit to your repository and push it to\nGithub. A webhook will be sent to the Wring API by GitHub, and a test run with\nyour chosen script and options will be queued and start executing immediately on\nan available Wring runner. On GitHub's side, you can see recent webhook\ndeliveries and the response from the Wring API by clicking on the webhook and\nthen click on the ",(0,a.kt)("strong",{parentName:"p"},"Recent Deliveries")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger info",src:r(840).Z})),(0,a.kt)("p",null,"On Wring's side, you can see the executed run in the list of test runs with\nappropriate tags marking it as a webhook triggered run."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger test run",src:r(6937).Z})),(0,a.kt)("h3",{id:"gitlab-webhook"},"GitLab webhook"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"GitLab")," on the Wring trigger setup page and fill out the form."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger setup",src:r(8353).Z})),(0,a.kt)("p",null,"GitLab triggers are also associated with repository events. You may add a new\nGitLab trigger by navigating to the following URL in your repository settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://gitlab.com/{your gitlab organization}/{your gitlab project repo}/-/hooks\n")),(0,a.kt)("p",null,"Or click on ",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," in the left sidebar on your repository\npage. On the subsequent page, fill in the ",(0,a.kt)("strong",{parentName:"p"},"Trigger URL")," and ",(0,a.kt)("strong",{parentName:"p"},"Trigger secret"),"\nform fields with the values from the Wring trigger setup page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger repo setup",src:r(8169).Z})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),". You can test your webhook directly from the list of\nwebhooks:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger test",src:r(8954).Z})),(0,a.kt)("p",null,"If successful, you should see a banner alert similar to the one below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger success",src:r(3807).Z})),(0,a.kt)("p",null,"On the Wring side, you can see the executed run with the appropriate run tags\nmarking it as a GitLab triggered test run."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger test runs",src:r(2681).Z})),(0,a.kt)("h3",{id:"post-request"},"POST request"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"POST Request")," on the Wring trigger setup page and fill out the form."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request setup",src:r(8559).Z})),(0,a.kt)("p",null,"Save the provided credentials and use these in any shell script with ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," or\nan HTTP request library for your programming language."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request credentials",src:r(6024).Z})),(0,a.kt)("p",null,"The example below shows usage with ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," to execute the trigger and ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," to\npretty-print the returned JSON response from the Wring API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request execute trigger",src:r(5869).Z})),(0,a.kt)("p",null,"On the Wring side, you can see the executed run with the appropriate run tags\nmarking it as a manual POST request triggered run."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request test run",src:r(297).Z})))}c.isMDXComponent=!0},3618:function(e,t,r){t.Z=r.p+"assets/images/triggers-1-01c3141899a6ec7dbb37bc248a71d272.png"},8954:function(e,t,r){t.Z=r.p+"assets/images/triggers-10-59aeecf9a5740c7fdb033d6f4c82e916.png"},3807:function(e,t,r){t.Z=r.p+"assets/images/triggers-11-9dac352c9702a521b1b4c74bf28a730e.png"},2681:function(e,t,r){t.Z=r.p+"assets/images/triggers-12-ad4d513ceef7f3626fd89ae1564c7fe5.png"},8559:function(e,t,r){t.Z=r.p+"assets/images/triggers-13-f116c90dcc798800020374354581b021.png"},6024:function(e,t,r){t.Z=r.p+"assets/images/triggers-14-32fc87d4e6b3d458e80c9a0a630eda18.png"},5869:function(e,t,r){t.Z=r.p+"assets/images/triggers-15-0c08904ea908fecd2b8599c573ff3ebf.png"},297:function(e,t,r){t.Z=r.p+"assets/images/triggers-16-01efebb786dadc8d32ba1d52fe3f7cdb.png"},1019:function(e,t,r){t.Z=r.p+"assets/images/triggers-2-cfa03d9bdbe7562b1756a531b4691ec7.png"},1861:function(e,t,r){t.Z=r.p+"assets/images/triggers-3-a99036eb3c6c173aeb6ec51cb4d39e98.png"},8388:function(e,t,r){t.Z=r.p+"assets/images/triggers-4-c0f29022a38893b64320c47dcf1eee1d.png"},4726:function(e,t,r){t.Z=r.p+"assets/images/triggers-5-be56ef6f0b85baa306af35c874a4eaf7.png"},840:function(e,t,r){t.Z=r.p+"assets/images/triggers-6-fc96724e3a48e1de3a07654d40819e78.png"},6937:function(e,t,r){t.Z=r.p+"assets/images/triggers-7-f94e6e83a1b77c7b7b91f3d0bbc45c69.png"},8353:function(e,t,r){t.Z=r.p+"assets/images/triggers-8-618f8e02809a99c5b855c1763f8baf11.png"},8169:function(e,t,r){t.Z=r.p+"assets/images/triggers-9-6a0d9be61d436202186798fe7f578ca7.png"}}]);