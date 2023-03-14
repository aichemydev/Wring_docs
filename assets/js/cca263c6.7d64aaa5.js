"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[7293],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,g=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8673:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:2},l="Customizing Interceptor Execution",p={unversionedId:"tutorial-extras/customizing-interceptor",id:"tutorial-extras/customizing-interceptor",isDocsHomePage:!1,title:"Customizing Interceptor Execution",description:"You may set the following environment variables to customize how the Interceptor",source:"@site/docs/tutorial-extras/customizing-interceptor.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/customizing-interceptor",permalink:"/Wring_docs/docs/tutorial-extras/customizing-interceptor",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Wring_docs/docs/tutorial-extras/getting-started"},next:{title:"Selenium JS Examples",permalink:"/Wring_docs/docs/Examples/Selenium-JS"}},u=[{value:"Supported Commands",id:"supported-commands",children:[],level:2},{value:"Support for Test Suites",id:"support-for-test-suites",children:[],level:2}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customizing-interceptor-execution"},"Customizing Interceptor Execution"),(0,i.kt)("p",null,"You may set the following environment variables to customize how the Interceptor\npackage and our API heals your tests:"),(0,i.kt)("h2",{id:"supported-commands"},"Supported Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_ENABLED")," (set to '1' by default): Set this to \u20180\u2019 to make the\nInterceptor package behave exactly like normal Selenium, with no calls to the\nWring API for healing broken XPaths or CSS selectors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_SERVER_TIMEOUT")," (set to 600 by default): Sets how long to wait in\nseconds for each broken XPath or CSS selector to be healed by the Wring API.\nMost heals are complete within 30 seconds for uncomplicated web pages, but\nhighly complex web pages may take several minutes for the Wring API to return\na result for broken XPaths or CSS selectors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_FILTER_DISPLAYED")," (set to '1' by default): If set to \u20181\u2019, only currently\ndisplayed elements will be used to generate a snapshot of the current state of\na web page for the Wring API instead of all elements. This can greatly speed\nup processing for a highly complex web page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_FILTER_ENABLED")," (set to \u20181\u2019 by default): If set to \u20181\u2019, only currently\nenabled elements will be used to generate a snapshot of the current state of a\nweb page for the Wring API instead of all elements. This can greatly speed up\nprocessing for a highly complex web page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_NEIGHBOR_MAXDIST")," (set to ",(0,i.kt)("inlineCode",{parentName:"p"},"600.0")," by default): This sets the maximum\nradius in pixels of a circle centered around the original target web-element\nthat will be searched for candidates matching the target element on an updated\nweb-page when healing selectors is required. If set to a positive float value,\nthe Interceptor will search for candidate matches in a region defined by a\ncircle of the specified radius. If you're sure your elements don't move too\nmuch, setting this environment variable to a lower value can greatly speed up\nselector heal and suggest processing of complex pages. If you want to search\nthe entire page for potential candidates for healing selectors, set this to\n",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_HANDLE_FAILURE")," (set to 'exception' by default): If this is set to\n\u2018suggest-xpaths\u2019, broken XPaths or CSS selectors that are untrained (that were\nnot uploaded to the Wring API for training our learning algorithms on a\nworking version of the web page) will not immediately fail. The Wring API will\ninstead attempt to heal them in-place, and suggest alternative XPaths or CSS\nselectors that may select the element that was intended to be selected. This\nis not as powerful as our usual healing engine, but provides a reasonable\nfall-back option if all you have is a broken XPath/CSS selector and no way to\nget to the initial known-good state of an XPath/CSS selector in a Selenium\ntest.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_FAST_HEAL")," (set to '0' by default): Every time the Wring Interceptor\nencounters an XPath or CSS selector and the resulting element selection is\nsuccessful, it collects information on the element and the current state of\nthe web page to send to the Wring API for training our healing engine. This\nprocesssing can sometimes slow down your tests. If you\u2019ve already run a\ntraining session on web page for our API or you are sure that the state of a\ncurrently broken web page has not changed since your last test run, set this\nenvironment variable to \u20181\u2019 to skip this information collection."),(0,i.kt)("p",{parentName:"li"},"This variable is set to \u20180\u2019 by default to ensure the Wring API is always\nup-to-date on the latest state of the web page under test. Note that if the\nWring API detects that the web page contents have changed since its last\nsnapshot of the web page, it will not send stale healing results, in which the\nInterceptor will automatically collect all the required information to\nsnapshot the current state of the web page and send it to the API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_RESULT_JSON"),": if this environment variable is set, it should point to a\n.json file on disk where the results for successful XPath/CSS selector heals\nand suggestions from the Wring API will be saved. The file name will be\nprefixed with the test run request ID as assigned by the Wring API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_LOG_LEVEL"),": Set to one of \u20181\u2019 (debug), \u20182\u2019 (info, default), \u20183\u2019\n(warning), or \u20184\u2019 (error). This affects the verbosity of the Interceptor\nlogging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_RUN_NAME"),": Set this environment variable to specify a name for your test\nrun. This will show up in the Wring UI and allow you to correlate your test\nrun with its results using this name in addition to the test run ID assigned\nby the Wring API. By default, this is unset, and the interceptor attempts to\nset the name of the run using the test run filename.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_IGNORE"),": If you need to ignore healing on certain selectors, you can\nadd them to a ",(0,i.kt)("inlineCode",{parentName:"p"},".tgignore")," file and put the path of the file in this variable.\nOur interceptor will not try to heal those selectors. By default, the\ninterceptor looks for this file in the current working directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_TAKE_SCREENSHOTS")," (set to '1' by default): If you set this to '0', the\ninterceptor will not take any screenshots during the entire process. You can\nchoose this if you do not want screenshots of your application being saved\nanywhere.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_ALL_SUGGEST")," (set to '0' by default): Set this variable to 1 when you\nwish to collect a list of suggested xpaths for every element of the pages\nvisited in a test run. This is accompanied with element descriptions and\nscreenshots.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_USE_ATTRIBUTES"),": Set this variable to a comma-separated list of strings\nto provide HTML attributes to the Wring API that it should preferentially use\nwhen generating selector suggestions and healed selectors. For example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"TG_USE_ATTRIBUTES=data-test-id,data-test")," will make sure the API considers\nthese attributes when generating selectors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_IGNORE_ATTRIBUTES"),": Set this variable to a comma-separated list of\nstrings to provide HTML attributes to the Wring API that it should avoid when\ngenerating selector suggestions and healed selectors. For example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"TG_USE_ATTRIBUTES=id,class")," will make sure the API does not use these\nattributes at all when generating selectors. This is most useful when\nattributes for elements are automatically generated by Single-Page-Application\n(SPA) framework like React or Angular. In this case, you can provide hints for\nmore stable attributes to be used when generating selectors."))),(0,i.kt)("h2",{id:"support-for-test-suites"},"Support for Test Suites"),(0,i.kt)("p",null,"If your test scripts are grouped together in test suites, you can replicate this organization\nwhen you use the Wring API with the interceptor. The Wring API organizes test scripts\nthat are associated with test suites using the following hierarchy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test suite"),": represents a group of test scripts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test suite run"),": represents a single execution of all test scripts in the test suite in a specified order",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"test script"),": a single test script file")))))),(0,i.kt)("p",null,"Set the environment variables below before your ",(0,i.kt)("strong",{parentName:"p"},"test script")," run to associate it with\na test suite."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_SUITE"),": Set this variable if your ",(0,i.kt)("strong",{parentName:"p"},"test script")," is intended to run as part of\na ",(0,i.kt)("strong",{parentName:"p"},"test suite"),". The Wring API will search for a ",(0,i.kt)("strong",{parentName:"p"},"test suite")," in your account with the name\nprovided here, and create one if it doesn't exist. All ",(0,i.kt)("strong",{parentName:"p"},"test scripts")," that use the same\n",(0,i.kt)("strong",{parentName:"p"},"test suite")," name will be grouped together by the API and in the Wring UI.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TG_SUITERUN"),": Set this variable if your ",(0,i.kt)("strong",{parentName:"p"},"test script")," is part of a ",(0,i.kt)("strong",{parentName:"p"},"test suite run"),".\nThe Wring API will search for a ",(0,i.kt)("strong",{parentName:"p"},"test suite run")," with the name provided here, and\ncreate one if it doesn't exist. All ",(0,i.kt)("strong",{parentName:"p"},"test scripts")," that use the same ",(0,i.kt)("strong",{parentName:"p"},"test suite run")," name\nwill be grouped together by the API and in the Wring UI."))),(0,i.kt)("p",null,"The consequences of setting one or both of these environment variables are described below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"TG_SUITE")," only:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("strong",{parentName:"li"},"test suite")," with the given name if one doesn't exist with this name"),(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("strong",{parentName:"li"},"test suite run")," named ",(0,i.kt)("em",{parentName:"li"},"Default test suite run")," associated with this ",(0,i.kt)("strong",{parentName:"li"},"test suite")),(0,i.kt)("li",{parentName:"ul"},"marks this ",(0,i.kt)("strong",{parentName:"li"},"test script")," as part of the new ",(0,i.kt)("strong",{parentName:"li"},"test suite run")," associated with this ",(0,i.kt)("strong",{parentName:"li"},"test suite")))),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"TG_SUITERUN")," only:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("strong",{parentName:"li"},"test suite")," named ",(0,i.kt)("em",{parentName:"li"},"Default test suite")," if it doesn't exist"),(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("strong",{parentName:"li"},"test suite run")," with the given name associated with this ",(0,i.kt)("strong",{parentName:"li"},"test suite")),(0,i.kt)("li",{parentName:"ul"},"marks this ",(0,i.kt)("strong",{parentName:"li"},"test script")," as part of the new ",(0,i.kt)("strong",{parentName:"li"},"test suite run")," associated with this new ",(0,i.kt)("strong",{parentName:"li"},"test suite")))),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"TG_SUITE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TG_SUITERUN"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("strong",{parentName:"li"},"test suite")," with the given name if it doesn't exist"),(0,i.kt)("li",{parentName:"ul"},"creates a new ",(0,i.kt)("strong",{parentName:"li"},"test suite run")," with the given name associated with this ",(0,i.kt)("strong",{parentName:"li"},"test suite")," if it doesn't exist"),(0,i.kt)("li",{parentName:"ul"},"marks this ",(0,i.kt)("strong",{parentName:"li"},"test script")," as part of the given ",(0,i.kt)("strong",{parentName:"li"},"test suite run")," associated with this ",(0,i.kt)("strong",{parentName:"li"},"test suite")))),(0,i.kt)("li",{parentName:"ul"},"Unset ",(0,i.kt)("inlineCode",{parentName:"li"},"TG_SUITE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"TG_SUITERUN")," (default):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this ",(0,i.kt)("strong",{parentName:"li"},"test script")," is not associated with a ",(0,i.kt)("strong",{parentName:"li"},"test suite")," or ",(0,i.kt)("strong",{parentName:"li"},"test suite run"))))))}h.isMDXComponent=!0}}]);