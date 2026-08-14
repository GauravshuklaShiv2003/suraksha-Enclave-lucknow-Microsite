const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Cross-Origin Resource Sharing for React
app.use(express.json()); // To parse JSON data from the frontend

// Test Route
app.get('/', (req, res) => {
    res.send('NewCastle Infratech API is running...');
});

// API Route for Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    // Yahan hum data ko server console mein log kar rahe hain
    console.log('--- New Lead Received ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log('-------------------------');
    
    // Future mein yahan database (MongoDB) ya Email (Nodemailer) ka code aayega
    
    res.status(200).json({ success: true, message: 'Details submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend Server is running on http://localhost:${PORT}`);
});