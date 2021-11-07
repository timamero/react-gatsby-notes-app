# 📓 Notes Application

A simple notes web application.
This application was created with React, Gatsby, and Typescript.

## 🚀 Quick Start
1. Clone this repository
```sh
git clone https://github.com/timamero/react-gatsby-notes-app.git
```
2. Install dependencies
```sh
npm install
```
3. Open the file package.json in the project folder and update the script for the server with the following script.
```json
"server": "json-server -p3001 --watch db.json",
```
4. Run the development server
```sh
npm run server
```
5. Start site
```sh
npm start
```

## 🧪 Testing
To run the tests, run the following commands.
1. Start development server (with test database) and site
```sh
npm run cypress:prestart
```
2. Run Cypress
```sh
npm run cypress
```