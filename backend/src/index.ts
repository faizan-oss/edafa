import { config } from "./config.js";
import app from "./app.mjs";
import { closeDb, connectDb } from "./db.js";

async function start() {
  await connectDb();

  app.listen(config.port, () => {
    console.info(`idaafa API listening on http://localhost:${config.port}`);
  });
}

start().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});

async function shutdown() {
  await closeDb();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
