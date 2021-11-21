const express = require("express");
const charactersRouter = express.Router();
const getCharacters = require("../Controllers/characters-controller");

charactersRouter.get("/", getCharacters);
charactersRouter.route("/:char_id").get(getCharById);

module.exports = charactersRouter;
