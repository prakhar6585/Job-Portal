// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
    dsn: "https://ea9c5651773699db8c2220d38eee58d4@o4509326679801856.ingest.us.sentry.io/4509326683865088",
    integrations: [
        Sentry.mongoIntegration()
    ],

    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});