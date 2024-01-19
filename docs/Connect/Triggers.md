---
sidebar_position: 2
---

# Triggered runs

The Wring platform can execute test runs based on a trigger from an external
service. Currently, we support the following methods of triggers:

- GitHub: webhook trigger executed on a repository event (push)
- GitLab: webhook trigger executed on a repository event (push)
- manual: POST request trigger

### Adding a trigger

Add a trigger by navigating to the **Integration** tab and click on **Triggers**.

![trigger integrations](/img/triggers-1.png)

Click on the type of trigger you wish to set up, one of **GitHub**, **GitLab**,
or **POST request**. This brings up the following form:

![trigger setup form](/img/triggers-2.png)

Choose an existing previously uploaded Katalon XML, Selenium IDE, or Wring
Observer script that will be used to execute the test run when this trigger is
called. Set a name for the trigger, and an optional description. You may also
click on **Test run options** to see settings for the test run itself, including
tags and Wring test runner behavior options.

Click on the **Add webhook** button to add this new trigger and view important
information that will be needed by your trigger source.

![trigger execution info](/img/triggers-3.png)

The sections below contain instructions to add this trigger URL and secret for
GitHub, GitLab, and manual POST request.

### GitHub webhook

GitHub triggers are associated with repository events. You may add a new GitHub
trigger by navigating to the following URL in your repository settings:

```
https://github.com/{your github username}/{your github repository}/settings/hooks/new
```

Or click on the **Settings** tab in the top bar for your repository page, then
click on **Webhooks** in the left sidebar, then click on the **Add webhook**
button. On the subsequent page, fill in the **Trigger URL** and **Trigger
secret** form fields with the values from the Wring trigger setup page.

![github trigger repo setup](/img/triggers-4.png)

Click on **Add webhook**. GitHub will send a ping event to the Wring API to
confirm the webhook URL works correctly.

![github trigger test](/img/triggers-5.png)

To test the trigger execution, make a commit to your repository and push it to
Github. A webhook will be sent to the Wring API by GitHub, and a test run with
your chosen script and options will be queued and start executing immediately on
an available Wring runner. On GitHub's side, you can see recent webhook
deliveries and the response from the Wring API by clicking on the webhook and
then click on the **Recent Deliveries** tab.

![github trigger info](/img/triggers-6.png)

On Wring's side, you can see the executed run in the list of test runs with
appropriate tags marking it as a webhook triggered run.

![github trigger test run](/img/triggers-7.png)

### GitLab webhook

Click on **GitLab** on the Wring trigger setup page and fill out the form.

![gitlab trigger setup](/img/triggers-8.png)

GitLab triggers are also associated with repository events. You may add a new
GitLab trigger by navigating to the following URL in your repository settings:

```
https://gitlab.com/{your gitlab organization}/{your gitlab project repo}/-/hooks
```

Or click on **Settings** > **Webhooks** in the left sidebar on your repository
page. On the subsequent page, fill in the **Trigger URL** and **Trigger secret**
form fields with the values from the Wring trigger setup page.

![gitlab trigger repo setup](/img/triggers-9.png)

Click on **Add webhook**. You can test your webhook directly from the list of
webhooks:

![gitlab trigger test](/img/triggers-10.png)

If successful, you should see a banner alert similar to the one below:

![gitlab trigger success](/img/triggers-11.png)

On the Wring side, you can see the executed run with the appropriate run tags
marking it as a GitLab triggered test run.

![gitlab trigger test runs](/img/triggers-12.png)

### POST request

Click on **POST Request** on the Wring trigger setup page and fill out the form.

![POST request setup](/img/triggers-13.png)

Save the provided credentials and use these in any shell script with `cURL` or
an HTTP request library for your programming language.

![POST request credentials](/img/triggers-14.png)

The example below shows usage with `cURL` to execute the trigger and `jq` to
pretty-print the returned JSON response from the Wring API.

![POST request execute trigger](/img/triggers-15.png)

On the Wring side, you can see the executed run with the appropriate run tags
marking it as a manual POST request triggered run.

![POST request test run](/img/triggers-16.png)

