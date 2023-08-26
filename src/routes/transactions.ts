import { FastifyInstance } from "fastify";
import knex from "knex";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/hello", async () => {
    const transaction = await knex("transactions")
      .insert({
        id: crypto.randomUUID(),
        title: "Transacao no Buteco",
        amount: 1000,
      })
      .returning("*");

    return transaction;
  });
}
