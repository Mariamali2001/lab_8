const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a string {string}", function (locationName) {
  this.context["locationName"] = locationName;
  console.log(locationName)
});

When("I send a GET request to fetch companies",  {timeout: 2 * 5000}, async function () {
  const {data} = await axios
    .get(`http://localhost:3000/companies?string=${this.context["locationName"]}`)
    this.context["response"] = data
    console.log(data)
    
});

Then("I should get {int} of companies", function (expectedResponse) {
  assert.deepEqual(this.context["response"].length, expectedResponse);
});
