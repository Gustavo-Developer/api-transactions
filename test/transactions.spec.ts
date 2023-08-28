import { beforeAll, afterAll, describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../src/app";
import { execSync } from "node:child_process";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
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

  // it.doto
  // it.skip
  // it.only
  it("Deve conseguir listar todas as transacões", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "Nova Transacão",
        amount: 3000,
        type: "credit",
      })
      .expect(201);

    const cookies = createTransactionResponse.get("Set-Cookie");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies)
      .expect(200);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "Nova Transacão",
        amount: 3000,
      }),
    ]);
  });
});
