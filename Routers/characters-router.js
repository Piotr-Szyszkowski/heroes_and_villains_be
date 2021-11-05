const express = require("express");
const charactersRouter = express.Router();
const getCharacters = require("../Controllers/characters-controller");

charactersRouter.get("/", getCharacters);

module.exports = charactersRouter;
