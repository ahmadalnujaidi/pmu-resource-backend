# Academic Resource Management API with NestJS

A RESTful API for academic resource management built with NestJS, TypeORM, PostgreSQL, and AWS S3.

## Features

- User authentication with JWT
- Academic resource management:
  - Majors: Academic programs
  - Courses: Specific courses within majors
  - Professors: Faculty members teaching courses
  - Materials: Resources (notes, assignments, old exams) uploaded as PDFs, stored in Amazon S3
- Role-based access control:
  - Admin user (ahmadalnujaidi02@gmail.com) can create majors, courses, and professors
  - Authenticated users can upload materials
  - Public access to view materials

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database
- AWS account with S3 bucket

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env` and update the values

## Running the application

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## API Endpoints

### Base URL: `/api`

#### Authentication
- **POST** `/auth/register` - Register a new user
- **POST** `/auth/login` - Login and get JWT token
- **GET** `/users/me` - Get current user profile (protected)

#### Majors (Admin only)
- **POST** `/majors` - Create a new major
- **GET** `/majors` - Get all majors
- **GET** `/majors/:id` - Get a major by ID

#### Courses (Admin only)
- **POST** `/courses` - Create a new course
- **GET** `/courses` - Get all courses
- **GET** `/courses/:id` - Get a course by ID

#### Professors (Admin only)
- **POST** `/professors` - Create a new professor
- **GET** `/professors` - Get all professors
- **GET** `/professors/:id` - Get a professor by ID

#### Materials
- **POST** `/materials` - Upload a material (authenticated users)
- **GET** `/:majorTitle/:courseName/:professorName/:type` - Get materials by major, course, professor, and type (public)

## Database Schema

The application uses the following database schema:

- **users**: User accounts
- **majors**: Academic programs
- **courses**: Specific courses
- **professors**: Faculty members
- **materials**: Resources (notes, assignments, old exams)
- **major_course**: Junction table for majors and courses (many-to-many)
- **course_professor**: Junction table for courses and professors (many-to-many)

## AWS S3 Integration

The application uses AWS S3 to store PDF files. The S3 URL is stored in the database.

## License

This project is licensed under the MIT License. 