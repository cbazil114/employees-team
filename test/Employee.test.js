const Employee = require("../lib/Employee")

// it("Can create instance of employee", () => {
//     const employee = new Employee()
//     expect(typeof(employee)).toBe("object")
// })

it("Can get an employee name", () => {
    const employee = new Employee("Connor", 1, "cbazil@hotmail.com")
    expect(employee.getName()).toEqual("Connor")
})

// getName() {
//     return this.name;
// }
// getId() {
//     return this.id;
// }
// getEmail() {
//     return this.email;
// }
// getRole() {
//     return "Employee";
// }