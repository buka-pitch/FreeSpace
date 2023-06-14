const express = require("express");
const router = express.Router();
const UserSchema = require("../model/UserSchema");
const { handleLogin, handleRegister } = require("../controls/user_control");

router.route("/login").post(handleLogin);
router.route("/register").post(handleRegister);

module.exports = router;
