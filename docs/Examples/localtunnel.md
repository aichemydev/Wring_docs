---
sidebar_position: 10
---

# Run Sessions with LocalTunnel

First, install localtunnel: [https://theboroer.github.io/localtunnel-www/](https://theboroer.github.io/localtunnel-www/). 

install Localtunnel globally (requires NodeJS) to make it accessible anywhere:
```
npm install -g localtunnel
```
Start a webserver on some local port (eg http://localhost:8080) and use the command line interface to request a tunnel to your local server:

```
lt --port 8080
```

You will receive a url, for example https://flkajsfljas.loca.lt, that you can share with anyone for as long as your local instance of lt remains active. Any requests will be routed to your local service at the specified port.

This is how it works using Wring. If you have a site locally that you want to try will be good. 

Once yoou install localhost, you can follow up with these steps: ```npm install -g localtunnel```

1. First you run your site - ```yarn start```

 ![LocalTunnel](/img/localtunnel_1.png)

2. If you check [http://localhost:3001](http://localhost:3001), you will see your site. 

 ![LocalTunnel](/img/localtunnel_2.png)

3. In another terminal, you can run it on localtunnel url

 ![LocalTunnel](/img/localtunnel_3.png)

4. If you go to the url given from terminal, it will open localtunnel site.

 ![LocalTunnel](/img/localtunnel_4.png)

5. In the localtunnel site, you will have to add your ip address. 

  ![LocalTunnel](/img/localtunnel_5.png)

6. And now you will see the site. 



