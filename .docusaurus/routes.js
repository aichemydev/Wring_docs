
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
    component: ComponentCreator('/Wring_docs/docs','2f4'),
    routes: [
      {
        path: '/Wring_docs/docs/Examples/cypress',
        component: ComponentCreator('/Wring_docs/docs/Examples/cypress','97f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Examples/Selenium-Java',
        component: ComponentCreator('/Wring_docs/docs/Examples/Selenium-Java','87d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Examples/Selenium-JS',
        component: ComponentCreator('/Wring_docs/docs/Examples/Selenium-JS','95c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Examples/Selenium-Python',
        component: ComponentCreator('/Wring_docs/docs/Examples/Selenium-Python','6bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Examples/side',
        component: ComponentCreator('/Wring_docs/docs/Examples/side','efe'),
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
        path: '/Wring_docs/docs/Live Events/Get Started with Pageviews',
        component: ComponentCreator('/Wring_docs/docs/Live Events/Get Started with Pageviews','740'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Live Events/Key Flows',
        component: ComponentCreator('/Wring_docs/docs/Live Events/Key Flows','71a'),
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
        path: '/Wring_docs/docs/Live Events/Multiple sessions with Pageviews',
        component: ComponentCreator('/Wring_docs/docs/Live Events/Multiple sessions with Pageviews','b9f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/Live Events/Set Up Pageviews',
        component: ComponentCreator('/Wring_docs/docs/Live Events/Set Up Pageviews','0dd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/buttons',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/buttons','f06'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/TG Smart Observer/Get started - Build',
        component: ComponentCreator('/Wring_docs/docs/TG Smart Observer/Get started - Build','7da'),
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
        path: '/Wring_docs/docs/tutorial-basics/Integrations/integration',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Integrations/integration','007'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Integrations/Scheduled',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Integrations/Scheduled','c13'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Integrations/Triggers',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Integrations/Triggers','336'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Overview Page/overview',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Overview Page/overview','7bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Overview Page/TestSuite',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Overview Page/TestSuite','9f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test Runs/Details/Advanced',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test Runs/Details/Advanced','cbb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test Runs/Details/Run_steps',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test Runs/Details/Run_steps','82d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Datafile',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Datafile','6e6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Get Started',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Get Started','dc9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Salesforce',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Salesforce','894'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Simulator Runs',
        component: ComponentCreator('/Wring_docs/docs/tutorial-basics/Test Runs/Test Enhancer/Simulator Runs','f41'),
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
