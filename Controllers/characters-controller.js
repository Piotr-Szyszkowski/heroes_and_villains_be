const getCharacters = (request, response) => {
  selectCharacters(request, response).then((characters) => {
    response.status(200).send({ characters });
  });
};

module.exports = getCharacters;
