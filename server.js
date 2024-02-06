const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // res.setHeader('Access-Control-Allow-Origin', 'http://wheres47.com');
    // res.setHeader('Access-Control-Allow-Origin', 'https://18.237.87.220');
    // res.setHeader('Access-Control-Allow-Origin', 'http://ec2-18-237-87-220.us-west-2.compute.amazonaws.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Define your routes
app.get('/', (req, res) => {
    res.send('Hello from your server!');
});

// Handle other routes as needed
app.get('/data', (req, res) => {
    const directory = 'target_pictures/paris';
    fs.readdir(directory, (err, files) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        // Choose a random file from the array
        const randomFile = files[Math.floor(Math.random() * files.length)];

        // Serve the random image
        const filePath = path.join(directory, randomFile);
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    });
});

// Start the server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
