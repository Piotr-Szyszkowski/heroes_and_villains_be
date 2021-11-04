const cors = require("cors");
const express = require("express");
const app = express();
const apiRouter = require("./Routers/api-router");

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

module.exports = app;
