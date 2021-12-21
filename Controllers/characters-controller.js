const { request, response } = require("express");
const {
  selectCharacters,
  selectCharById,
} = require("../Models/characters-model");

const getCharacters = (request, response) => {
  selectCharacters().then((characters) => {
    response.status(200).send({ characters });
  });
};

const getCharById = (request, response) => {
  selectCharById(request).then((selectedCharacter) => {
    response.status(200).send(selectedCharacter);
  });
};

module.exports = { getCharacters, getCharById };
