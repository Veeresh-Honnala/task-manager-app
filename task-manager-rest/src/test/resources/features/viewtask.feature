#@positiveScenario
@smoke
Scenario: View Task Functionality

Given user navigates to task manager app
When do point list of tasks
Then it should load with list of tasks