const db = require("../DB/connection");
const format = require(`pg-format`);
const selectCharacters = () => {
  return db.query("SELECT * FROM characters").then((characters) => {
    return characters.rows;
  });
};

const selectCharById = async (request) => {
  const idToSelect = request.params.char_id;
  const queryString = format(`SELECT * from characters WHERE char_id = %L;`, [
    [idToSelect],
  ]);
  const rawCharSelectedById = await db.query(queryString);
  const theCharacterObject = rawCharSelectedById.rows[0];
  return theCharacterObject;
};

module.exports = { selectCharacters, selectCharById };
