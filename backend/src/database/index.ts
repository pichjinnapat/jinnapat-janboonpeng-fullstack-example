import dotenv from "dotenv";
import knex from "knex";
import knexConfig from "../knexfile";
dotenv.config();

export const db = knex(knexConfig);

export const dbConnect = () => {
  db.raw("SELECT 1")
    .then(() => console.info("🫙 Connected to database ✅"))
    .catch((err) => {
      throw new Error(`🫙 Cannot get a db connection 🚫 : ${err}`);
    });
};
