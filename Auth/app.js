const express = require('express')
require("./app/models/index.js");
const router = require("./app/routes");

const app = express();
app.use(express.json());

app.use("/", router);

module.exports = app;