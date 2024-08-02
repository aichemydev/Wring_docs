
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Wring_docs/__docusaurus/debug',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug','fd8'),
    exact: true
  },
  {
    path: '/Wring_docs/__docusaurus/debug/config',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug/config','e39'),
    exact: true
  },
  {
    path: '/Wring_docs/__docusaurus/debug/content',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug/content','a84'),
    exact: true
  },
  {
    path: '/Wring_docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug/globalData','544'),
    exact: true
  },
  {
    path: '/Wring_docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug/metadata','48d'),
    exact: true
  },
  {
    path: '/Wring_docs/__docusaurus/debug/registry',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug/registry','4fb'),
    exact: true
  },
  {
    path: '/Wring_docs/__docusaurus/debug/routes',
    component: ComponentCreator('/Wring_docs/__docusaurus/debug/routes','67a'),
    exact: true
  },
  {
    path: '/Wring_docs/blog/archive',
    component: ComponentCreator('/Wring_docs/blog/archive','fd1'),
    exact: true
  },
  {
    path: '/Wring_docs/markdown-page',
    component: ComponentCreator('/Wring_docs/markdown-page','23e'),
    exact: true
  },
  {
    path: '/Wring_docs/docs',
    component: ComponentCreator('/Wring_docs/docs','bbc'),
    routes: [
      {
        path: '/Wring_docs/docs/APPS/Api',
        component: ComponentCreator('/Wring_docs/docs/APPS/Api','da2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Appmap',
        component: ComponentCreator('/Wring_docs/docs/APPS/Appmap','3f5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Cucumber/apiui',
        component: ComponentCreator('/Wring_docs/docs/APPS/Cucumber/apiui','9a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Cucumber/cucumber',
        component: ComponentCreator('/Wring_docs/docs/APPS/Cucumber/cucumber','bf5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Cucumber/Data Driven Tests',
        component: ComponentCreator('/Wring_docs/docs/APPS/Cucumber/Data Driven Tests','bad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Cucumber/Fixtures',
        component: ComponentCreator('/Wring_docs/docs/APPS/Cucumber/Fixtures','191'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Get Started',
        component: ComponentCreator('/Wring_docs/docs/APPS/Get Started','af7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/playwright',
        component: ComponentCreator('/Wring_docs/docs/APPS/playwright','424'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Replay',
        component: ComponentCreator('/Wring_docs/docs/APPS/Replay','f34'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Set Up Apps',
        component: ComponentCreator('/Wring_docs/docs/APPS/Set Up Apps','8cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Step-by-Step',
        component: ComponentCreator('/Wring_docs/docs/APPS/Step-by-Step','7c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Testsuite',
        component: ComponentCreator('/Wring_docs/docs/APPS/Testsuite','9d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Connect/Installation',
        component: ComponentCreator('/Wring_docs/docs/Connect/Installation','54c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Dash',
        component: ComponentCreator('/Wring_docs/docs/Dash','3dd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/faq',
        component: ComponentCreator('/Wring_docs/docs/faq','976'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Google Recordings/googlerecorder',
        component: ComponentCreator('/Wring_docs/docs/Google Recordings/googlerecorder','2f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Google Recordings/wringruirec',
        component: ComponentCreator('/Wring_docs/docs/Google Recordings/wringruirec','b7a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/intro',
        component: ComponentCreator('/Wring_docs/docs/intro','9b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Pocket AI/extract',
        component: ComponentCreator('/Wring_docs/docs/Pocket AI/extract','148'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Pocket AI/intro',
        component: ComponentCreator('/Wring_docs/docs/Pocket AI/intro','a32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Pocket AI/miniext',
        component: ComponentCreator('/Wring_docs/docs/Pocket AI/miniext','0ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/release-notes',
        component: ComponentCreator('/Wring_docs/docs/release-notes','b60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/versions',
        component: ComponentCreator('/Wring_docs/docs/versions','cdf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Wring_docs/',
    component: ComponentCreator('/Wring_docs/','b36'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
