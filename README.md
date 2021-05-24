<!-- PROJECT Header -->
<br />
<p align="center">
<h3 align="center">
    Django-React Portfolio
</h3>

  <p align="center">
    My personal website portfolio made with React, Django, PostgreSQL, and Webflow.
    <br />
    <a href="https://github.com/MichaelDoctor/Portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://michael-doctor.me/">View Website</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is an individual web application project that displays dynamically updated data.<br/>
The data is saved on a PostgreSQL database and is updated and managed by a Django REST API. <br/>
This project also includes a Contact Me feature and Swift blogs.

### Built With
* [React](https://reactjs.org/)
* [Django](https://www.djangoproject.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Webflow](https://webflow.com/)



<!-- GETTING STARTED -->
## Getting Started
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/MichaelDoctor/Portfolio.git
   ```
2. Change to root directory of project
   ```sh
   cd Portfolio
   ```

#### Frontend - React
3. Change to frontend directory
   ```sh
   cd frontend
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
   
#### Backend - Django
5. Change to root directory of project
   ```sh
   cd ..
   ```
6. Install pipenv dependencies
   ```sh
   pipenv install
   ```
7. Activate virtual environment
   ```sh
   pipenv shell
   ```
7. Change to local_settings directory, create, and enter env variables
   ```sh
   cd local_settings
   touch local_settings.py
   ```

<!-- USAGE EXAMPLES -->
## Usage
#### Frontend - React
1. Run app in development mode
   ```sh
   npm start
   ```
2. Build app for production
   ```sh
   npm run build
   ```
   
#### Backend - Django
1. Run the server
   ```sh
   python manage.py runserver
   ```
   or
   ```sh
   ./manage.py runserver
   ```
2. Create migrations
   ```sh
   ./manage.py makemigrations
   ```
3. Apply Migrations
   ```sh
   ./manage.py migrate
   ```
4. List migrations
   ```sh
   ./manage.py showmigrations
   ```
   
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [README Template](https://github.com/othneildrew/Best-README-Template)
* [Font Awesome](https://fontawesome.com)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
