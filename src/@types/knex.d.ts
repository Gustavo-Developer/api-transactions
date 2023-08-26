// eslint-disable-next-line
import { Knex } from "knex";

declare module "knex/module/tables" {
  export interface Tables {
    transactions: {
      id: string;
      title: string;
      amount: string;
      created_at: string;
      session_id?: string;
    };
  }
}
