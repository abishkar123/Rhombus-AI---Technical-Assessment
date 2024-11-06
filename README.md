# Data Type Inference Web Application

This project is a web application that processes CSV or Excel files to infer and convert data types using Python, Pandas, Django, and React. It allows users to upload files, perform data type conversions (numeric, datetime, categorical), and view the inferred data types in a user-friendly interface.

## Features
- Infers data types (e.g., numeric, datetime, categorical) using a threshold for categorical data conversion.
- Converts columns based on data characteristics, making it adaptable to various datasets.
- Frontend built in React for file upload and data display.

## Requirements

### Backend Requirements
- Python 3.x
- Django
- Django REST framework
- Pandas

### Frontend Requirements
- Node.js
- npm or yarn (for package management)

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
