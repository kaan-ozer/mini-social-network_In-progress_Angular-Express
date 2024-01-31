require("dotenv").config();
const http = require("http");

const server = http.createServer((req, res) => {});

server.listen(process.env.PORT, () => {});
