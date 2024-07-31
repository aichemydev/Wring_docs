---
sidebar_position: 2
---

This section serves as a comprehensive step-by-step guide for initiating your project. It provides detailed information on what actions to take, the methodology to follow, and the optimal timing for each step in the process.

To commence, the first step involves leveraging our intuitive yet robust Projects feature to seamlessly add a new project. This user-friendly functionality streamlines the project initiation process, ensuring a straightforward and powerful experience for users at every level of expertise.

*You can start by adding a new project with our simple yet powerful Projects feature.*

## How to create a Project in Projects?

Simplify your life and get Projects from Wring. Wring allows you to create a project from which you want to get Projects by going to `Set up Projects` and clicking on `Add new project`.

![Session Replay](/img/pag5.png)

Wring allows you to easily generate a project for your first-time build. After the Project is successfully created, the interface will resemble the following configuration:

![Session Replay](/img/pag6.png)

Copy the JS snippet from Wring and paste it into your html page.

 ```yml title="An Example - JS Snippet"
<script> !function(t,e){var o,n,p,r;e.__SV||(window.wring=e,e._i=[],e.init=function(i,s,a)
{function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function()
{t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}
(p=t.createElement("script")).type="text/javascript",p.async=!0,
p.src="https://wring.dev/assets/js/array.js",
(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);
var u=e;for(void 0!==a?u=e[a]=[]:a="wring",u.people=u.people||[],u.toString=function(t)
{var e="wring";return"wring"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function()
{return u.toString(1)+".people (stub)"},
o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),
n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},
e.__SV=1)}(document,window.wring||[]);wring.init('phc_mpnh4A9NHitMnJuC0xznUpFv2lNu75eGZZkgu6Jh617',
{advanced_capture_all_elements: true, enable_recording_console_log: true, api_host:'https://wes.wring.dev'}) </script> 
```

Wring is the all in one solution for your Projectlication and website. The single easiest way to get started with Wring is right within your terminal and go direct to your website/Projectlication.                                                            
Then run the following command:

1. ssh `https://name-of-site.dev`, in our case `https://demo-calendar.wring.dev`

![Session Replay](/img/pag7.png)

2. Navigate to where you have stored your website folder by using cd, for example: `cd ~/dev/demosites/demo1`

![Session Replay](/img/pag8.png)

3. Type `wim web/public/index.html` to go to your html page

![Session Replay](/img/pag9.png)

4. Copy/paste JS snippet from Wring platform into your html page. We suggest to put it in the header of your site.

![Session Replay](/img/pag10.png)

5. In Wring/Live Event tab you will see your project `Test`.


![Session Replay](/img/pag6.png)

Upon creating the Project, you will encounter a set of buttons, each serving a distinct purpose within the interface. Let's delve into the functionalities they offer:

![Session Replay](/img/pag11.png)

1. **Edit Project:**

- **Purpose:** Enables users to modify and update the configuration settings of the selected project.

- **Usage:** Clicking on this button opens an interface where you can make adjustments to project details, settings, or any other relevant parameters.

2. **Share Project:**

- **Purpose:** Facilitates collaboration by allowing users to share the project with colleagues within the organization.

- **Usage:** Clicking on this button initiates a sharing mechanism, enabling you to invite and grant access to specific colleagues, promoting collaborative work on the project.

3. **Delete Project:**

- **Purpose:** Permanently removes the selected project from the Project.

- **Usage:** Clicking on this button triggers a confirmation process, ensuring that you intend to delete the project. Once confirmed, the project and its associated data are irreversibly removed.


### Share your project with everyone​s

The latest addition to our feature set allows for seamless project collaboration. Now, you can effortlessly share your projects with colleagues, enabling them to utilize and manage these projects as if they were their own. This collaborative functionality extends to providing access for colleagues to view sessions and execute runs, fostering a collaborative testing environment within the Wring platform.

![Shared](/img/shared1.png)

Clicking on the second button opens a modal where you can input the email addresses to facilitate the sharing of the project.

![Shared](/img/shared2.png)

*It's important to note that the email addresses you input for project sharing should correspond to existing accounts on the Wring platform.*

![Shared](/img/shared3.png)

![Shared](/img/shared4.png)
