# Education Microservices

This repository contains a set of microservices for an education platform. These microservices are designed to handle different aspects of the platform's functionality, such as managing courses, student information, and assessments.

This repository was developed by Saragozin Sara y Salguero Nexar

## Services

The repository includes the following microservices:

- **course-service**: Manages courses offered on the platform.
- **student-service**: Handles student-related operations.
- **assessment-service**: Manages assessments and grading.

Each service is containerized using Docker for easy deployment and scalability.

## Prerequisites

Before running these microservices, ensure you have the following installed:

- Docker: Version 19.03 or higher
- Docker Compose: Version 1.27 or higher

## Getting Started

To get these microservices up and running on your local machine or server, follow these steps:

1. **Clone the Repository:**

   git clone https://github.com/SaraSaragozin/education-microservices.git
   cd education-microservices

2. **Configuration:**

Update the configuration files (docker-compose.yml, environment variables, etc.) as per your requirements.

3. **Build and Run:**

Use Docker Compose to build and start the services:
    docker-compose up -d

4.**Accessing the Services:**

course-service: http://localhost:3001/courses
student-service: http://localhost:3002/students
assessment-service: http://localhost:3003/assessment

Replace localhost with your server's IP address or domain name if deploying on a remote server.

5.**Stopping the Services:**

To stop and remove the containers, use:
    docker-compose down

## Local Execution
1. **Clone the Repository:**

   git clone https://github.com/SaraSaragozin/education-microservices.git
   cd education-microservices

2. **Install Node.js and NPM:**

Ensure Node.js and NPM (Node Package Manager) are installed on your local machine. You can download them from nodejs.org and follow the installation instructions for your operating system.

3.**Install Project Dependencies:**

Navigate to your project directory and install the required dependencies using NPM:
    cd education-microservices
    npm install

4.**Set Up and Run index.js:**

Locate your index.js file or the main entry point of your Node.js application.
Open a terminal in Visual Studio Code (Ctrl+` or View > Terminal) and navigate to your project directory if not already there:

cd path/to/your/project
Run your Node.js application using:

node index.js

do it for each services: 

    /microservices/assassment-service
    node index.js

    /microservices/course-service
    node index.js

    /microservices/student-service
    node index.js

4.**Run index.html:**

Now in the folder frontend you can open the file index.html to see the information of microservices.

