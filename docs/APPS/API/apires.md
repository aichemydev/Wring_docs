---
sidebar_position: 2
---
# Running API with Wringr AI

## JSON File Format Examples

Below are two examples of the JSON file structure you can upload as parameters.

### 1. Simple JSON Structure

```json
{
  "appUrls": ["url"],
  "customjson": ["{json}"],
  "name": "Test Parameters"
}
```

- The default status code is set to **200**.  
- Parameters are, by default, treated as **query** parameters.  

### 2. JSON Structure with Expected Status and Multiple Parameters

```json
{
  "expect_status": 400,
  "user_id": {
    "value": "22c286cf-d146-4573-980e-e83372715293",
    "in": "query"
  },
  "page": {
    "value": "1",
    "in": "query"
  }
}
```
- In this case, `expect_status` is set to 400, representing the anticipated status code when a required parameter is missing or invalid.
- Each parameter is defined by a key (e.g., `user_id`) corresponding to the endpoint's parameter name.
- The value field specifies the actual value of the parameter.
- The in field denotes the parameter type (e.g., `query`). If not specified, it defaults to `query`.


### Here’s an example of how to execute an API with parameters on the Wringr AI platform.

1. Navigate to the Sessions Page 
2. Click on Upload button 
3. Click the New REST API Test

![API](/img/api-run-1.png)

4. The json is uploaded

![API](/img/api-run-2.png)

5. Navigate to the "Steps" section.
6. Click on "Security" to configure the security settings.

![API](/img/api-run-3.png)

7. Add Security Credentials

```
Content-Type : application/json
Authorization : Bearer <token>
```
![API](/img/api-run-4.png)

8. Expand the `/projects/v1/{appid}` endpoint, or choose any other relevant endpoint from the list to configure or test its parameters

![API](/img/api-run-5.png)

9. Click on "Add Parameters"

![API](/img/api-run-6.png)

10. You can either upload a JSON file containing the parameters or enter them manually.


```json
{
    "expect_status":200,
    "params":{
        "appUrls": [],
        "customjson":{"tags":[]},
        "name":"any_new_name_of_app"
    }
    
}
```

Here is how it looks after uploading

![API](/img/api-run-7.png)

11. Now go `Enable selecting individual endpoints and methods` and select which endpoints you want to run. 

![API](/img/api-run-8.png)

12. Click `Generate API Test`

![API](/img/api-run-9.png)

## Execution Process

To execute the steps for testing a project, follow the instructions below for setting up and running the tests in your terminal:

1. Download the Zip File
First, download the zip file containing the project. You can obtain it from the provided link.

2. Extract the File
Once you've downloaded the zip file, extract it to a desired directory on your system.

3. Navigate to the Project Directory

Open your terminal and navigate to the directory where you've extracted the zip file:

```cd /path/to/extracted/folder```

Replace /path/to/extracted/folder with the actual path to the extracted project directory.

4. Install Dependencies

Next, install the required dependencies for the project. Run the following command in your terminal:

```npm i```

This will install all the necessary dependencies defined in the package.json file.

5. Run Tests

Once the installation is complete, you can run the tests by executing:

```npm test```

This will run the tests and output the results in your terminal.

![API](/img/api-run-10.png)

6. Expected Output

After running the tests, you should see the test results, including any pass or fail messages, depending on the outcomes of your tests.

![API](/img/api-run-11.png)

Example: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/ozvqAIWJEZ0?si=29ajOo8HqT0d63fY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>




---
## Additional Tips

- Keep in mind that **all JSON must be well-formed** and follow strict JSON syntax.
- When uploading parameters via a file, ensure the file extension and content are valid JSON.
- Always confirm the **Content-Type** header is set correctly, especially when sending JSON data.
- Use the **Security** section to set global headers so that they don’t have to be repeated for each endpoint.
---
