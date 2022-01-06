const mockPresidentsApiStub = require("./presedints.api.stub.json");
const { getCompJobs } = require("../scrap");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Locations API", () => {
  test("Test Get Companies", async () => {
    const results = await getCompJobs("6th of October, Giza, Egypt ");
    expect(results).toEqual(mockPresidentsApiStub);
  });
});
