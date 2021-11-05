const db = require("../DB/connection");
const selectCharacters = (request, response) => {
  return db.query("SELECT * FROM characters").then((characters) => {
    return characters.rows;
  });
};

module.exports = selectCharacters;
