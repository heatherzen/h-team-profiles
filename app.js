const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/Employee.js');
const manager = require('./lib/Manager.js');
const intern = require('./lib/Intern.js');
const engineer = require('./lib/Engineer.js');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is your role with the company?'
        }
    ])
    .then(function (answers) {
        console.log(answers);

        switch (answers.role) {
            case "engineer":
                addEngineer();
                break;
            case "manager":
                addManager();
                break;
            case "intern":
                addIntern();
            default:
                createTeam();
                break;
        }
        return answers;
    }).then(function (allAnswers) {
        fs.writeFileSync('./output/index.html', allAnswers, err => {
            if (err) throw new Error(err);
        } )
    })
    