
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://66bd0ced7de35f2b0a01d49c3b3335c3@o4509655590436864.ingest.us.sentry.io/4509655596859392",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [Sentry.mongooseIntegration()],
});
