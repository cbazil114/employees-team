const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

it("Can create instance of employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

it("Can display the office number of the manager", () => {
    const manager = new Manager("Connor", 1, "cbazil@hotmail.com", 818)
    expect(manager.getOfficeNumber()).toEqual(818)
})