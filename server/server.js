const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./DBConfig");
const app = express();

const port = process.env.PORT || 5500;
app.use(cors());

app.get("/feedback", async (req, res) => {
  try {
    const allFeedback = await pool.query("SELECT * from feedback");
    res.json({ feedbackList: allFeedback.rows });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log("Sum Up CYF Group By listening on port 5500..");
});
