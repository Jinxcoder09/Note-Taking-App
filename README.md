# Note-Taking-App

A simple and efficient note-taking application built with **Spring Boot** for the backend and **HTML, JavaScript** for the frontend.

## Features

✅ Create, Read, Update, and Delete (CRUD) notes  
✅ Store notes in a database using **Spring Data JPA**  
✅ RESTful API for seamless interaction  
✅ User-friendly interface with a responsive design  
✅ Uses **MySQL** as the database backend  


## Tech Stack

### Backend
- **Java 17**
- **Spring Boot 3.x**
- **Spring Data JPA**
- **Spring Web**
- **MySQL Database**

### Frontend
- **HTML, CSS, JavaScript**


## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Java 17** or later
- **Maven**
- **MySQL**
- **Git**

### Steps to Run Locally

#### 1️⃣ Clone the Repository
```
 git clone https://github.com/Jinxcoder09/Note-Taking-App.git
 cd Note-Taking-App
```

#### 2️⃣ Configure Database
`src/main/resources/application.properties` with your MySQL credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/note_app_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

#### 3️⃣ Build and Run the Backend
```
mvn clean package
mvn spring-boot:run
```
The backend will start on `http://localhost:8080`

#### 4️⃣ Run the Frontend
Open `Frontend/Note taking app.html` in a browser.

## API Endpoints
| Method |    Endpoint       |    Description      |
|--------|-------------------|---------------------|
| GET    |    `/api/notes`   | Fetch all notes     |
| POST   |    `/api/notes`   | Create a new note   |
| GET    | `/api/notes/{id}` | Get a specific note |
| PUT    | `/api/notes/{id}` | Update a note       |
| DELETE | `/api/notes/{id}` | Delete a note       |

## Contributing
Feel free to fork the repository, create a feature branch, and submit a pull request! 🚀


---

Happy Coding! ✨

 
