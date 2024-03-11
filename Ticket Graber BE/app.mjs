import express from "express";
import firebase from './services/firebase.js';
import config from './config/index.js';
import userRoutes from './routes/user.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.port || 8080; // Using the port from config or defaulting to 8080

// Enable CORS for all routes
app.use(cors({
    origin: config.client_url, // Allow requests from your React application's origin
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  }));

// Initialize Firebase before starting the server
firebase.init();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use userRoutes middleware
app.use('/user', userRoutes);

app.use((err, _req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500);
  res.json({ error: err.message });
});

app.use("*", (_, res) => {
  return res
    .status(404)
    .json({ error: "the requested resource does not exist on this server" });
});

export default app;