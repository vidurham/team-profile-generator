const inquirer = require('inquirer');
const generatePage = require('./src/page-template')
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { ADDRGETNETWORKPARAMS } = require('dns');
const pageTemplate = require('./src/page-template');

const team = [];

function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee or are you finished building your team?",
            name: 'add',
            choices: ["Add another Employee", "My team is all set to be built!"]
        },
    ])
    .then(response => {
        if (response.add === "Add another Employee") {
            inquirer.prompt([
                {
                    type: "list",
                    message: "What type of employee would you like to add?",
                    name: 'employee',
                    choices: ["Engineer", "Intern", "Manager"]
                }
            ])
            .then(answer => {
                if (answer.employee === "Engineer") {
                    getEngineer();
                }
                else if (answer.employee === "Intern") {
                    getIntern();
                }
                else if (answer.employee === "Manager"){
                    getManager();
                }
            })
        }
        else {
            
            writeFile(generatePage(team));
        }
    })
}

function getEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's Name",
            name: 'name'
        },
        {
            type: "input",
            message: "Enter Engineer's ID",
            name: 'id'
        },
        {
            type: "input",
            message: "Enter Engineer's Email",
            name: 'email'
        },
        {
            type: "input",
            message: "Enter Engineer's Github",
            name: 'github'
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        addTeam();
    })
}

function getIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's Name",
            name: 'name'
        },
        {
            type: "input",
            message: "Enter Intern's ID",
            name: 'id'
        },
        {
            type: "input",
            message: "Enter Intern's Email",
            name: 'email'
        },
        {
            type: "input",
            message: "Enter Intern's School/College",
            name: 'school'
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addTeam();
    })
}

function getManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager's Name",
            name: 'name'
        },
        {
            type: "input",
            message: "Enter Manager's ID",
            name: 'id'
        },
        {
            type: "input",
            message: "Enter Manager's Email",
            name: 'email'
        },
        {
            type: "number",
            message: "Enter Manager's Office Number",
            name: 'office'
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        team.push(manager);
        addTeam();
    })
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

getManager();