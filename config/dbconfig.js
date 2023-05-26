require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL).catch((err) => {
  console.log(err.message);
});
