---
sidebar_position: 2
---

This section is a step-by-step guide to getting your first project. It includes information on what to do, how to do it and when you should do it.                                                                                                    
You can start by adding a new project with our simple yet powerful pageviews feature.

## How to create a Project in Pageviews?

Simplify your life and get apps from Wring. Wring allows you to create a project from which you want to get apps by going to `Set up pageviews` and clicking on `Add new project`.

![Pageview](/img/pag5.png)

Wring allows you to easily generate a project for your first-time build. Once you click on `Add new project`, you will generate another modal with details on your project as Api Key, Server url and JS Snippet.

![Pageview](/img/pag6.png)

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

Wring is the all in one solution for your application and website. The single easiest way to get started with Wring is right within your terminal and go direct to your website/application.                                                            
Then run the following command:

1. ssh `https://name-of-site.dev`, in our case `https://demo-calendar.wring.dev`

![Pageview](/img/pag7.png)

2. Navigate to where you have stored your website folder by using cd, for example: `cd ~/dev/demosites/demo1`

![Pageview](/img/pag8.png)

3. Type `wim web/public/index.html` to go to your html page

![Pageview](/img/pag9.png)

4. Copy/paste JS snippet from Wring platform into your html page. We suggest to put it in the header of your site.

![Pageview](/img/pag10.png)

5. In Wring/Live Event tab you will see your project `Pageview Example`.


![Pageview](/img/pag11.png)
