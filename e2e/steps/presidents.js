const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const axios = require("axios");

Given("a character {}", function (firstCharacter) {
  this.context["firstCharacter"] = firstCharacter;
});

When("I send a GET request to fetch presidents", async function () {
  const {data} = await axios
    .get(`http://localhost:3000/presidents?char=${this.context["firstCharacter"]}`)
this.context["response"] = data
});

Then("I should get {int} of presidents", function (expectedResponse) {
  assert.equal(this.context["response"].length, expectedResponse);
});
