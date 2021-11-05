const db = require(`../DB/connection`);
const app = require("../app.js");
const request = require("supertest");
const testData = require("../DB/Data/Test/index");
const seed = require("../DB/Seeds/seed");
const allEndpoints = require("../all_endpoints");

beforeEach(() => {
  return seed(testData);
});

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

describe(`GET /api/characters`, () => {
  it("should respond with status 200 and an array of all character objects", () => {
    return request(app)
      .get("/api/characters")
      .expect(200)
      .then((response) => {
        expect(response.body.characters).toBeInstanceOf(Array);
        expect(response.body.characters).toHaveLength(2);
      });
  });
});
