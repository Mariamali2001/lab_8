const axios = require("axios");
const cheerio = require("cheerio");

const getPresidents = (CompanyName) => {
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

      const parsedcompanies = [];
      for (let company of companies) {
        parsedcompanies.push($(company).text());
      }
     

    
      console.log(parsedjobs)
      console.log(parsedcompanies)
      

      return firstCharacter
        ? parsedPresidents.filter(
            (president) =>
              president.charAt(0).toLocaleLowerCase() ===
              firstCharacter.toLocaleLowerCase()
          )
        : parsedPresidents;

  
       

    })
    .catch(console.error);


    
};

module.exports = { getPresidents };
