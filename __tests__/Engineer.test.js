const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('github');

    expect(engineer.github).toBe('github');
   
    
});