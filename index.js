require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");

app.use("/", routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
