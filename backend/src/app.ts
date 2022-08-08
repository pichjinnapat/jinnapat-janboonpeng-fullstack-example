import express from "express";

import routes from "./routes";
import cors from "cors";
import { dbConnect } from "./database";

const NODE_ENV = process.env.NODE_ENV;

const corsOptions = {
  methods: ["GET", "POST", "DELETE", "UPDATE"],
};
const app = express();

app.use(express.json());

app.use(
  cors(
    NODE_ENV === "development"
      ? {
          ...corsOptions,
          origin: ["http://localhost:3000"],
        }
      : {
          ...corsOptions,
        }
  )
);

dbConnect();

app.use(routes);

export default app;
