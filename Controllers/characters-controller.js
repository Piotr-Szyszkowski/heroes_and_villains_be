const selectCharacters = require("../Models/characters-model");

const getCharacters = (request, response) => {
  selectCharacters(request, response).then((characters) => {
    response.status(200).send({ characters });
  });
};

module.exports = getCharacters;
