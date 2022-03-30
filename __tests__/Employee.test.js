const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Create an employee object", () => {
    const employee = new Employee ("Vince", 13, "fakeemail@fakeemail.com");

    expect( typeof( employee )).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Check if getName() gets a name", () => {
    const testName = "Vince";
    const employee = new Employee (testName);

    expect(employee.getName()).toBe(testName);
});

test("Check if getId() gets an Id", () => {
    const testId = 34;
    const employee = new Employee ("Vince", testId);

    expect(employee.getId()).toBe(testId);
});

test("Check if getEmail() gets an email", () => {
    const testEmail = 'fakeemail@fakeemail.com';
    const employee = new Employee ("Vince", 13, testEmail);

    expect(employee.getEmail()).toBe(testEmail);
});

test("Check that getRole() returns Employee as role", () => {
    const testRole = "Employee";
    const employee = new Employee ("Vince", 13, "fakeemail@fakeemail.com");

    expect(employee.getRole()).toBe(testRole);
})