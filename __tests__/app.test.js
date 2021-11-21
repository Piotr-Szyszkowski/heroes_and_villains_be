const db = require(`../DB/connection`);
const app = require("../app.js");
const request = require("supertest");
const testData = require("../DB/Data/Test/index");
const seed = require("../DB/Seeds/seed");
const allEndpoints = require("../all_endpoints");
const { charactersData: allCharactersArray } = testData;

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
        expect(response.body.characters).toHaveLength(
          allCharactersArray.length
        );
      });
  });
  it("should respond with array of objects displaying specific properties", () => {
    return request(app)
      .get("/api/characters")
      .then((response) => {
        const heroObjArray = response.body.characters;
        heroObjArray.forEach((heroObj) => {
          expect(heroObj).toEqual(
            expect.objectContaining({
              char_id: expect.any(Number),
              name: expect.any(String),
              full_name: expect.any(String),
              bio: expect.any(String),
              main_img_url: expect.any(String),
            })
          );
        });
      });
  });
});

describe(`GET /api/characters/:char_id`, () => {
  it("should respond with status 200 and a character object", () => {
    return request(app)
      .get(`/api/characters/2`)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(allCharactersArray[1]);
      });
  });
});
