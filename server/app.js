// Application File
// Justin Barlowe
// 06/16/2024

// Importing the express module
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

// Import swagger
const swaggerUi= require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// API Routes
const AppointmentsAPI = require('./routes/appointmentsAPI');
const RegisterAPI = require('./routes/registerAPI');
const LoginAPI = require('./routes/loginAPI');
const UsersAPI = require('./routes/usersAPI');
// Further API routes will be added here

// Import mongoDB database connection string from .env file.
const config = require('./utils/config');

// Express variable
const app = express();

// Express middleware for parsing JSON data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Appointment API',
      version: '1.0.0',
      description: 'Appointment App API Documentation',
  }
}
};

// Connect to swagger
app.use ("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// API Routes
app.use('/appointments', AppointmentsAPI);
app.use('/register', RegisterAPI);
app.use('/login', LoginAPI);
app.use('/users', UsersAPI);
// Further API routes will be added here

// Serve static files from the Angular app build directory.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});

// Connect to MongoDB
mongoose.connect
