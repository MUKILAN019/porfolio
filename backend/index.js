// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5004; // Use PORT variable from .env if available

// Middleware
app.use(cors({
    origin: ["http://localhost:5003","http://localhost:5004","https://onrender.com"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
    },
});

// POST route for sending emails
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation for email format
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail(email)) {
        return res.status(400).send('Invalid email format');
    }

    const mailOptions = {
        from: process.env.EMAIL, 
        to: "mukilan.p@kalvium.community", 
        subject: `Message from ${name}`, 
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response);
        return res.status(200).send('Email sent successfully');
    });
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
