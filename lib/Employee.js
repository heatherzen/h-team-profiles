const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;



        //         switch (answer.role) {
        //             case "engineer":
        //                 addEngineer();
        //                 break;
        //             case "manager":
        //                 addManager();
        //                 break;
        //             case "intern":
        //                 addIntern();
        //             default:
        //                 createTeam();
        //                 break;
        //         }
        //     }
        //     getRole() {
        //         return "employee";
        //     }
        //     getId() {
        //         return this.id;
        //     }
        //     getName() {
        //         return this.name;
        //     }
        //     getEmail() {
        //         return this.email;
        //     }
        // }

        inquirer
            .prompt(
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
            )
            .then(function (answers) {
                console.log(answers);
            });

    }
}
module.exports = Employee;