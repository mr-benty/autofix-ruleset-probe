const express = require("express");
const app = express();

// Fixed: do not execute user-controlled input.
app.get("/run", (req, res) => {
  const code = typeof req.query.code === "string" ? req.query.code : "";
  res.type("text/plain").send(code);
});

app.get("/read", (req, res) => {
  const fs = require("fs");
  res.send(fs.readFileSync(req.query.path));
});

module.exports = app;
