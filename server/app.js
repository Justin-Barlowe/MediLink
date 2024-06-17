// Application File
// Justin Barlowe
// 06/16/2024

// Importing the express module
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

// Import swagger
const swaggerUi= require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// API Routes
const AppointmentsAPI = require('./routes/appointmentsAPI');
// const RegisterAPI = require('./routes/registerAPI');
// const LoginAPI = require('./routes/loginAPI');
// const UsersAPI = require('./routes/usersAPI');
// Further API routes will be added here

// Import mongoDB database connection string from .env file.
const config = require('./utils/config');

// Express variable
const app = express();

// Include cors middleware to allow cross-origin requests.
app.use(cors());

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
  },
},
  apis: ['./routes/*.js'],
};

// Open API specification
const openapiSpecification = swaggerJsdoc(swaggerOptions);

// Connect to swagger
app.use ("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// API Routes
app.use('/api/appointments', AppointmentsAPI);
// app.use('/register', RegisterAPI);
// app.use('/login', LoginAPI);
// app.use('/users', UsersAPI);
// Further API routes will be added here

// Serve static files from the Angular app build directory.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});

// Connect to Database
mongoose.connect(config.dbConn).then(
  () => {
    console.log("Connection to the database was successful");
  },
  (err) => {
    console.log("MongoDB Error: " + err.message);
  }
);

// Catch errors in the connection
mongoose.connection.on("error", (err) => {
  console.log(config.mongoServerError + ": " + err.message);
});

// Alert if disconnected from the database
mongoose.connection.on("disconnected", () => {
  console.log("Server disconnected from host (MongoDB Atlas).");
});

// Set port to environment variable or 3000
const PORT = process.env.PORT || 3000;

// Connect to the express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the express app
module.exports = app;
