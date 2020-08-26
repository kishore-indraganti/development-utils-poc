const grettings = require('grettings');

describe('grettings', () => {
    it('grett the world', () => {
        expect(grettings.grett).toBe('Hello Sir');
    });
});