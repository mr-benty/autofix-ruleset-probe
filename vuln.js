const express = require("express");
const app = express();

// Intentionally vulnerable - authorized security research fixture.
app.get("/run", (req, res) => {
  res.send(eval(req.query.code));
});

app.get("/read", (req, res) => {
  const fs = require("fs");
  res.send(fs.readFileSync(req.query.path));
});

module.exports = app;
