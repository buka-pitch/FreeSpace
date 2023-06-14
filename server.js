require("dotenv").config();
const express = require("express");
const cookie_parser = require("cookie-parser");
const session_instance = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session_instance);
const cors = require("cors");
const routes = require("./routes/posts_routes");
const users = require("./routes/user_routes");
const blog = require("./routes/blog_routes");

const uid = require("uid");

const port = 5000 || process.env.PORT;
const app = express();

const session_store = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: "sessions",
});

app.use(cors());
app.use(express.json());
// app.use();

app.use("/api/v1", routes);
app.use("/api/v1", users);
app.use("/api/v1", blog);

app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
