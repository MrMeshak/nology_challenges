import { sum } from '../sum.js';

describe('sum - sum', () => {
  describe('if there are no parameters passed', () => {
    it('should throw an Error with message', () => {
      expect(() => sum()).toThrow(new Error('You must have at least one argument for this function'));
    });
  });

  describe('if there are any of the parameters that are not numbers', () => {
    it('should throw an Error with message', () => {
      expect(() => sum('2', '3', '4', true)).toThrow(new Error('All arguments must be of type number'));
    });
  });

  describe('If all parameters are valid numbers', () => {
    it('should return the sum as a number', () => {
      const result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      const expected = 55;
      expect(result).toBe(expected);
    });
  });
});
