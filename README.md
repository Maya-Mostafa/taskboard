# Taskboard
A simple task management app similar to Jira, Trello or Basecamp.

## Stories 
- Users can add new tasks to the task board  
- Details include name, description, deadline 
- Users can edit tasks and all details 
- Users can delete tasks 
- Users can drill into tasks to see all details

## Technical Requirements 
Use the following frameworks: 
1. React.js and its hooks API 
2. React router 
3. Material UI 
4. React Testing Library 
5. Jest 
6. LocalStorage to avoid data disappearing after reload

### Assumptions
- The taskboard is initialized (hard-coded) with 1 empty column named "Todo" that contains 0 tasks.
- Initially, the data is stored in local storage with key "taskboard"
- The task title(name) should be unique. It is used as an identifier for the task. A better solution for this is a generated unique id.
- The column name should be unique as it servers as a key for each groups of tasks.

### Notes
- The data structure for the taskboard is a Map, with the column name as a key, and the tasks as an array of objects with properties: name, deadline and description.
- The Home page is the taskboard itself.
- Unit tests are currently implemented for components only. To achieve better results, tests should be done also on router pages and local storage as mock functions.
- The data structure of the taskboard is implemented such that it is easy to add columns afterwards. This could be done by just adding a new key to the original Map. Also, the query done in the task details/edit task/new task is taking in consideration the column name as the key for the tasks.
- As an enhacement for the current implementation, it should be taken into consideration the deadline date to be always in the future.

