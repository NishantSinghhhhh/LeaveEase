const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./Routes/AuthRouter');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.get('/ping', (req, res) => {
    res.send("PONG");
});

// Import and use your routes
// Make sure you have a file at './routes/auth.js' that exports a router
app.use('/auth', authRoutes);
app.use('/products', authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
