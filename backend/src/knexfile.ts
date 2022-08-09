import { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
import "./env";

const DB_PORT = process.env.PGSQL_PORT ? Number(process.env.PGSQL_PORT) : 5432;

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.PGSQL_HOST,
    database: process.env.PGSQL_DB,
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    port: DB_PORT,
  },
  migrations: {
    directory: "./database/migrations",
  },
};

export default config;
