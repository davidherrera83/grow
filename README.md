# grow
Javascript automation using Cypress IO
---
#Description
Automation example using the Grow online app. These tests are structured as to arrange the test environment, interact with differect types of elements with different actions, and making an assertion to verify the test criteria.

#Table of Contents
- Cypress IO
- Running Tests
- Test logic

#Cypress IO
I chose to use Cypress IO test suite for its ease of use for developers of any skill level and because it is a complete testing suite for Javascript. It combines libraries and testing frameworks that are common with Javascript (Mocha, Chai, etc.) Without Selenemium and with a built it test runner and recorder in a UI. (https://www.cypress.io/how-it-works/)

#Running Tests
Cypress not only creates a package json, but creates a cypress json to hold the tests and running the UI.

1. Copy the files found in the repo to a desired directory
2. Run terminal from that file location and execute: npm run cypress:open
3. Execute the tests from the test runner

#Test Logic
Test A: Expand Metric
For this test it was important for me to not just make assertions based on URL states but that the assert statement actually tested that dashboard element came back to view and existed.

Test D: Verify Dashboard
To verify that the number of tiles matched that of the number of tiles listed in the Dashboard settings I wanted to make sure that the number of tiles in the dashboard was held as a constant to then make the assertion that the number found in the settings matched the actual number in the created constant and not just that a value existed.
