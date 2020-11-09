const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/Employee.js');
const manager = require('./lib/Manager.js');
const intern = require('./lib/Intern.js');
const engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');

function buildTeam() {
    function createManager() {
        console.log("Build your team.")
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's Id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'officenumber',
                message: "What is the manager's office number?"
            }
        ]).then(managerAnswer => {
            const manager = new Manager(managerAnswer.managerName, managerAnswer.id, managerAnswer.email, managerAnswer.officenumber);
            employees.push(manager)
            idArray.push(managerAnswer.id)
            createTeam()
        })
    }
//wrqp in creatTeam function then send to addIntern
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
            // {  change to choices for intern or engineer
            //     type: 'input',
            //     name: 'role',
            //     message: 'What is your role with the company?'
            //}  then do switch statemnt
        ])
        .then(function (answers) {
            console.log(answers);

            switch (answers.role) {
                case "engineer":
                    addEngineer();
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
            });
        });
}