const Engineer1 = require("../lib/Engineer1");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer1("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer1\"", () => {
  const testValue = "Engineer1";
  const e = new Engineer1("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer1("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
