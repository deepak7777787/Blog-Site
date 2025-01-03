
# React App Setup Guide

This guide will help you set up a React application, install dependencies, and start working with a local database using JSON Server.

## Prerequisites

1. Install **Node.js** from the [official website](https://nodejs.org/en/).  
2. Verify the installation by checking the version of Node.js:
   ```bash
   node -v
## Steps to Create and Run Your React App

1. Create a New React App. 
Navigate to your workspace (e.g., Desktop or any folder) and run the following command:
    ```bash 
    npx create-react-app my-app
2. Navigate to Your App Directory. 
After the installation is complete, move into the newly created app directory:
    ```bash
    cd my-app
3. Start Your App. 
Run the following command to start the development server and see your app live on localhost:
    ```bash
    npm start
## Install React Router

1. To use routing in your app, install react-router-dom:
    ```bash
    npm install react-router-dom@6
## Setting Up JSON Server

1. Create a db.json file in your project folder with the data you want to use.

2. Start JSON Server to fetch data from db.json:
    ```bash
    npx json-server --watch data/db.json --port 8000
3. Your JSON Server will be accessible at: http://localhost:8000