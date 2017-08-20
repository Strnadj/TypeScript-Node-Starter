import {} from "jest";
import * as supertest from "supertest";

import app from "../src/server";

const request = supertest(app);

describe("GET /random-url", () => {
  it("should return 404", (done) => {
    request.get("/reset")
      .expect(404, done);
  });
});
