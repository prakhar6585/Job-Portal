import './config/instrument.js';
import express from "express";
import cors from 'cors';
import 'dotenv/config'
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webHooks.js';

// Initialize express 
const app = express();

// Connect to database
await connectDB();

// MiddleWares 
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Api Running'));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhooks)


// Port 
const PORT = process.env.PORT || 4000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})