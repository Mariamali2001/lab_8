const mockPresidentsApiStub = require("./presedints.api.stub.json");
const { getPresidents } = require("../scrap");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe("Test Presidents API", () => {
  test("Test Get Presidents", async () => {
    const results = await getPresidents("A");
    expect(results).toEqual(mockPresidentsApiStub);
  });
});
