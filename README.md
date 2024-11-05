### This Rhombus.ai project based on django and react

## Geeting Started
## Prerequisties 
Make sure you have nodejs and npm installed on your machine.

## Installation 
1. Clone the repository:

   ```bash
   git clone https://github.com/abishkar123/Rhombus-AI---Technical-Assessment.git
   ```
## Frontend 

1. path:
   ```bash
   cd client 
   npm i
   npm run dev
   ```

## Runing Application
 ```bash
 npm run dev 
 ```

## backend

1. Create a virtual enviorment
  ```bash
   cd api 
   python -m venv venv
   ```
2. Activate the virtual enviorment for windows 
  ```bash
  source .venv/Scripts/activate
   ```
3. install the dependencies
  ```bash
  pip install -r requirement.txt
   ```
4. Run Migrations
  ```bash
  python manage.py migrate
   ```
## Runing Application
 ```bash
  python manage.py runserver
 ```

   
3. Clone the repository:
   Create a .env file in the root directory and add your environment variables. Refer to .env.example for the required variables.



 ## package and dependencies
 - **dotenv**: Load environment variables from a .env file.
 - **vite:** react build on vite for handling bundling 

 ## Dev Dependencies
- nodemon: Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
