const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Create a manager object", () => {
    const manager = new Manager ("Vince", 13, "fakeemail@fakeemail.com", 606);

    expect( typeof( manager )).toBe("object");
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Setting the manager office number", () => {
    const testOfficeNumber = 246;
    const manager = new Manager ("Vince", 13, "fakeemail@fakeemail.com", testOfficeNumber);

    expect(manager.officeNumber).toBe(testOfficeNumber);
});

test("Check that getRole() returns Manager as role", () => {
    const testRole = "Manager";
    const manager = new Manager ("Vince", 13, "fakeemail@fakeemail.com", 606);

    expect(manager.getRole()).toBe(testRole);
})