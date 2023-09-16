const express = require("express");
const app = express();

const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Sum Up CYF Group By");
});

app.post("/", (req, res) => {
  res.send("");
});

app.listen(port, () => {
  console.log("Sum Up CYF Group By listening on port 5500..");
});
