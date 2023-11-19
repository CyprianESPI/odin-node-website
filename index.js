const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

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

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'contact-me.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});