const db = require("../connection");
const data = require("../Data/Development/index");
const seed = require("./seed");

const runSeed = () => {
  return seed(data).then(() => {
    db.end();
  });
};

runSeed();
