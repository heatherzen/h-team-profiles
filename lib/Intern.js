const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
}

module.exports = Intern;