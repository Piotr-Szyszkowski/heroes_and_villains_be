const express = require("express");
const apiRouter = express.Router();
const sendAllEndpoints = require("../Controllers/api-controller");

apiRouter.get("/", sendAllEndpoints);

module.exports = apiRouter;
