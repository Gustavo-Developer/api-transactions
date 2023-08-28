import { beforeAll, afterAll, describe, it } from "vitest";
import request from "supertest";
import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("O usuário deve conseguir criar uma nova transacão", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "Nova Transacão",
        amount: 3000,
        type: "credit",
      })
      .expect(201);
  });
});
