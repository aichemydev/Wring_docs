
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Wring_docs/blog',
    component: ComponentCreator('/Wring_docs/blog','0f4'),
    exact: true
  },
  {
    path: '/Wring_docs/blog/archive',
    component: ComponentCreator('/Wring_docs/blog/archive','fd1'),
    exact: true
  },
  {
    path: '/Wring_docs/blog/introducing-Wring',
    component: ComponentCreator('/Wring_docs/blog/introducing-Wring','9a6'),
    exact: true
  },
  {
    path: '/Wring_docs/blog/tags',
    component: ComponentCreator('/Wring_docs/blog/tags','976'),
    exact: true
  },
  {
    path: '/Wring_docs/blog/tags/introduction',
    component: ComponentCreator('/Wring_docs/blog/tags/introduction','1fe'),
    exact: true
  },
  {
    path: '/Wring_docs/markdown-page',
    component: ComponentCreator('/Wring_docs/markdown-page','23e'),
    exact: true
  },
  {
    path: '/Wring_docs/docs',
    component: ComponentCreator('/Wring_docs/docs','b47'),
    routes: [
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
        path: '/Wring_docs/docs/Live Events/Live Events',
        component: ComponentCreator('/Wring_docs/docs/Live Events/Live Events','8db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Enhancer/Datafile',
        component: ComponentCreator('/Wring_docs/docs/Test Enhancer/Datafile','401'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Enhancer/Get Started',
        component: ComponentCreator('/Wring_docs/docs/Test Enhancer/Get Started','aa1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Enhancer/Salesforce',
        component: ComponentCreator('/Wring_docs/docs/Test Enhancer/Salesforce','efb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Test Enhancer/Simulator Runs',
        component: ComponentCreator('/Wring_docs/docs/Test Enhancer/Simulator Runs','bb4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/Introduction',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/Introduction','f32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/recorder',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/recorder','e94'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/tests',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/tests','0ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/Tutorials',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/Tutorials','483'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/view',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/view','a9b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/congratulations','51a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Dashboard',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Dashboard','c6a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Installation',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Installation','45c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Integrations',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Integrations','0bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test-Explorer',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test-Explorer','b82'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-extras/Advanced',
        component: ComponentCreator('/Wring_docs/docs/tutorial-extras/Advanced','5af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-extras/customizing-interceptor',
        component: ComponentCreator('/Wring_docs/docs/tutorial-extras/customizing-interceptor','a7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-extras/deep-healing',
        component: ComponentCreator('/Wring_docs/docs/tutorial-extras/deep-healing','d73'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-extras/getting-started',
        component: ComponentCreator('/Wring_docs/docs/tutorial-extras/getting-started','492'),
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
