const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'role', 'github');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.role).toBe('role')
    expect(engineer.github).toBe('github');
   
    
});