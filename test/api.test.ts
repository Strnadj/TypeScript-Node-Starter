import {} from "jest";
import * as supertest from "supertest";

import app from "../src/server";

const request = supertest(app);

describe("GET /api", () => {
  it("should return 200 OK", (done) => {
    request
      .get("/api")
      .expect(200, done);
  });
});
