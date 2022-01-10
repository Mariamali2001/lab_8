const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const {getCompJobs } = require("./scrap");
const {getJobType } = require("./scrap2");
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
    getCompJobs(req.query.string).then((companies) => {
      return res.status(200).json(companies);
    });
  });

  app.get("/jobs", async (req, res) => {
    getJobType(req.query.string).then((jobType) => {
      return res.status(200).json(jobType);
    });
  });


app.get("/scrap", async (req, res) => {
  //end point is scrap goes and get data when called getcompjobs and check if there is data output from method 
  //database collection  wazzuf 
  // if not return error message unable to establish  connetion 
  const companies = await getCompJobs(req.query.char);
  if (companies && companies.length) {
    const db = await mongoClient('Wazzuf');
    if (!db) {
      return res.status(500).json({ message: 'Unable to establish database connection' });
    }
    await db.insertMany(companies).catch((err) => {
      console.error(err);
    });
  }
  return res.status(200).json(companies);
})
});