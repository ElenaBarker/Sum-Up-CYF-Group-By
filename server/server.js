const express = require('express');
const app = express();

const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
    res.send("Sum Up CYF Group By")
})



app.listen(port, () => {
    console.log("Sum Up CYF Group By listening on port 5005..")
})