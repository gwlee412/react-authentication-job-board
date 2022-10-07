## IMPORTANT NOTE - can open the app with $ npm start, but for user authentication to run, must run command $ node server.js as seen here 
![Screenshot (2)](https://user-images.githubusercontent.com/110861093/194638321-d81bd9d6-4ca1-4750-bf6d-6a281969a041.png)
to have the express server working in order to receive login data

## How I worked on this project

My goal was to use NodeJs and Express to create user authentication in which the login data is stored in the sessionStorage 
* Built from scratch with React and MaterialUI for interface
* I used simple state to pull data from a separate jobs file to showcase an example

## How to navigate
* Here is an example of the server set up ![Screenshot (1)](https://user-images.githubusercontent.com/110861093/194638304-2af6dd81-5320-4570-bc15-eb4f27b354c9.png)
* Here is an example of Material UI styling and setup ![Screenshot (4)](https://user-images.githubusercontent.com/110861093/194638330-ddf6106e-1582-4ae4-98c4-d495e43ef291.png)

## Why I built this project this way and some challenges
* I used a personally built object array of job data instead of an API as the goal of this project was more to showcase user authentication and materialUI styling. API async await is shown in other projects
* A challenge included keeping users logged in when switching tabs and I believe this has to do with me using sessionStorage as seen in this screenshot.![Screenshot (3)](https://user-images.githubusercontent.com/110861093/194638336-f12e9abb-3441-4db8-947f-75374f4cfc44.png)
* This could be fixed by changing it to localStorage, but I had an error of the login page not consistently showing up when rerunning the app.
* some buttons and the search bars do not have functionality as that would require connecting to either my own database or an existing API, neither of which were the purpose of this project.

## In case you want to see the project without having to open up the app and run node server.js and cannot get past the login page
![Screenshot (5)](https://user-images.githubusercontent.com/110861093/194641248-1998426a-e89f-4f85-a032-2ce1583e5eb2.png)
![Screenshot (6)](https://user-images.githubusercontent.com/110861093/194641260-02a78548-4651-42ac-85ae-6d58e873c631.png)
![Screenshot (7)](https://user-images.githubusercontent.com/110861093/194641275-bf95313d-c385-41b4-a0d1-c89abda97403.png)




