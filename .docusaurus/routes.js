
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
    component: ComponentCreator('/Wring_docs/docs','a70'),
    routes: [
      {
        path: '/Wring_docs/docs/APPS/googlerecorder',
        component: ComponentCreator('/Wring_docs/docs/APPS/googlerecorder','322'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/How to create a Project',
        component: ComponentCreator('/Wring_docs/docs/APPS/How to create a Project','a68'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Projects Intro',
        component: ComponentCreator('/Wring_docs/docs/APPS/Projects Intro','699'),
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
        path: '/Wring_docs/docs/APPS/Wringr Project Tools',
        component: ComponentCreator('/Wring_docs/docs/APPS/Wringr Project Tools','25d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/Wringr Tests Genetation',
        component: ComponentCreator('/Wring_docs/docs/APPS/Wringr Tests Genetation','446'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/APPS/wringruirec',
        component: ComponentCreator('/Wring_docs/docs/APPS/wringruirec','bd6'),
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
        path: '/Wring_docs/docs/intro',
        component: ComponentCreator('/Wring_docs/docs/intro','9b1'),
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
        path: '/Wring_docs/docs/Test Languages/Cucumber/apiui',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/Cucumber/apiui','3ea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Languages/Cucumber/cucumber',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/Cucumber/cucumber','8bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Languages/Cucumber/Data Driven Tests',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/Cucumber/Data Driven Tests','16e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Languages/Cucumber/Fixtures',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/Cucumber/Fixtures','a5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Languages/format',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/format','e10'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Languages/playwright',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/playwright','243'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Languages/sensetalk',
        component: ComponentCreator('/Wring_docs/docs/Test Languages/sensetalk','f3d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Wringr/wringrgpt',
        component: ComponentCreator('/Wring_docs/docs/Wringr/wringrgpt','909'),
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
