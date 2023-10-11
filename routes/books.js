"use strict";
const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  getAllBooks,
  getBookById,
  CreateNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// HTTP Methods // HTTP Verbs

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post("/", verifyTokenAndAdmin, CreateNewBook);

router.put("/:id", verifyTokenAndAdmin, updateBook);

router.delete("/:id", verifyTokenAndAdmin, deleteBook);

module.exports = router;
