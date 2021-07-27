const express = require("express");
const server = express();
const routes = require("./routes");

// listen on template engine
server.set('view engine', 'ejs')

// files statics
server.use(express.static("public"));

// routes
server.use(routes);

server.listen(3000, () => console.log('rodando'));