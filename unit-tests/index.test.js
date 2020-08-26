const { addNumbers } = require('./index');

const math = require('./math');


describe('addNumbers', () => {
    it('should return sum of 2 numbers', () => {
        const arg1 = 2;
        const arg2 = 2;
        const addSpy = jest.spyOn(math, 'add');
        const result = addNumbers(arg1, arg2);
        expect(addSpy).toHaveBeenCalledTimes(1);
        expect(addSpy).toHaveBeenCalledWith(arg1, arg2);
        expect(addSpy).toHaveBeenCalled();
        expect(result).toBe(4);
        addSpy.mockClear();
    });
}); 