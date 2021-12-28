const axios = require("axios");
const cheerio = require("cheerio");

const getPresidents = (firstCharacter) => {
  return axios
    .get(
      "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States"
    )
    .then((response) => response.data)
    .then((html) => {
      const $ = cheerio.load(html);
      const presidents = $("td > b > a");

      const parsedPresidents = [];
      for (let president of presidents) {
        parsedPresidents.push(president.attribs.title);
      }
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
