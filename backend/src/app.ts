import express from "express";
import cors from "cors";
import eventRoutes from "./routes/events";
import { dbConnect } from "./database";
import { errorResponder } from "./libs/errorHandler";

const NODE_ENV = process.env.NODE_ENV;

const corsOptions = {
  methods: ["GET", "POST", "DELETE", "PUT"],
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

app.get("/", (req, res) => res.send("Welcome to my app"));
app.use("/events", eventRoutes);
app.use((req, res, next) => {
  const error = new Error("Not found");
  (error as any).statusCode = 404;
  next(error);
});

app.use(errorResponder);

export default app;
