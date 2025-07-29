/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import envVars from "./config/env";
import app from "./app";
import seedAdmin from "./utils/seedAdmin";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL as string);
    console.log("🚀 Connected to DB");

    server = app.listen(envVars.PORT, () => {
      console.log("Server is running on port", envVars.PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

// When server start - create a demo admin from env file
(async () => {
  await startServer();
  await seedAdmin();
})();

// SIGTERM Error Catch and shut down -->
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received... Server shutting down..");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// SIGINT Error Catch and shut down -->
process.on("SIGINT", () => {
  console.log("SIGINT signal received... Server shutting down..");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// unhandledRejection Error Catch and shut down -->
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected... Server shutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

//  uncaughtException Error Catch and shut down-->
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected... Server shutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
