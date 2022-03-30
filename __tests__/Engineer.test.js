const Engineer = require('../lib/Engineer');

test("Create an engineer object", () => {
    const engineer = new Engineer ("Vince", 13, "fakeemail@fakeemail.com", "vidurham");

    expect( typeof( engineer )).toBe("object");
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("Setting the Engineer github", () => {
    const testGithub = "vdurham";
    const engineer = new Engineer ("Vince", 13, "fakeemail@fakeemail.com", testGithub);

    expect(engineer.github).toBe(testGithub);
});

test("Check if getGithub gets a github", () => {
    const testGithub = "vdurham";
    const engineer = new Engineer ("Vince", 13, "fakeemail@fakeemail.com", testGithub);

    expect(engineer.getGithub()).toBe(testGithub);
});

test("Check that getRole() returns Engineer as role", () => {
    const testRole = "Engineer";
    const engineer = new Engineer ("Vince", 13, "fakeemail@fakeemail.com", "vidurham");

    expect(engineer.getRole()).toBe(testRole);
})