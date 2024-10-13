 <h1>Feedback API Server</h1>
    <p>
        This project is a simple feedback form server built with <strong>Node.js</strong> and <strong>Express</strong>, 
        which uses <strong>Nodemailer</strong> to send feedback messages via email. The server is designed to handle 
        POST requests with feedback data (name, phone, and message) and send it to a specified email address.
    </p>

    <h2>Features</h2>
    <ul>
        <li>Accepts POST requests with feedback data</li>
        <li>Sends feedback via email using <strong>Nodemailer</strong></li>
        <li>Configurable through environment variables</li>
        <li>Deployed on <strong>Vercel</strong></li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a></li>
        <li><a href="https://expressjs.com/">Express</a></li>
        <li><a href="https://nodemailer.com/">Nodemailer</a></li>
        <li><a href="https://vercel.com/">Vercel</a></li>
    </ul>

    <h2>Environment Variables</h2>
    <p>
        To configure the email service, you'll need the following environment variables:
    </p>
    <ul>
        <li><strong>EMAIL_USER</strong>: The email address from which messages will be sent.</li>
        <li><strong>EMAIL_PASS</strong>: The password or application-specific password for the email account.</li>
        <li><strong>RECEIVER_EMAIL</strong>: The email address that will receive the feedback messages.</li>
        <li><strong>PORT</strong> (optional): The port for the server (defaults to <code>3000</code>).</li>
    </ul>
    <p>
        You can set these variables in your <code>.env</code> file:
    </p>
    <pre><code>

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
RECEIVER_EMAIL=recipient-email@gmail.com
PORT=3000
</code></pre>

    <h2>Installation</h2>
    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/your-username/your-repo-name.git</code></pre>

        <li>Navigate into the project directory:</li>
        <pre><code>cd your-repo-name</code></pre>

        <li>Install the dependencies:</li>
        <pre><code>npm install</code></pre>

        <li>Create a <code>.env</code> file in the root of your project and set up the required environment variables.</li>

        <li>Run the server locally:</li>
        <pre><code>npm start</code></pre>
    </ol>

    <h2>Deployment</h2>
    <p>
        This project is set up for deployment on <strong>Vercel</strong>. Simply connect your GitHub repository to Vercel,
        and the platform will handle deployment automatically.
    </p>

    <h2>API Endpoint</h2>
    <p><strong>POST /api/feedback</strong>: Sends feedback data (name, phone, and message) via email.</p>

    <h3>Example request body:</h3>
    <pre><code>

{
"name": "John Doe",
"phone": "+1234567890",
"message": "Hello, I would like to inquire about your services."
}
</code></pre>
