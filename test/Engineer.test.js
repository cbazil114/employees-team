const Employee = require("../lib/Employee")

it("Can create instance of employee", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})
