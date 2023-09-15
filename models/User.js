"use strict";
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

// User Schema
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      min: 5,
      max: 100,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      min: 2,
      max: 200,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Generate Token
UserSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_SECRET_KEY
  );
};

// User Model
const User = mongoose.model("User", UserSchema);

// Validate Register User
const validateRegisterUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    username: Joi.string().trim().min(2).max(200).required(),
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(obj);
};

// Validate Login User
const validateLoginUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(6).required(),
  });
  return schema.validate(obj);
};

// Validate Update User
const validateUpdateUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(5).max(100).email(),
    username: Joi.string().trim().min(2).max(200),
    password: Joi.string().trim().min(6),
  });
  return schema.validate(obj);
};

module.exports = {
  User,
  validateLoginUser,
  validateRegisterUser,
  validateUpdateUser,
};
