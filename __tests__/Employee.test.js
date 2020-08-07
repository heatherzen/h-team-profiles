const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('name', 'id', 'email', 'role');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.role).toBe('role');
    
});

