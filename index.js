// Main resource:
// https://www.w3schools.com/nodejs/func_http_requestlistener.asp


// https://www.youtube.com/watch?v=tjAeCLLwZtE
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the path to the directory where your HTML files reside
const publicDirectoryPath = path.join(__dirname, 'public_pages');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Routes for different HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'contact.html'));
});

// Start the server, listening on all available network interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});