const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./template");

let teamGroup = []

const employeeType = () => {
    inquirer
        .prompt([
            {
				type: "list",
				name: "position",
				message: "Which position is the new employee?",
                choices: ["Manager", "Engineer", "Intern", "Never mind"],
			},

        ])
        .then(function (userData) {
            console.log(userData)
            if (userData.position === "Engineer") {
                addEngineer()
            } else if (userData.position === "Manager") {
                addManager()
            } else if (userData.position === "Intern") {
                addIntern()   
            } else {
                return
            } 

        })
}



const addEmployee = () => {
    inquirer
        .prompt ([
            {
				type: "list",
				name: "newEmployee",
				message: "Would you like to add a new employee?",
                choices: ["Yes", "No"],
			},
        ])
        .then(function (userData) {
            console.log(userData)
            if (userData.newEmployee === "Yes") {
                employeeType()
            } else {
                makeHtml()
            }
        })
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
				type: "input",
				name: "name",
				message: "What is the employee's name?",
			},
            {
				type: "input",
				name: "github",
				message: "What is the employee's Github username?",
			},
            {
				type: "input",
				name: "email",
				message: "What is the employee's email address?",
			},
        ])
        .then(function (userData) {
            console.log(userData)
            const newEngineer = new Engineer(
                userData.name,
                teamGroup.length + 1,
                userData.email,
                userData.github,
                )
            teamGroup.push(newEngineer)
            // makeHtml()
            addEmployee()
        })
}

const addManager = () => {
    inquirer
        .prompt([
            {
				type: "input",
				name: "name",
				message: "What is the employee's name?",
			},
            {
				type: "input",
				name: "email",
				message: "What is the employee's email address?",
			},
            {
				type: "input",
				name: "officeNumber",
				message: "What is the employee's office number?",
			},
            // {
			// 	type: "input",
			// 	name: "school",
			// 	message: "What school did/does the employee attend?",
			// },
        ])
        .then(function (userData) {
            console.log(userData)
            const newManager = new Manager(
                userData.name,
                teamGroup.length + 1,
                userData.email,
                userData.officeNumber,
                )
            teamGroup.push(newManager)
            // makeHtml()
            addEmployee()
        })
}

const addIntern = () => {
    inquirer
        .prompt([
            {
				type: "input",
				name: "name",
				message: "What is the employee's name?",
			},
            {
				type: "input",
				name: "email",
				message: "What is the employee's email address?",
			},
            {
				type: "input",
				name: "school",
				message: "What school did/does the employee attend?",
			},
        ])
        .then(function (userData) {
            console.log(userData)
            const newIntern = new Intern(
                userData.name,
                teamGroup.length + 1,
                userData.email,
                userData.school,
                )
            teamGroup.push(newIntern)
            // makeHtml()
            addEmployee()
        })
}

function makeHtml() {
    const pageHtml = template(teamGroup)
    console.log(pageHtml)
    fs.writeFile('./dist/index.html', pageHtml, function(err, data) {
        if (err) throw err;
    })
    // fs.writeFile - give it pageHtml and error handling
}

employeeType();