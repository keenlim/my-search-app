# my-search-app

This repository contains the source code for an MVP (Minimum Viable Product) application designed to allow users to search for information on our website. The application comprises of the main components: 
1. **Frontend**: A React.js-based frontend that presents that fetch and display search results according to mockup and provide typeahead suggestions dropdown for searchbar. 

### Features 
1. Task 1: As a user, I want to see results displayed when I search in the search bar
    - Perform Search and Display Results

2. Task2: As a user, I want to see suggestions in the search bar
    - Typeahead Suggestion Dropdown
    - Select Suggestion
    - 'X' Button in SearchBar
    - Click 'X' Button in SearchBar

### 📌 Technical Stack
<h2> 🤖 FrontEnd </h2>
<img alt = "Javascript" src = "https://img.shields.io/badge/Javascript-F7DF1E?logo=javascript&logoColor=black&style=flat"/>

<img alt = "React" src = "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat"/>

<h2>Prerequisites</h2>
Ensure you have the following installed on your local machine:

- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/get-docker/) (version 20.10.0 or higher)
- [Docker Compose](https://docs.docker.com/compose/install/) (version 1.27.0 or higher)

## Set up and Installation
1. Clone the repository 
```
git clone https://github.com/keenlim/my-search-app.git
cd my-search-app
```

2. To run the application:
- Build Docker Images
</br>

From the project's root directory, run:
```
docker-compose build
```

- Start Docker Containers
</br>

Run the following command to start all services defined in `docker-compose.yml`
```
docker-compose up
```

4. Access the Application
- Frontend: Open your browser and navigate to http://localhost:3000

5. To Stop the Application

To stop running the containers, press `Ctrl + C` in the terminal where `docker-compose up` is running. 

## Closing Thoughts
This is a simple application that aids in searching of information. This application is centered around a dynamic and itneractive search component that demonstrates a strong commitment to delivering a user-friendly and efficinet search experience. 