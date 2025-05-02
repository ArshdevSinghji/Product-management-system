## Product Management System
A full-stack product management system that allows users to manage products, 
filter them by price and gender, and perform admin-specific tasks like adding and listing products. 
The application is built using React for the frontend and Node.js with Express for the backend.

### Frontend
- User authentication (Signup and Login).
- Role-based access control (Admin and User roles).
- Product filtering by price and gender.
- UI with animations using Framer Motion.
- Admin-specific features:
  - Add new products.
  - View a list of all products.
 
### Backend
- RESTful API built with Node.js and Express.
- User authentication with JWT.
- Role-based middleware for admin-only routes.
- Product management endpoints (CRUD operations).
- Secure password storage using bcrypt.
- CORS enabled for cross-origin requests..

## Technologies Used

### Frontend
- React
- React Router
- Framer Motion
- Font Awesome
- CSS Modules

### Backend
- Node.js
- Express
- MongoDB (via Mongoose)
- JWT for authentication
- Bcrypt for password hashing

### Folder Structure
```sh
  frontend/
  ├── src/
  │   ├── component/
  │   │   ├── autheticate/   # Signup and Login components
  │   │   ├── page/          # Pages like Admin and ProductsList
  │   │   ├── ui/            # Navbar and other UI components
  │   ├── style/             # CSS Modules for styling
  │   ├── index.js           # React entry point
  ├── .env                   # Environment variables
  ├── package.json           # Frontend dependencies

  backend/
  ├── src/
  │   ├── controllers/       # Business logic for routes
  │   ├── middleware/        # Authentication and role-based access
  │   ├── models/            # Mongoose schemas
  │   ├── routes/            # API routes
  │   ├── utils/             # Utility functions (e.g., JWT generation)
  │   ├── server.js          # Entry point for the backend
  ├── .env                   # Environment variables
  ├── package.json           # Backend dependencies
```

## Setup Instructions
  1. Clone the Repository
    ```sh
     git clone https://github.com/your-username/zynetic.git
     cd zynetic
    ```
  2. Setup the Backend
     1. Navigate to the backend folder:
        ```sh
         cd backend
        ```
     2. Install dependencies:
        ```sh
         npm install
        ```
     3. Create a `.env` file in the backend `directory` and add the following:
        ```sh
         MONGO_URI=your-mongodb-connection-string
         JWT_SECRET=your-jwt-secret
         PORT=5000
        ```
     4. Start the backend server:
        ```sh
         npm start
        ```  
  4. Setup the Frontend
     1. Navigate to the frontend folder:
        ```sh
         cd ../frontend
        ```  
     2. Install dependencies:
        ```sh
         npm install
        ```  
     3. Create a `.env` file in the frontend `directory` and add the following:
        ```sh
         REACT_APP_API_BASE_URL=http://localhost:5000
        ```  
     4. Start the frontend development server:
        ```sh
         npm start
        ```
  ### API Endpoints

  ## Authentication
  - POST `/api/auth/signup` - Register a new user.
  - POST `/api/auth/login` - Log in a user.
  - POST `/api/auth/logout` - Log out a user.

  ## Products
  - GET `/api/admin/search` - Search for products with filters.
  - POST `/api/admin/create` - Add a new product (Admin only).

  ### Usage

  ## Admin Features
  - Log in as an admin.
    ```sh
    email : "admin@gmail.com"
    passowrd : 123456789
    ```
  - Navigate to the Admin Page.
  - Add new products or view the list of existing products.

  ## User Features
  - Log in as a user.
    ```sh
    email : "user@gmail.com"
    passowrd : 123456789
    ```
  - Filter products by price and gender.
  - View product details.
