require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", proxy("http://localhost:8081/"));

app.listen(port, () => {
  console.log(`API Gateway en cours d\'exécution sur le port ${port}`);
});
