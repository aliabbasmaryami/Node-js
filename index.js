const http = require("http");
const data = require("./firstApi");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "content-Type": "application/Json" });
    resp.write(JSON.stringify());
    resp.end();
  })
  .listen(6000);
console.log("hello");
