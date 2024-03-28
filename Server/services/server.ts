import express, { Express } from "express";

const host = process.env.LOCAL_PATH;
const port = Number(process.env.LOCAL_PORT);

export function initServer(): Express {
  const app = express();
  const cors = require("cors");
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    })
  );

  const jsonMiddleware = express.json();
  app.use(jsonMiddleware);

  app.listen(port, host, () => {
    console.log(`Server running on port ${port}`);
  });

  return app;
}
