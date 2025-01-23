"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8278:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},l="Running API with Wringr AI",o={unversionedId:"APPS/API/apires",id:"APPS/API/apires",isDocsHomePage:!1,title:"Running API with Wringr AI",description:"JSON File Format Examples",source:"@site/docs/APPS/API/apires.md",sourceDirName:"APPS/API",slug:"/APPS/API/apires",permalink:"/Wring_docs/docs/APPS/API/apires",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Wringr AI and API",permalink:"/Wring_docs/docs/APPS/API/api"},next:{title:"REST API Test Structure",permalink:"/Wring_docs/docs/APPS/API/apiw"}},s=[{value:"JSON File Format Examples",id:"json-file-format-examples",children:[{value:"1. Simple JSON Structure",id:"1-simple-json-structure",children:[],level:3},{value:"2. JSON Structure with Expected Status and Multiple Parameters",id:"2-json-structure-with-expected-status-and-multiple-parameters",children:[],level:3},{value:"Here\u2019s an example of how to execute an API with parameters on the Wringr AI platform.",id:"heres-an-example-of-how-to-execute-an-api-with-parameters-on-the-wringr-ai-platform",children:[],level:3}],level:2},{value:"Execution Process",id:"execution-process",children:[],level:2},{value:"Additional Tips",id:"additional-tips",children:[],level:2}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-api-with-wringr-ai"},"Running API with Wringr AI"),(0,r.kt)("h2",{id:"json-file-format-examples"},"JSON File Format Examples"),(0,r.kt)("p",null,"Below are two examples of the JSON file structure you can upload as parameters."),(0,r.kt)("h3",{id:"1-simple-json-structure"},"1. Simple JSON Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appUrls": ["url"],\n  "customjson": ["{json}"],\n  "name": "Test Parameters"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default status code is set to ",(0,r.kt)("strong",{parentName:"li"},"200"),".  "),(0,r.kt)("li",{parentName:"ul"},"Parameters are, by default, treated as ",(0,r.kt)("strong",{parentName:"li"},"query")," parameters.  ")),(0,r.kt)("h3",{id:"2-json-structure-with-expected-status-and-multiple-parameters"},"2. JSON Structure with Expected Status and Multiple Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expect_status": 400,\n  "user_id": {\n    "value": "22c286cf-d146-4573-980e-e83372715293",\n    "in": "query"\n  },\n  "page": {\n    "value": "1",\n    "in": "query"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this case, ",(0,r.kt)("inlineCode",{parentName:"li"},"expect_status")," is set to 400, representing the anticipated status code when a required parameter is missing or invalid."),(0,r.kt)("li",{parentName:"ul"},"Each parameter is defined by a key (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"user_id"),") corresponding to the endpoint's parameter name."),(0,r.kt)("li",{parentName:"ul"},"The value field specifies the actual value of the parameter."),(0,r.kt)("li",{parentName:"ul"},"The in field denotes the parameter type (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),"). If not specified, it defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"query"),".")),(0,r.kt)("h3",{id:"heres-an-example-of-how-to-execute-an-api-with-parameters-on-the-wringr-ai-platform"},"Here\u2019s an example of how to execute an API with parameters on the Wringr AI platform."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Sessions Page "),(0,r.kt)("li",{parentName:"ol"},"Click on Upload button "),(0,r.kt)("li",{parentName:"ol"},"Click the New REST API Test")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(2671).Z})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The json is uploaded")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(7993).Z})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},'Navigate to the "Steps" section.'),(0,r.kt)("li",{parentName:"ol"},'Click on "Security" to configure the security settings.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(7653).Z})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Add Security Credentials")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-Type : application/json\nAuthorization : Bearer <token>\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(7185).Z})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Expand the ",(0,r.kt)("inlineCode",{parentName:"li"},"/projects/v1/{appid}")," endpoint, or choose any other relevant endpoint from the list to configure or test its parameters")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(4838).Z})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},'Click on "Add Parameters"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(8217).Z})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"You can either upload a JSON file containing the parameters or enter them manually.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "expect_status":200,\n    "params":{\n        "appUrls": [],\n        "customjson":{"tags":[]},\n        "name":"any_new_name_of_app"\n    }\n    \n}\n')),(0,r.kt)("p",null,"Here is how it looks after uploading"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(1397).Z})),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Now go ",(0,r.kt)("inlineCode",{parentName:"li"},"Enable selecting individual endpoints and methods")," and select which endpoints you want to run. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(4446).Z})),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Generate API Test"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(6554).Z})),(0,r.kt)("h2",{id:"execution-process"},"Execution Process"),(0,r.kt)("p",null,"To execute the steps for testing a project, follow the instructions below for setting up and running the tests in your terminal:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Zip File\nFirst, download the zip file containing the project. You can obtain it from the provided link.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the File\nOnce you've downloaded the zip file, extract it to a desired directory on your system.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the Project Directory"))),(0,r.kt)("p",null,"Open your terminal and navigate to the directory where you've extracted the zip file:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd /path/to/extracted/folder")),(0,r.kt)("p",null,"Replace /path/to/extracted/folder with the actual path to the extracted project directory."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Install Dependencies")),(0,r.kt)("p",null,"Next, install the required dependencies for the project. Run the following command in your terminal:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm i")),(0,r.kt)("p",null,"This will install all the necessary dependencies defined in the package.json file."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Run Tests")),(0,r.kt)("p",null,"Once the installation is complete, you can run the tests by executing:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm test")),(0,r.kt)("p",null,"This will run the tests and output the results in your terminal."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(517).Z})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Expected Output")),(0,r.kt)("p",null,"After running the tests, you should see the test results, including any pass or fail messages, depending on the outcomes of your tests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(5552).Z})),(0,r.kt)("p",null,"Example: "),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ozvqAIWJEZ0?si=29ajOo8HqT0d63fY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep in mind that ",(0,r.kt)("strong",{parentName:"li"},"all JSON must be well-formed")," and follow strict JSON syntax."),(0,r.kt)("li",{parentName:"ul"},"When uploading parameters via a file, ensure the file extension and content are valid JSON."),(0,r.kt)("li",{parentName:"ul"},"Always confirm the ",(0,r.kt)("strong",{parentName:"li"},"Content-Type")," header is set correctly, especially when sending JSON data."),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("strong",{parentName:"li"},"Security")," section to set global headers so that they don\u2019t have to be repeated for each endpoint.")),(0,r.kt)("hr",null))}u.isMDXComponent=!0},2671:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-1-47f7e2c437219fea3d2eddf955079004.png"},517:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-10-5f54983ff4b911d0c944d34a4a4b21fa.png"},5552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-11-a429aa03a362d957007ff659f1e8ae1e.png"},7993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-2-b83ddfcabb2ddc8d7d47d24d8187905b.png"},7653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-3-bddc44f46aa58696f88775572780188d.png"},7185:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-4-6c14a77c89f1466e7270b5320591c1f4.png"},4838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-5-1a9b391f8d1b1983c44d09025236312e.png"},8217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-6-39e7311edb1fe1e90a930f7c23379dbb.png"},1397:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-7-8dd84d6e702b89526a47008e23b87ab7.png"},4446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-8-c00af59826bf00f06d6f5124d4e79136.png"},6554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-run-9-2ced74a7b6f2ed0629d7d39e5a6d17da.png"}}]);