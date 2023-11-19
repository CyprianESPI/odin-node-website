// Main resource:
// https://www.w3schools.com/nodejs/func_http_requestlistener.asp


// https://www.youtube.com/watch?v=tjAeCLLwZtE
const express = require("express");
const app = express();
const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
    res.send("Hello express!");
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});