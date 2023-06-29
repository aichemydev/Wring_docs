---
sidebar_position: 4
---

# Run Sessions with Ngrok


First, install ngrok: https://ngrok.com/download. You may need to sign up for their service, but it is free.

Next, run your app on localhost, for example:

```
npm run dev

  VITE v4.3.5  ready in 271 ms

  ➜  Local:   http://127.0.0.1:8000/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

 ![Ngrok](/img/ngrok_1.png)

 To make this available on the public internet, start ngrok and forward the
localhost port that is specified in the development server's message.
​
```
ngrok http 8000
```
 ![Ngrok](/img/ngrok_2.png)

 This will return something like:

 ![Ngrok](/img/ngrok_3.png)

This will return something like:
​
```
ngrok by @inconshreveable                                                                               (Ctrl+C to quit)
​
Session Status                online
Account                       your-email-address@email.com (Plan: Free)
Update                        update available (version 2.3.41, Ctrl-U to update)
Version                       2.3.40
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://BBB-XXX-YYY-ZZZ-AAA.ngrok-free.app -> http://localhost:8000
Forwarding                    https://BBB-XXX-YYY-ZZZ-AAA.ngrok-free.app -> http://localhost:8000
​
Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

 ![Ngrok](/img/Screenshot_3.png)

 The site will look like this: 

  ![Ngrok](/img/Screenshot_4.png)

Now, all you have to do is: 

1. Go to https://app.wring.dev 
2. Go to Test Runs
3. Open Add Test
4. Click on Advanced and put the link there (in our case: https://2168-161-38-13-167.ngrok-free.app/)

 ![Ngrok](/img/ngrok_4.png)

5. Now upload the file/session and run it. 








