const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")


it("Can create instance of employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

it("Can display the school name of the intern", () => {
    const intern = new Intern("Connor", 1, "cbazil@hotmail.com", "UNH")
    expect(intern.getSchool()).toEqual("UNH")
})