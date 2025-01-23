"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3853:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Wringr and API",s={unversionedId:"APPS/API/api",id:"APPS/API/api",isDocsHomePage:!1,title:"Wringr and API",description:"Wringr AI allows you to create a new test specifically designed for REST API endpoints. It enables you to define the API's request details and validate its responses.",source:"@site/docs/APPS/API/api.md",sourceDirName:"APPS/API",slug:"/APPS/API/api",permalink:"/Wring_docs/docs/APPS/API/api",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Wringr Tests Generation",permalink:"/Wring_docs/docs/APPS/Wringr Tests Genetation"},next:{title:"Running API with Wringr AI",permalink:"/Wring_docs/docs/APPS/API/apires"}},l=[{value:"Uploading an Existing API Test",id:"uploading-an-existing-api-test",children:[],level:2},{value:"Exploring the API Endpoints",id:"exploring-the-api-endpoints",children:[],level:2},{value:"Adding Security (Headers and Auth Token)",id:"adding-security-headers-and-auth-token",children:[],level:2},{value:"Adding Parameters to Endpoints",id:"adding-parameters-to-endpoints",children:[],level:2},{value:"Expected Response Status",id:"expected-response-status",children:[],level:2},{value:"Parameter Types",id:"parameter-types",children:[],level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wringr-and-api"},"Wringr and API"),(0,r.kt)("p",null,"Wringr AI allows you to create a new test specifically designed for REST API endpoints. It enables you to define the API's request details and validate its responses."),(0,r.kt)("h2",{id:"uploading-an-existing-api-test"},"Uploading an Existing API Test"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Navigate to the Sessions Page:"))),(0,r.kt)("p",null,"Go to the Sessions page where all API testing sessions are managed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Click the Upload Button:"))),(0,r.kt)("p",null,"Look for the Upload button on the page and click it to reveal the available upload options."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Click the New REST API Test:"))),(0,r.kt)("p",null,"Allows you to set up a new test specifically for REST API endpoints. You can upload an API description file (e.g., JSON), define requests, validate responses, and simulate various scenarios for API testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(9074).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Uploaded test"))),(0,r.kt)("p",null,"Once you upload the test flow or API, it will appear as a new session or test case in the interface. This allows you to review the details, modify the test configurations, and run parameters as needed"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(3996).Z})),(0,r.kt)("h2",{id:"exploring-the-api-endpoints"},"Exploring the API Endpoints"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Navigate to the API Description Page:"))),(0,r.kt)("p",null,"Go to the API Description page, which provides a comprehensive list of all available endpoints in the uploaded API."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Expand Each Endpoint:"))),(0,r.kt)("p",null,"Click on each endpoint to view its HTTP method (e.g., GET, POST, PUT, DELETE) and a brief description of its functionality. This will help you understand what the endpoint does and how it can be used."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Explore Method Details:"))),(0,r.kt)("p",null,"Within each endpoint, expand further to access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Detailed Documentation:"))," Includes specifics about what the endpoint does, its expected behavior, and any notes for developers or testers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Parameters:"))," View and modify input parameters such as query strings, path variables, headers, or body content. You can customize these to simulate different scenarios and test cases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Responses:"))," Inspect the expected output, including status codes, headers, and body structure (e.g., JSON schema).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(4457).Z})),(0,r.kt)("h2",{id:"adding-security-headers-and-auth-token"},"Adding Security (Headers and Auth Token)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Access the Security Settings:"))),(0,r.kt)("p",null,"In the top-right corner of the interface, click on the Security button to configure security settings for your API tests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(6956).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Add Authorization and Headers:"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Auth Token:"))," Add an authentication token using the format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Authorization: Bearer <your-token>  \n")),(0,r.kt)("p",null,"This ensures secure access to the API, especially for endpoints requiring authentication."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Headers:"))," Define any additional headers that should be included with every request to the API. Examples include ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept"),", or custom headers required for your application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(6557).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Important Notes:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-Type:")," Ensure this header is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"),"to handle JSON data properly in your requests and responses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authorization Header:"),' Pay close attention to the format and case sensitivity (e.g., "Authorization" with a capital "A"). Mistakes in casing or formatting could result in failed authentication.')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save Your Settings:"))),(0,r.kt)("p",null,"Once you\u2019ve configured the headers and auth token, save the changes to apply them to all subsequent requests within the session."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(3992).Z})),(0,r.kt)("h2",{id:"adding-parameters-to-endpoints"},"Adding Parameters to Endpoints"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Select an Endpoint:"))),(0,r.kt)("p",null,"Navigate to the desired endpoint from the list and click on the Add Parameter option."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(2513).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Use the Parameter Modal:"))),(0,r.kt)("p",null,"A modal window will open, allowing you to configure parameters for the selected endpoint. You have two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Manual Entry:"))," Add parameters one by one by entering the key (parameter name) and value (data or value to be sent). This method is useful for quick edits or specific configurations.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(4833).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Upload a JSON File:"))," Upload a pre-prepared JSON file that contains multiple parameter values. This approach is ideal for batch uploads or reusing parameter sets across different endpoints.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API",src:n(450).Z})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save and Apply Parameters:"),"\nAfter adding or uploading parameters, save your changes to ensure they are applied to the selected endpoint. You can now proceed to test the endpoint with the specified parameters.")),(0,r.kt)("h2",{id:"expected-response-status"},"Expected Response Status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For each parameter input, you can define the expected status code for the corresponding endpoint."),(0,r.kt)("li",{parentName:"ul"},"This is particularly useful when specific parameters are required. If a parameter is missing or invalid, you can configure the expected status code to match the behavior outlined in the API method\u2019s documentation.")),(0,r.kt)("h2",{id:"parameter-types"},"Parameter Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default parameter type is ",(0,r.kt)("inlineCode",{parentName:"li"},"Query"),"."),(0,r.kt)("li",{parentName:"ul"},"Other supported types are ",(0,r.kt)("inlineCode",{parentName:"li"},"Path"),",",(0,r.kt)("inlineCode",{parentName:"li"}," Headers"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Body"),"."),(0,r.kt)("li",{parentName:"ul"},"You can specify the parameter type in the JSON structure, such as ",(0,r.kt)("inlineCode",{parentName:"li"},'"in": "query"'),", to indicate where the parameter should be included in the request.")),(0,r.kt)("p",null,"Once you\u2019ve completed all these steps, you can select the desired endpoint and start executing the tests."))}d.isMDXComponent=!0},2513:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-10-8fc75a7b68f8142bcb2eb41a5e1c3335.png"},4833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-11-b20309e2c997ae7e968ab3f65bb481e7.png"},450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-12-fff957ddd822f6fa99609796fcf24f25.png"},9074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-4-7ce964b95867effccd1a356e6e729d75.png"},3996:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-5-87ecf181a6f6c7761eefefa772e95d82.png"},4457:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-6-8dc4b722154517a39d0a45d6afca09a0.png"},6956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-7-a5e5837a971768d43eb8700061190d06.png"},6557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-8-e8ac4d03c1ba82d66f8ba4d78ca3199a.png"},3992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/api-9-ebdbbe5e8afdc2008ce6341b24f0e8b3.png"}}]);