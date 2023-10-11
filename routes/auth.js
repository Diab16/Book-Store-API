"use strict";
const express = require("express");
const router = express.Router();
const { registerNewUser, login } = require("../controllers/authControllers");

router.post("/register", registerNewUser);

router.post("/login", login);

module.exports = router;
