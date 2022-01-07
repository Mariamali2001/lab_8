const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { getPresidents, getCompJobs } = require("./scrap");
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(3000, async (req, res) => {
  console.log(`Server listening on Port ${3000}`);

  app.get("/companies", async (req, res) => {
    getCompJobs(req.body).then((companies) => {
      return res.status(200).json(companies);
    });
  });
});
