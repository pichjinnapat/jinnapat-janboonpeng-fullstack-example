import { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();
import "./env";

const DB_PORT = process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306;

const config: Knex.Config = {
  client: "mysql",
  connection: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: DB_PORT,
    charset: "utf8",
  },
  migrations: {
    directory: "./database/migrations",
  },
};

export default config;
