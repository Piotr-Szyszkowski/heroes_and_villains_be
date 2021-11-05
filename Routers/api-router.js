const express = require("express");
const apiRouter = express.Router();
const charactersRouter = require("./characters-router");
const sendAllEndpoints = require("../Controllers/api-controller");

apiRouter.get("/", sendAllEndpoints);
apiRouter.use("/characters", charactersRouter);

module.exports = apiRouter;
