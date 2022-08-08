import express from "express";

import routes from "./routes";
import cors from "cors";

const app = express();

// Parse JSON
app.use(express.json());

// Use CORS
app.use(cors());

// // Create connection with database
// connectDB();

// Fetching API from the routes
app.use(routes);

export default app;
