const Employee1 = require("../lib/Employee1");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager1("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager1"', () => {
  const testValue = "Manager1";
  const e = new Manager1("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager1("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
