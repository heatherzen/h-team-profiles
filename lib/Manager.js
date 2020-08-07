const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
}

module.exports = Manager;