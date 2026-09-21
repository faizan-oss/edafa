import "dotenv/config";

export const config = {
  port: Number(process.env.PORT ?? 8000),
  mongoUrl: process.env.MONGO_URL ?? "mongodb://localhost:27017",
  dbName: process.env.DB_NAME ?? "idaafa",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  mailFrom: process.env.MAIL_FROM ?? "contact@idaafa.com",
  mailToStudio: process.env.MAIL_TO_STUDIO ?? "contact@idaafa.com",
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY ?? "",
  siteUrl: process.env.SITE_URL ?? "http://localhost:5173",
  corsOrigins: (process.env.CORS_ORIGINS ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
};
