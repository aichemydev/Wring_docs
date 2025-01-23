---
sidebar_position: 3
---

# REST API Test Structure

The following structure outlines a typical REST API test process, detailing the key components and how they are used to evaluate the test outcomes.

ENDPOINT: `/projects/v1/{appid}`
METHOD: DELETE
INPUT VALUES: `{}`
RESPONSE: 401
OUTPUT:
```json
{
  "status": "failed",
  "message": "Auth token failed verification",
  "response": null,
  "http_status": 401
}
```

CLASSIFICATION: False Negative

![API](/img/api-test-1.png)

## Key Terms and Explanation

1. **Endpoint:**

The URL path of the API being tested, representing the resource or service being accessed or modified. For example, /projects/v1/{appid} refers to the projects API with a dynamic application ID ({appid}).

2. **Method:**

The HTTP verb used in the API call (GET, POST, DELETE, etc.). It determines the action being performed on the resource. In this case, DELETE is used to remove a project.

3. **Input Values:**

Parameters or payload supplied with the API request. For this example, no input is provided ({}). In some cases, input values could include request body data or query parameters.

4. **Response:**

The HTTP status code returned after the API request. Common codes are:

- 200: OK (Request succeeded)
- 401: Unauthorized (Failed authentication)
- 404: Not Found (Resource not found)
- In this case, 401 indicates an authentication error.

5. **Output:**

The actual data or message returned by the API. This includes the test's status (failed), a descriptive message (Auth token failed verification), and the HTTP status code (401).

6. **Classification (optional):**

Classification compares the expected outcome with the actual response:

- False Negative: Indicates that the expected outcome was not achieved, even though the test should have passed.
- In this case, the test failed due to the token verification issue, which led to a classification of False Negative.


### Test Flow

**Output structure**

Example:
```Successfully go to the page https://aichemy2-dev-ed.my.salesforce.com/
Successfully fill field #username with value demo@ for step 3
Successfully pressed the button 2
Successfully fill field #username with value demo@quikly.dev for step 5
Trying different selectors
Failed to click on element
Failed to click on cookie banner
Clicked on the cookie banner button: Akceptuję
```

## Key Terms and Explanation

1. **Successfully {action} {step_number}:**

This indicates that the test successfully identified the element on the page and performed the intended action (e.g., filling a form field, clicking a button) without encountering any errors. The action was completed as expected.

2. **Trying different selectors:**

In automated testing, web elements often have multiple ways to be identified, such as IDs, classes, or XPath expressions. If the primary selector used in the test fails to locate an element, the system tries alternative selectors. This message appears when the test is unable to find the element using the primary selector and is attempting others to move forward with the test.

3. **Failed to click on element:**

This message appears when all attempts to interact with an element, using different selectors, have failed. It indicates that the test couldn't locate or click on the element, thus preventing further action.

4. **Failed to click on cookie banner:**

Many websites have cookie banners that block user interactions, potentially interfering with automated tests. If the test detects such a banner, it tries to close or dismiss it using various methods. If all attempts fail, this message will be displayed, signaling that the banner couldn't be closed.

5. **Clicked on the cookie banner button:**
This message confirms that the test successfully clicked on the cookie banner's dismiss button, closing it and allowing the test to proceed with the next actions on the page.