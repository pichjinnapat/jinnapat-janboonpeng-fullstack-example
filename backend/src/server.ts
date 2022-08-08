import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT as string;

app.listen(PORT, () => {
  console.info("🚀 App started on port", PORT);
  if (process.env.NODE_ENV !== "production") {
    console.info("💻 Node version:", process.version);
  }
});
