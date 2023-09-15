"use strict";
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is running...");
  } catch (error) {
    console.log("Connection faild to MongoDB!", error);
  }
}
module.exports = connectToDB;

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database is running..."))
//   .catch((error) => console.log("Connection faild to MongoDB!", error));
