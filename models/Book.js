"use strict";
const mongoose = require("mongoose");
const Joi = require("joi");

// Book schema
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 300,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Author",
      trim: true,
      minlength: 3,
      maxlength: 400,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    cover: {
      type: String,
      required: true,
      enum: ["soft cover", "hard cover"],
    },
  },
  {
    timestamps: true,
  }
);

// validation Create book
const validateCreateBook = (obj) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(300).required(),
    author: Joi.string().required(),
    description: Joi.string().trim().min(10).required(),
    price: Joi.number().min(0).required(),
    cover: Joi.string().valid("soft cover", "hard cover").required(),
  });

  return schema.validate(obj);
};

// validation Update book
const validateUpdateBook = (obj) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(300),
    author: Joi.string(),
    description: Joi.string().trim().min(10),
    price: Joi.number().min(0),
    cover: Joi.string().valid("soft cover", "hard cover"),
  });

  return schema.validate(obj);
};

const Book = mongoose.model("Book", BookSchema);
module.exports = {
  Book,
  validateCreateBook,
  validateUpdateBook,
};
