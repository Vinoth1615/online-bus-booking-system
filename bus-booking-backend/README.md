# 🚌 Online Bus Booking System

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2-green?style=for-the-badge&logo=springboot)
![Angular](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql)
![JWT](https://img.shields.io/badge/JWT-Auth-black?style=for-the-badge&logo=jsonwebtokens)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)

A full-stack online bus booking platform where passengers can search
routes, select seats and confirm bookings — all through a clean,
responsive Angular interface secured with JWT authentication.

---

## ✨ Features

- 🔐 JWT-based authentication with role-based access (Passenger & Admin)
- 🔍 Search buses by origin and destination
- 💺 Real-time seat selection with availability tracking
- 🎟️ Complete booking management (create & cancel)
- 👨‍💼 Admin panel for managing buses and routes
- 🐳 Docker-ready for consistent deployments

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 19, Bootstrap 5 |
| Backend | Java 17, Spring Boot 3.2 |
| Database | MySQL 8.0, Spring Data JPA |
| Security | Spring Security, JWT |
| DevOps | Docker, Docker Compose |

---

## 🗂️ Project Structure
```
online-bus-booking-system/
├── bus-booking-backend/        # Spring Boot REST API
│   ├── src/main/java/com/busapp/busbooking/
│   │   ├── controller/         # REST Controllers
│   │   ├── model/              # JPA Entities
│   │   ├── repository/         # Data Repositories
│   │   ├── service/            # Business Logic
│   │   ├── security/           # JWT & Spring Security
│   │   └── dto/                # Data Transfer Objects
│   └── src/main/resources/
│       └── application.properties
└── bus-booking-frontend/       # Angular SPA
    └── src/app/
        ├── components/         # UI Components
        ├── services/           # API Services
        └── interceptors/       # HTTP Interceptors
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.0+
- Maven 3.9+

### Backend Setup
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/online-bus-booking-system.git

# Navigate to backend
cd bus-booking-backend

# Configure database in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/bus_booking_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

# Run the application
mvn spring-boot:run
```

### Frontend Setup
```bash
# Navigate to frontend
cd bus-booking-frontend

# Install dependencies
npm install

# Start development server
ng serve
```

### Database Setup
```sql
CREATE DATABASE bus_booking_db;
```
Then import the schema from `database/schema.sql`

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login & get JWT token |

### Buses
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/buses` | Get all buses |
| POST | `/api/buses/admin/add` | Add new bus (Admin) |

### Schedules
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/schedules/search` | Search by origin & destination |
| GET | `/api/schedules` | Get all schedules |

### Bookings
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/bookings/create` | Create a booking |
| GET | `/api/bookings/user/{id}` | Get user bookings |
| PUT | `/api/bookings/cancel/{id}` | Cancel a booking |

---

## 🐳 Docker
```bash
# Run entire stack
docker-compose up --build
```

---

## 👨‍💻 Author

**Your Name**
- GitHub: (https://github.com/Vinoth1615)
- LinkedIn: (https://linkedin.com/in/vinothkumardeva)

---

⭐ Star this repo if you found it helpful!