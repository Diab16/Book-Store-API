"use strict";
const express = require("express");
const { logger } = require("./middlewares/logger");
const { notFound, errorHandler } = require("./middlewares/error");
const connectToDB = require("./config/db");
require("dotenv").config();

// conniction to Database
connectToDB();

// init app
const app = express();

// apply middlewares
app.use(express.json());
app.use(logger);

// Routers
app.use("/api/books", require("./routes/books"));
app.use("/api/authors", require("./routes/authors"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

// Running the Server
const PORT_NUMPER = process.env.PORT || 5000;
app.listen(PORT_NUMPER, () =>
  console.log(
    `Hello, Server is running in ${process.env.NODE} mode on port ${PORT_NUMPER}`
  )
);
