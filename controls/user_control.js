require("../config/dbconfig");
const bcrypt = require("bcrypt");
const UserSchema = require("../model/UserSchema");
const mongoose = require("mongoose");

const handleLogin = async (req, res) => {
  if (req.body.username && req.body.password) {
    const { username, password } = req.body;
    try {
      const user = await UserSchema.find({
        // username: username,
      }); // TODO where password is the right password
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
};

const handleRegister = async (req, res) => {
  if (req.body.username && req.body.password) {
    try {
      const { username, password, email } = req.body;

      const saltRound = 10;
      const hash = bcrypt.hash(password, saltRound, async (err, hash) => {
        console.log(`${password}:${hash}`);
        const user = await UserSchema.create({
          username: username,
          password: hash,
        });

        await user.save();
        res.status(200).json(user);
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  handleLogin,
  handleRegister,
};
