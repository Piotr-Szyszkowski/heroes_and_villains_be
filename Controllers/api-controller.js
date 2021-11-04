const allEndpoints = require("../all_endpoints");

const sendAllEndpoints = (request, response) => {
  response.status(200).send({ allEndpoints });
};

module.exports = sendAllEndpoints;
