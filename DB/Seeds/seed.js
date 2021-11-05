const { dropTables, createTables } = require("../manage-tables");
const format = require("pg-format");
const db = require("../connection");

const seed = ({ charactersData }) => {
  return dropTables()
    .then(() => {
      return createTables();
    })
    .then(() => {
      const insertCharacterQueryStr = format(
        `INSERT INTO characters (name, full_name, bio, main_img_url) VALUES %L RETURNING *;`,
        charactersData.map(({ name, full_name, bio, main_img_url }) => {
          return [name, full_name, bio, main_img_url];
        })
      );
      return db.query(insertCharacterQueryStr);
    });
};

module.exports = seed;
