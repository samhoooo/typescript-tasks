import { firstMissingPositive } from './task1';

describe('firstMissingPositive', () => {
    test('should return 5 when the array is [1, 4, 6, 3, 2]', () => {
        expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
    });

    test('should return 2 when the array is [3, 4, -1, 1]', () => {
        expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
    });

    test('should return 1 when the array is [-1, -2, -3]', () => {
        expect(firstMissingPositive([-1, -2, -3])).toBe(1);
    });

    test('should return 4 when the array is [1, 2, 3]', () => {
        expect(firstMissingPositive([1, 2, 3])).toBe(4);
    });

    test('should return 1 when the array is empty', () => {
        expect(firstMissingPositive([])).toBe(1);
    });

    test('should return 1 when the array is [0, -1, -2]', () => {
        expect(firstMissingPositive([0, -1, -2])).toBe(1);
    });

    test('should return 3 when the array is [1, 2, 2, 1]', () => {
        expect(firstMissingPositive([1, 2, 2, 1])).toBe(3);
    });
});