# MediLink - Appointment Scheduling System

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Introduction
MediLink is an appointment scheduling system designed to streamline the process of booking and managing appointments between patients and healthcare providers. This application is built with Angular 16 and leverages various third-party libraries to provide a seamless and efficient user experience.

## Features
- **Patient Portal:** View available time slots and book appointments.
- **Provider Portal:** Manage schedules and appointment requests.
- **Notifications:** Receive email or SMS reminders for upcoming appointments.
- **Calendar Integration:** Sync appointments with Google Calendar or Outlook.
- **Analytics:** Track appointment trends and provider availability.

## Technologies Used
- **Front-End:** Angular 16, Angular Material, Bootstrap
- **Back-End:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Passport.js, JWT
- **Notifications:** Nodemailer, Twilio
- **Calendar Integration:** Google Calendar API, Microsoft Graph API
- **Real-Time Updates:** Socket.io
- **Date Management:** Date-fns

## Installation
### Prerequisites
- Node.js (v14.x or higher)
- Angular CLI (v16.x or higher)
- MongoDB

### Steps
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/medilink.git
    cd medilink
    ```

2. **Install dependencies for the client and server:**
    ```bash
    # For the client
    cd client
    npm install

    # For the server
    cd ../server
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the `server` directory and add the following variables:
    ```bash
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    EMAIL_SERVICE=your_email_service
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    TWILIO_SID=your_twilio_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    GOOGLE_CALENDAR_API_KEY=your_google_calendar_api_key
    MICROSOFT_GRAPH_API_KEY=your_microsoft_graph_api_key
    ```

4. **Run the development server:**
    ```bash
    # Start the client
    cd client
    ng serve

    # Start the server
    cd ../server
    npm start
    ```

5. **Open your browser:**
   Navigate to `http://localhost:4200` to see the application in action.

## Usage
- **Patients:** Register and log in to view available time slots, book appointments, and receive notifications.
- **Providers:** Register and log in to manage schedules, approve or decline appointment requests, and sync with external calendars.

## API Documentation
### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

### Appointments
- `GET /api/appointments`: Get all appointments.
- `POST /api/appointments`: Create a new appointment.
- `PUT /api/appointments/:id`: Update an existing appointment.
- `DELETE /api/appointments/:id`: Delete an appointment.

### Notifications
- `POST /api/notifications/email`: Send an email notification.
- `POST /api/notifications/sms`: Send an SMS notification.

### Calendar Integration
- `POST /api/calendar/google/sync`: Sync appointments with Google Calendar.
- `POST /api/calendar/outlook/sync`: Sync appointments with Outlook.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
Justin Barlowe  
Email: justin.barlowe@proton.me  
Website: [justinbarlowe.com](http://www.justinbarlowe.com)
