require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

app.use(require("./routes/index.routes"));

require("./error-handling")(app);

module.exports = app;
