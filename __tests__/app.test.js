const db = require(`../DB/connection`);
const app = require("../app.js");
const request = require("supertest");
const allEndpoints = require("../all_endpoints");

afterAll(() => {
  return db.end();
});

describe(`GET /api`, () => {
  it(`should respond with status 200 and a JSON object describing all API endpoints`, () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then((response) => {
        expect(response.body.allEndpoints).toEqual(allEndpoints);
      });
  });
});
