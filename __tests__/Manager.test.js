const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'officenumber');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.officenumber).toBe('officenumber');
   
    
});