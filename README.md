# feedback-server
 Feedback Form Server
This project is a simple Node.js server using the Express framework and Nodemailer for handling feedback form submissions. The server processes user input from a form (name, phone, and message) and sends the details via email to a designated recipient.

Features:
Accepts form submissions with POST /feedback route.
Simple input validation (checks for missing name, phone, or message fields).
Sends feedback via Nodemailer using Gmail SMTP.
Cross-Origin Resource Sharing (CORS) enabled.
Environment variables support using dotenv for secure credentials management.
Prerequisites
Node.js installed
Gmail account credentials (or other SMTP provider)

Set up environment variables:
EMAIL_USER: your email address used for sending.
EMAIL_PASS: your email account password or app-specific password.
RECEIVER_EMAIL: email address that will receive the feedback.
