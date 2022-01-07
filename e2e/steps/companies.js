const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a location {string}", function (locationName) {
  this.context["locationName"] = locationName;
});

When("I send a GET request to fetch companies",  {timeout: 2 * 5000}, async function () {
  const {data} = await axios
    .get(`http://localhost:3000/companies?string=${this.context["locationName"]}`)
this.context["response"] = data
});

Then("I should get {} of companies", function (expectedResponse) {
  assert.equal(this.context["response"][0], expectedResponse);
});
