const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.officenumber = officenumber;
    }
}

module.exports = Manager;