// Main resource:
// https://www.w3schools.com/nodejs/func_http_requestlistener.asp

const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    requested_url = req.url.toString();
    console.log(requested_url);


    var page_name = "404";
    if (requested_url === "/" || requested_url === "/index")
        page_name = "index";
    else if (requested_url === "/about")
        page_name = "about";
    else if (requested_url === "/contact-me")
        page_name = "contact-me";

    var fs = require("fs");
    const file_path = "./public_pages/" + page_name + ".html";
    var text = fs.readFileSync(file_path, "utf-8");
    res.write(text);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});