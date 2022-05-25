import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import apiRouter from "./api";
import mongoose from "mongoose";

//import apiRouter from "./api";

// Constants
const app = express();


/***********************************************************************************
 *                                  Middlewares
 **********************************************************************************/

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


/***********************************************************************************
 *                               Configure Routes
 **********************************************************************************/
// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

/***********************************************************************************
 *                         API routes and error handling
 **********************************************************************************/
app.use("/", apiRouter);


/***********************************************************************************
 *                              Connect to Mongo 
 **********************************************************************************/
/*
let dbUrl = process.env.MONGO_URL as string;
mongoose.connect(dbUrl);
console.log("Connected to: " + dbUrl);
*/

// Export here and start in a diff file (for testing).
export default app;