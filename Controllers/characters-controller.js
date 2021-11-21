const { request, response } = require("express");
const selectCharacters = require("../Models/characters-model");

const getCharacters = (request, response) => {
  selectCharacters(request, response).then((characters) => {
    response.status(200).send({ characters });
  });
};

const getCharById = (request, response) => {
  selectCharById;
};

module.exports = { getCharacters, getCharById };
