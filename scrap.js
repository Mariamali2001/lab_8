const axios = require("axios");
const cheerio = require("cheerio");

const getCompJobs = (locationName) => {
  return axios
    .get(
      "https://wuzzuf.net/a/Software-Engineer---Internship-Jobs-in-Egypt"
    )
    .then((response) => response.data)
    .then((html) => {
      const $ = cheerio.load(html);
     
      const jobs = $("div>div>div>h2>a");

      const parsedjobs = [];
      for (let job of jobs) {
        parsedjobs.push($(job).text());
      }
     
      const companies = $("div>div>div>div>div .css-d7j1kk>a");
      const locations = $("div>div>div>div>div .css-d7j1kk>span");


      const parsedcompanies = [];
      for (let company of companies) {
        parsedcompanies.push($(company).text());
      }

      const parsedlocations = [];
      for (let location of locations) {
        parsedlocations.push($(location).text());
      }
     
      //console.log(parsedlocations)
      //console.log(parsedcompanies)
      //console.log(parsedjobs)
      
      var items = []
      for (let i = 0 ; i < parsedcompanies.length ; i++){
        items.push([parsedjobs[i],parsedcompanies[i],parsedlocations[i]]);
      }
      //console.log(items);

      if(locationName){
        let searchRes = []
        for (let i = 0 ; i < items.length ; i++){
          if(items[i][2] == locationName){
            searchRes.push(items[i][1]);
          }
        }
        console.log(searchRes);
        return searchRes;
      }
      return parsedCompanies;

    })
    .catch(console.error);
};

module.exports = { getCompJobs };
