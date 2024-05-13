import { highestNumberOfConsecutiveRepeats } from './task2';

describe('highestNumberOfConsecutiveRepeats', () => {
    test('should return 2 when the array is ["a", "jq", "bpa", "bpa", "q"]', () => {
        expect(highestNumberOfConsecutiveRepeats(['a','jq','bpa','bpa','q'])).toBe(2);
    });

    test('should return 0 when the array is array', () => {
        expect(highestNumberOfConsecutiveRepeats([])).toBe(0);
    });

    test('should return 1 when the array has no repeats', () => {
        expect(highestNumberOfConsecutiveRepeats(["a", "jq", "bpa"])).toBe(1);
    });

    test('should return 4 when all four elements the same', () => {
        expect(highestNumberOfConsecutiveRepeats(["a", "a", "a", "a"])).toBe(4);
    });

    test('should return 1 when the array is single element array', () => {
        expect(highestNumberOfConsecutiveRepeats(["a"])).toBe(1);
    });

    test('should return 1 when the array is in alternating patterns', () => {
        expect(highestNumberOfConsecutiveRepeats(["a", "jq", "a", "jq"])).toBe(1);
    });

    test('should return 3 when the array is ["a", "jq", "jq", "jq", "a", "a"]', () => {
        expect(highestNumberOfConsecutiveRepeats(["a", "jq", "jq", "jq", "a", "a"])).toBe(3);
    });

    test('should return 1 when the array is ["bpa", "Bpa", "BPA"]', () => {
        expect(highestNumberOfConsecutiveRepeats(["bpa", "Bpa", "BPA"])).toBe(1);
    });
});