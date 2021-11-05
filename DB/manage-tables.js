const db = require("./connection");

const createTables = () => {
  return db.query(
    `CREATE TABLE characters (char_id SERIAL PRIMARY KEY, name VARCHAR NOT NULL, full_name VARCHAR, bio VARCHAR, main_img_url VARCHAR DEFAULT 'https://static7.depositphotos.com/1302980/794/v/380/depositphotos_7942809-stock-illustration-grunge-super-hero-sign.jpg');`
  );
};

const dropTables = () => {
  return db.query(`DROP TABLE IF EXISTS characters`);
};

module.exports = { createTables, dropTables };
