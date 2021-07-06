const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.send(`hello`);
  })
  .listen(9999, "127.0.0.1");

console.log("http://127.0.0.1:9999");
