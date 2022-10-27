"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[1193],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,h=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3642:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Integrations",c={unversionedId:"tutorial-basics/Integrations",id:"tutorial-basics/Integrations",isDocsHomePage:!1,title:"Integrations",description:"Wring offers a variety of integrations and connectors for popular apps and platforms. This is where you can add new integrations and manage existing integrations.",source:"@site/docs/tutorial-basics/Integrations.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Integrations",permalink:"/Wring_docs/docs/tutorial-basics/Integrations",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Salesforce Import Data",permalink:"/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Salesforce"},next:{title:"Installation",permalink:"/Wring_docs/docs/tutorial-basics/Installation"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Get Started",id:"get-started",children:[{value:"Github",id:"github",children:[],level:3},{value:"Gitlab",id:"gitlab",children:[],level:3},{value:"Slack",id:"slack",children:[],level:3},{value:"Jenkins",id:"jenkins",children:[],level:3},{value:"CircleCI",id:"circleci",children:[{value:"Creating a New Configuration",id:"creating-a-new-configuration",children:[],level:4},{value:"Adding Wring to your Existing Configurations",id:"adding-wring-to-your-existing-configurations",children:[],level:4}],level:3},{value:"Travis CI",id:"travis-ci",children:[],level:3}],level:2},{value:"Managing Your Integrations",id:"managing-your-integrations",children:[],level:2},{value:"Scheduled runs",id:"scheduled-runs",children:[],level:2},{value:"Triggered runs",id:"triggered-runs",children:[{value:"Adding a trigger",id:"adding-a-trigger",children:[],level:3},{value:"GitHub webhook",id:"github-webhook",children:[],level:3},{value:"GitLab webhook",id:"gitlab-webhook",children:[],level:3},{value:"POST request",id:"post-request",children:[],level:3}],level:2}],u={toc:p};function g(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrations"},"Integrations"),(0,a.kt)("p",null,"Wring offers a variety of integrations and connectors for popular apps and platforms. This is where you can add new integrations and manage existing integrations."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The integrations page shows available integrations as cards located at the top of the integrations page. Below it, the table displays all active integrations for this user. You can use this table to manage user integrations. Different actions are available for different integrations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integrations",src:n(8892).Z})),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("h3",{id:"github"},"Github"),(0,a.kt)("p",null,"The Wring integration with Github enables fast and easy reporting to speed up issue creation. When a test that has been run on the Wring platform, fails, you can be immediately notified in your teams Github. Wring will open an issue with details about the test as well as the logs from the test run. This helps you stay on top of any errors and keep track of the progress."),(0,a.kt)("p",null,"To setup a Github integration, click on the Github card on. This will bring up a modal asking for some info to get started."),(0,a.kt)("p",null,"Please provide the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Github repository name"),(0,a.kt)("li",{parentName:"ul"},"Github repository owner"),(0,a.kt)("li",{parentName:"ul"},"Github token")),(0,a.kt)("h3",{id:"gitlab"},"Gitlab"),(0,a.kt)("p",null,"The Wring Gitlab integration can be used to keep track of your test runs in\nGitlab. To set this up you will need to provide a few things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gitlab Organization Name",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"There are a couple ways to get this. The organization name precedes the\nproject name in the list of projects. You can also get the organization\nname by selecting the project you want to integrate with and look in the url. This should contain the organization the project belongs to."))),(0,a.kt)("li",{parentName:"ul"},"Gitlab Project Name",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the name of the project you want to integrate with."))),(0,a.kt)("li",{parentName:"ul"},"Gitlab Access Token",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is the personal access token that you can create in Gitlab. This is\nrequired to create an issue in the project. Gitlab offers personal\naccess tokens which are tied to a user or gives you the option to\ncreate a project access token. For more information, please visit the\nGitlab documentation linked here:\n",(0,a.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"))))),(0,a.kt)("h3",{id:"slack"},"Slack"),(0,a.kt)("p",null,"The Wring Reporter Slack app keeps your team up to date with the status of your tests to a slack channel. Get started by selecting the Slack card on the integrations page. This will redirect you to slack where you will be prompted to accept permissions and select a slack channel to receive notifications to. Once you select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow")," button on Slack, you will be redirected back to the integrations page."),(0,a.kt)("h3",{id:"jenkins"},"Jenkins"),(0,a.kt)("p",null,"Automate your tests with Jenkins while taking advantage of the advanced healing and intelligence offered by Wring by integrating Jenkins with the Wring Interceptor. To configure this, select your Jenkins job and add a new build step in the build environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\ngit clone git@github.com:your_github_username/your_repo_name.git\ncd /repo/\nsource .jenkins-secrets\nexport TG_ANALYZER=1\ncd /repo/testlocation\nwget https://vision.Wring.dev/interceptor/download/secured/selenium-webdriver-20.11.0.Wringz?walToken=${WAL_TOKEN} -O selenium-webdriver-20.11.0.Wringz\nnpm install selenium-webdriver-20.11.0.Wringz\n# Run Tests Here\n")),(0,a.kt)("h3",{id:"circleci"},"CircleCI"),(0,a.kt)("p",null,"Use the Wring Interceptor with your CircleCI builds! Getting Started with CircleCI is easy."),(0,a.kt)("h4",{id:"creating-a-new-configuration"},"Creating a New Configuration"),(0,a.kt)("p",null,"If you are starting from scratch, we have a couple templates to help you get started."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="config.yml"',title:'"config.yml"'},"# Use the latest 2.1 version of CircleCI pipeline process engine.\n# See: https://circleci.com/docs/2.0/configuration-reference\nversion: 2.1\n\n# Orbs are reusable packages of CircleCI configuration that you may share across projects, enabling you to create encapsulated, parameterized commands, jobs, and executors that can be used across multiple projects.\n# See: https://circleci.com/docs/2.0/orb-intro/\norbs:\n  # See the orb documentation here: https://circleci.com/developer/orbs/orb/circleci/python\n  python: circleci/python@1.2\n  browser-tools: circleci/browser-tools@1.2.3\n\n# Define a job to be invoked later in a workflow.\n# See: https://circleci.com/docs/2.0/configuration-reference/#jobs\njobs:\n  build-and-test: # This is the name of the job, feel free to change it to better match what you're trying to do!\n    # These next lines defines a Docker executors: https://circleci.com/docs/2.0/executor-types/\n    # The executor is the environment in which the steps below will be executed - below will use a python 3.8 container\n    # Change the version below to your required version of python\n    docker:\n      - image: cimg/python:3.8\n    # Checkout the code as the first step.\n    # CircleCI will report the results back to your VCS provider.\n    steps:\n      - checkout\n      # This is where we install browsers which will be used later when running your tests.\n      - browser-tools/install-browser-tools:\n          chrome-version: 85.0.4183.102\n          firefox-version: 80.0.1\n      - run:\n          command: |\n            google-chrome --version\n            firefox --version\n          name: Check install\n      # From the browser-tools orb, we can install the necessary drivers to run tests on a browser.\n      # For more information on this orb, checkout this link: https://circleci.com/developer/orbs/orb/circleci/browser-tools\n      - browser-tools/install-chrome\n      - browser-tools/install-chromedriver\n\n      # Now, we will configure the Wring interceptor. Make sure to add your TG_TOKEN to your project secrets.\n      # For a full list of interceptor options check out the documentation: https://Wring.readthedocs.io/en/latest/externaluse.html\n      - run:\n          name: Download and Configure Wring Interceptor\n          command: |\n            wget https://Wringapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl\n            pip install selenium-20.11.0-py2.py3-none-any.whl -U\n            export TG_ANALYZER=1\n            export TG_TOKEN=$TG_TOKEN\n      - python/install-packages:\n          pkg-manager: pip\n          # app-dir: ~/project/package-directory/  # If your requirements.txt isn't in the root directory.\n          # pip-dependency-file: test-requirements.txt  # if you have a different name for your requirements file, maybe one that combines your runtime and test requirements.\n      - run:\n          name: Run tests\n          command: python reactbank_test_old.py\n\n# Invoke jobs via workflows\n# See: https://circleci.com/docs/2.0/configuration-reference/#workflows\nworkflows:\n  sample: # This is the name of the workflow, feel free to change it to better match your workflow.\n    # Inside the workflow, you define the jobs you want to run.\n    jobs:\n      - build-and-test\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You will need to add a TG_TOKEN to your project secrets on CircleCI. For more information, see the documentation for CircleCI setup here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://circleci.com/docs/2.0/env-vars/"},"CircleCI Documentation"))))),(0,a.kt)("h4",{id:"adding-wring-to-your-existing-configurations"},"Adding Wring to your Existing Configurations"),(0,a.kt)("p",null,"If you already have a config with CircleCI to run your Selenium Scripts, then the only thing you need to do is add a new run to configure the Wring Interceptor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="config.yml"',title:'"config.yml"'},"- run:\n    name: Download and Configure Wring Interceptor\n    command: |\n      wget https://Wringapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl\n      pip install selenium-20.11.0-py2.py3-none-any.whl -U\n      export TG_ANALYZER=1\n      export TG_TOKEN=$TG_TOKEN\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You will need to add a TG_TOKEN to your project secrets on CircleCI. For more information, see the documentation for CircleCI setup here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://circleci.com/docs/2.0/env-vars/"},"CircleCI Documentation"))))),(0,a.kt)("p",null,"This will now use the Wring interceptor as the default selenium package. To learn more about using the interceptor, see the documentation at:"),(0,a.kt)("h3",{id:"travis-ci"},"Travis CI"),(0,a.kt)("p",null,"Use the Wring Interceptor with Travis CI in a couple simple steps."),(0,a.kt)("p",null,"In this example, we setup the Wring Interceptor for Selenium Python."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'sudo: required\nlanguage: python\npython:\n  "3.8"\naddons:\n  chrome: stable\n\nbefore_install:\n- wget https://Wringapiutils.blob.core.windows.net/interceptor-packages/selenium-20.11.0-py2.py3-none-any.whl -O selenium-20.11.0-py2.py3-none-any.whl\n\nbefore_script:\n  - LATEST_CHROMEDRIVER_VERSION=`curl -s "https://chromedriver.storage.googleapis.com/LATEST_RELEASE"`\n  - curl "https://chromedriver.storage.googleapis.com/${LATEST_CHROMEDRIVER_VERSION}/chromedriver_linux64.zip" -O\n  - unzip chromedriver_linux64.zip -d ~/bin\n  - export PATH=$PATH:$PWD/chromedriver\n\nenv:\n  global:\n  - export TG_ANALYZER=1\n\ninstall:\n  - pip install selenium-20.11.0-py2.py3-none-any.whl -U\n  - pip install -r requirements.txt\n\nscript:\n  python reactbank_test_old.py\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You will need to add a TG_TOKEN to your project secrets on Travis CI. For more information, see the documentation provided by Travis CI here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.travis-ci.com/user/environment-variables/"},"Travis CI Documentation"))))),(0,a.kt)("h2",{id:"managing-your-integrations"},"Managing Your Integrations"),(0,a.kt)("p",null,"When you add an integration, ",(0,a.kt)("strong",{parentName:"p"},"this only applies to your user account"),". This offers flexibility for others on your team to select different integrations or set them up specific to their use case."),(0,a.kt)("p",null,"You can manage your personal integrations which will be displayed in the integrations table on the integrations tab. Here, each integration be displayed along with a button to edit the integration. Each integration will have different fields that you can edit but they will all allow you to enable/disable the integration"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Changing the status of the integration here will apply to all tests regardless of test specific settings."))),(0,a.kt)("p",null,"Some integrations can be deleted via our UI. This will remove your data from our database but please note any access tokens you may have generated on other platforms such as Github or Gitlab will ",(0,a.kt)("strong",{parentName:"p"},"need to be managed from those respective platforms"),"."),(0,a.kt)("p",null,"Other integrations such as Slack will need to be removed from those platforms."),(0,a.kt)("h2",{id:"scheduled-runs"},"Scheduled runs"),(0,a.kt)("p",null,"Wring allows you to schedule runs every time you want."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(2335).Z})),(0,a.kt)("p",null,"To schedule a run, you have to fill all the fields, so it can be a proper scheduled run. You can run a scheduled run ",(0,a.kt)("inlineCode",{parentName:"p"},"once"),",",(0,a.kt)("inlineCode",{parentName:"p"},"daily"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"weekly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"monthly")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"use crontab expression")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(386).Z})),(0,a.kt)("p",null,"Schedule run provides two calendars ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple")," - Schedule one hour from your actual hour and it's available for three months.")),(0,a.kt)("p",null,"To start a scheduled run with ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple Calendar"),", check the video below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(9882).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Advanced")," - You can program start-end date and time by yourself.")),(0,a.kt)("p",null,"To start a scheduled run with ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Calendar"),", check the video below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(7330).Z})),(0,a.kt)("p",null,"Here is how the Scheduled modal looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wring Dashboard",src:n(8864).Z})),(0,a.kt)("p",null,"After you add a scheduled run, you will see the screen below."),(0,a.kt)("p",null,"If the test is scheduled with ",(0,a.kt)("inlineCode",{parentName:"p"},"Simple calendar")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integrations",src:n(3437).Z})),(0,a.kt)("p",null,"If the test is scheduled with ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced calendar")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integrations",src:n(115).Z})),(0,a.kt)("p",null,"When it runs in the process on Wring, it will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integrations",src:n(1482).Z})),(0,a.kt)("h2",{id:"triggered-runs"},"Triggered runs"),(0,a.kt)("p",null,"The Wring platform can execute test runs based on a trigger from an external\nservice. Currently, we support the following methods of triggers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub: webhook trigger executed on a repository event (push)"),(0,a.kt)("li",{parentName:"ul"},"GitLab: webhook trigger executed on a repository event (push)"),(0,a.kt)("li",{parentName:"ul"},"manual: POST request trigger")),(0,a.kt)("h3",{id:"adding-a-trigger"},"Adding a trigger"),(0,a.kt)("p",null,"Add a trigger by navigating to the ",(0,a.kt)("strong",{parentName:"p"},"Integration")," tab and click on ",(0,a.kt)("strong",{parentName:"p"},"Triggers"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger integrations",src:n(3618).Z})),(0,a.kt)("p",null,"Click on the type of trigger you wish to set up, one of ",(0,a.kt)("strong",{parentName:"p"},"GitHub"),", ",(0,a.kt)("strong",{parentName:"p"},"GitLab"),",\nor ",(0,a.kt)("strong",{parentName:"p"},"POST request"),". This brings up the following form:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger setup form",src:n(1019).Z})),(0,a.kt)("p",null,"Choose an existing previously uploaded Katalon XML, Selenium IDE, or Wring\nObserver script that will be used to execute the test run when this trigger is\ncalled. Set a name for the trigger, and an optional description. You may also\nclick on ",(0,a.kt)("strong",{parentName:"p"},"Test run options")," to see settings for the test run itself, including\ntags and Wring test runner behavior options."),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Add webhook")," button to add this new trigger and view important\ninformation that will be needed by your trigger source."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"trigger execution info",src:n(1861).Z})),(0,a.kt)("p",null,"The sections below contain instructions to add this trigger URL and secret for\nGitHub, GitLab, and manual POST request."),(0,a.kt)("h3",{id:"github-webhook"},"GitHub webhook"),(0,a.kt)("p",null,"GitHub triggers are associated with repository events. You may add a new GitHub\ntrigger by navigating to the following URL in your repository settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://github.com/{your github username}/{your github repository}/settings/hooks/new\n")),(0,a.kt)("p",null,"Or click on the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab in the top bar for your repository page, then\nclick on ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," in the left sidebar, then click on the ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),"\nbutton. On the subsequent page, fill in the ",(0,a.kt)("strong",{parentName:"p"},"Trigger URL")," and ",(0,a.kt)("strong",{parentName:"p"},"Trigger\nsecret")," form fields with the values from the Wring trigger setup page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger repo setup",src:n(8388).Z})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),". GitHub will send a ping event to the Wring API to\nconfirm the webhook URL works correctly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger test",src:n(4726).Z})),(0,a.kt)("p",null,"To test the trigger execution, make a commit to your repository and push it to\nGithub. A webhook will be sent to the Wring API by GitHub, and a test run with\nyour chosen script and options will be queued and start executing immediately on\nan available Wring runner. On GitHub's side, you can see recent webhook\ndeliveries and the response from the Wring API by clicking on the webhook and\nthen click on the ",(0,a.kt)("strong",{parentName:"p"},"Recent Deliveries")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger info",src:n(840).Z})),(0,a.kt)("p",null,"On Wring's side, you can see the executed run in the list of test runs with\nappropriate tags marking it as a webhook triggered run."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github trigger test run",src:n(6937).Z})),(0,a.kt)("h3",{id:"gitlab-webhook"},"GitLab webhook"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"GitLab")," on the Wring trigger setup page and fill out the form."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger setup",src:n(8353).Z})),(0,a.kt)("p",null,"GitLab triggers are also associated with repository events. You may add a new\nGitLab trigger by navigating to the following URL in your repository settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://gitlab.com/{your gitlab organization}/{your gitlab project repo}/-/hooks\n")),(0,a.kt)("p",null,"Or click on ",(0,a.kt)("strong",{parentName:"p"},"Settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," in the left sidebar on your repository\npage. On the subsequent page, fill in the ",(0,a.kt)("strong",{parentName:"p"},"Trigger URL")," and ",(0,a.kt)("strong",{parentName:"p"},"Trigger secret"),"\nform fields with the values from the Wring trigger setup page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger repo setup",src:n(8169).Z})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),". You can test your webhook directly from the list of\nwebhooks:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger test",src:n(8954).Z})),(0,a.kt)("p",null,"If successful, you should see a banner alert similar to the one below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger success",src:n(3807).Z})),(0,a.kt)("p",null,"On the Wring side, you can see the executed run with the appropriate run tags\nmarking it as a GitLab triggered test run."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gitlab trigger test runs",src:n(2681).Z})),(0,a.kt)("h3",{id:"post-request"},"POST request"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"POST Request")," on the Wring trigger setup page and fill out the form."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request setup",src:n(8559).Z})),(0,a.kt)("p",null,"Save the provided credentials and use these in any shell script with ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," or\nan HTTP request library for your programming language."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request credentials",src:n(6024).Z})),(0,a.kt)("p",null,"The example below shows usage with ",(0,a.kt)("inlineCode",{parentName:"p"},"cURL")," to execute the trigger and ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," to\npretty-print the returned JSON response from the Wring API."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request execute trigger",src:n(5869).Z})),(0,a.kt)("p",null,"On the Wring side, you can see the executed run with the appropriate run tags\nmarking it as a manual POST request triggered run."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"POST request test run",src:n(297).Z})))}g.isMDXComponent=!0},7330:function(e,t,n){t.Z=n.p+"assets/images/Adv_S-a7aa9718cf900b13f1411074debe1a7a.gif"},8892:function(e,t,n){t.Z=n.p+"assets/images/Integrations-776dde3f60ebbf581700d94250c5a2c7.png"},9882:function(e,t,n){t.Z=n.p+"assets/images/Simple_Calendar-5963f573fa444e50107b2c13a6cf1118.gif"},8864:function(e,t,n){t.Z=n.p+"assets/images/advanced-b21b9df79efb32209f1adcc80609b4b9.png"},115:function(e,t,n){t.Z=n.p+"assets/images/advancedTest-79f14601314c075e26f7baeb3b80cf6c.png"},386:function(e,t,n){t.Z=n.p+"assets/images/run-16e87e2b0402ca95c40bff6872d57d9a.png"},2335:function(e,t,n){t.Z=n.p+"assets/images/scheduled-8c09f1c782bc65eca6135e6702c2ae77.png"},1482:function(e,t,n){t.Z=n.p+"assets/images/schrun-299d47d63196b1c1b20d1f3dcf00f446.png"},3437:function(e,t,n){t.Z=n.p+"assets/images/simplee-e717f5aad91a411058e4237615cb4755.png"},3618:function(e,t,n){t.Z=n.p+"assets/images/triggers-1-888c3ab6207fbeacbd8bfaf954401961.png"},8954:function(e,t,n){t.Z=n.p+"assets/images/triggers-10-59aeecf9a5740c7fdb033d6f4c82e916.png"},3807:function(e,t,n){t.Z=n.p+"assets/images/triggers-11-9dac352c9702a521b1b4c74bf28a730e.png"},2681:function(e,t,n){t.Z=n.p+"assets/images/triggers-12-ad4d513ceef7f3626fd89ae1564c7fe5.png"},8559:function(e,t,n){t.Z=n.p+"assets/images/triggers-13-f116c90dcc798800020374354581b021.png"},6024:function(e,t,n){t.Z=n.p+"assets/images/triggers-14-32fc87d4e6b3d458e80c9a0a630eda18.png"},5869:function(e,t,n){t.Z=n.p+"assets/images/triggers-15-0c08904ea908fecd2b8599c573ff3ebf.png"},297:function(e,t,n){t.Z=n.p+"assets/images/triggers-16-01efebb786dadc8d32ba1d52fe3f7cdb.png"},1019:function(e,t,n){t.Z=n.p+"assets/images/triggers-2-cfa03d9bdbe7562b1756a531b4691ec7.png"},1861:function(e,t,n){t.Z=n.p+"assets/images/triggers-3-a99036eb3c6c173aeb6ec51cb4d39e98.png"},8388:function(e,t,n){t.Z=n.p+"assets/images/triggers-4-c0f29022a38893b64320c47dcf1eee1d.png"},4726:function(e,t,n){t.Z=n.p+"assets/images/triggers-5-be56ef6f0b85baa306af35c874a4eaf7.png"},840:function(e,t,n){t.Z=n.p+"assets/images/triggers-6-fc96724e3a48e1de3a07654d40819e78.png"},6937:function(e,t,n){t.Z=n.p+"assets/images/triggers-7-f94e6e83a1b77c7b7b91f3d0bbc45c69.png"},8353:function(e,t,n){t.Z=n.p+"assets/images/triggers-8-618f8e02809a99c5b855c1763f8baf11.png"},8169:function(e,t,n){t.Z=n.p+"assets/images/triggers-9-6a0d9be61d436202186798fe7f578ca7.png"}}]);