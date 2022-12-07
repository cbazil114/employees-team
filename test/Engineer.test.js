const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

it("Can create instance of employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

it("Can display the school name of the intern", () => {
    const engineer = new Engineer("Connor", 1, "cbazil@hotmail.com", "cbazil114")
    expect(engineer.getGithub()).toEqual("cbazil114")
})