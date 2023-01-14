const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/")
    {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.write("Hello World\nI'm a person.");
        res.end();
    }
    if (req.url === "/api/courses")
    {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
        res.write("\nThis is a list of software courses.");
        res.end();
    }
}).listen(8081);

console.log("Listening on port 8081");