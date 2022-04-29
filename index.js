const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.listen(3001, () => {
  console.log("Server running on port: 3001");
});
