const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

        inpuirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'What is your Github username?'
            }
        ])
    }

    
}

module.exports = Engineer;