# Feedback API Server

This project is a simple feedback form server built with Node.js and Express, which uses Nodemailer to send feedback messages via email. The server is designed to handle POST requests with feedback data (name, phone, and message) and send it to a specified email address.

## Features

- Accepts POST requests with feedback data
- Sends feedback via email using Nodemailer
- Configurable through environment variables
- Deployed on Vercel

## Technologies Used

- Node.js
- Express
- Nodemailer
- Vercel

## Environment Variables

To configure the email service, you'll need the following environment variables:

- EMAIL_USER: The email address from which messages will be sent.
- EMAIL_PASS: The password or application-specific password for the email account.
- RECEIVER_EMAIL: The email address that will receive the feedback messages.
- PORT (optional): The port for the server (defaults to 3000).

You can set these variables in your .env file:

- EMAIL_USER=your-email@gmail.com
- EMAIL_PASS=your-email-password
- RECEIVER_EMAIL=recipient-email@gmail.com
- PORT=3000

## Installation

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

2. Navigate into the project directory:

cd your-repo-name

3. Install the dependencies:

npm install

4. Create a .env file in the root of your project and set up the required environment variables.

5. Run the server locally:

npm start

## Deployment

This project is set up for deployment on Vercel. Simply connect your GitHub repository to Vercel, and the platform will handle deployment automatically.

## API Endpoint

POST /api/feedback: Sends feedback data (name, phone, and message) via email.

Example request body:

{
"name": "John Doe",
"phone": "+1234567890",
"message": "Hello, I would like to inquire about your services."
}
