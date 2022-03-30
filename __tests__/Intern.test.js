const Intern = require('../lib/Intern');

test("Create a intern object", () => {
    const intern = new Intern ("Vince", 13, "fakeemail@fakeemail.com", "Clemson");

    expect( typeof( intern )).toBe("object");
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("Setting the Intern school", () => {
    const testSchool = "Davidson";
    const intern = new Intern ("Vince", 13, "fakeemail@fakeemail.com", testSchool);

    expect(intern.school).toBe(testSchool);
});

test("Check if getSchool gets a school", () => {
    const testSchool = "Davidson";
    const intern = new Intern ("Vince", 13, "fakeemail@fakeemail.com", testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

test("Check that getRole() returns Intern as role", () => {
    const testRole = "Intern";
    const intern = new Intern ("Vince", 13, "fakeemail@fakeemail.com", "Davidson");

    expect(intern.getRole()).toBe(testRole);
})