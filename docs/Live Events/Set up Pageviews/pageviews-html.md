---
sidebar_position: 1
---

# JavaScript

This page of the Docs refers to our Live event's sessions.

## Installation

First, create a new project on [https://app.wring.dev](https://app.wring.dev). Once you click on Add new project, you will generate another modal with details on your project as Api Key, Server url and JS Snippet.

You get a JS snippet like this: 
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

### Add to your website & app

Paste this snippet within the `<head>` tags of your website - ideally just inside the closing `</head>` tag - on all pages that you wish to track.

#### What this code does
After adding the snippet to your website, it will automatically start to:

1. Capture $pageview events when a user visits a page
2. Track when users click on links or buttons
3. Record videos/sessions that you can play back
4. Run them as testcases with Wring



