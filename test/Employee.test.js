const Employee = require("../lib/Employee")

// it("Can create instance of employee", () => {
//     const employee = new Employee()
//     expect(typeof(employee)).toBe("object")
// })


// getName() {
//     return this.name;
// }
it("Can get an employee name", () => {
    const employee = new Employee("Connor", 1, "cbazil@hotmail.com")
    expect(employee.getName()).toEqual("Connor")
})

// getId() {
//     return this.id;
// }
it("Can get an employee ID", () => {
    const employee = new Employee("Connor", 1, "cbazil@hotmail.com")
    expect(employee.getName()).toEqual(1)
})

// getEmail() {
//     return this.email;
// }

it("Can get an employee email", () => {
    const employee = new Employee("Connor", 1, "cbazil@hotmail.com")
    expect(employee.getName()).toEqual("cbazil@hotmail.com")
})

// getRole() {
//     return "Employee";
// }