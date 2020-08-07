const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('name', 'id', 'email', 'role', 'school');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
    expect(intern.role).toBe('role')
    expect(intern.school).toBe('school');
   
    
});