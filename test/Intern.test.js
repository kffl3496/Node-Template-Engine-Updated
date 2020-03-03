const Intern1 = require("../lib/Intern1");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern1("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern1\"", () => {
  const testValue = "Intern1";
  const e = new Intern1("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern1("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
