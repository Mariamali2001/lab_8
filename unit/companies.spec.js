const mockCompaniesApiStub = require("./companies.api.stub.json");
const { getCompJobs } = require("../scrap");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Companies API", () => {
  test("Test Get Companies", async () => {
    const results = await getCompJobs("6th of October, Giza, Egypt ");
    expect(results).toEqual(mockCompaniesApiStub);
  });


  test("Test data  aggregate ", async () => {
    const results = await getCompJobs("6th of October, Giza, Egypt ");
    expect(results).toEqual(mockCompaniesApiStub);
  });


});
