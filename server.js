require("dotenv").config();
const express = require("express");
const cookie_parser = require("cookie-parser");
const routes = require("./routes/posts_routes");
const port = 5000 || process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
