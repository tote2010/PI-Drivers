const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));

// server.use((req, res, next) =>{
//     console.log("Acá estoy");
//     next();
// });

server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
