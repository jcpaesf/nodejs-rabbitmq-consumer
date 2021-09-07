import express from "express";
import "dotenv/config";
import * as Sentry from "@sentry/node";
import ConnectionQueueServices from "../../../modules/notifications/services/ConnectionQueueService";

const app = express();

Sentry.init({
  dsn: `https://${process.env.SENTRY_KEY}.ingest.sentry.io/${process.env.SENTRY_PROJECT}`,
  tracesSampleRate: 1.0,
});

app.listen(3334, () => {
  ConnectionQueueServices.buildConnection();

  console.log("Server is running on http://localhost:3334");
});
