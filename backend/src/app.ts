import cors from "cors";
import express from "express";
import { config } from "./config.js";
import { connectDb } from "./db.js";
import { contactRouter } from "./routes/contact.js";

let dbReady: Promise<unknown> | null = null;

async function ensureDb(
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  try {
    dbReady ??= connectDb();
    await dbReady;
    next();
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    res.status(503).json({
      success: false,
      message:
        "Something broke on our end. Email us at contact@idaafa.com and we'll pick it up.",
    });
  }
}

export function createApp() {
  const app = express();

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: config.corsOrigins,
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use(ensureDb);

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/api", contactRouter);

  return app;
}

const app = createApp();
export default app;
