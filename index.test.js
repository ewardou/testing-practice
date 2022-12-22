import { capitalize, calculator, reverseString, analyzeArray } from './index';

test('Capitalize', () => {
    expect(capitalize('toMAtO')).toBe('Tomato');
});

test('Capitalize 2', () => {
    expect(capitalize('CANADA')).toBe('Canada');
});

test('Reverse string', () => {
    expect(reverseString('Mango')).toBe('ognaM');
});

test('Reverse string 2', () => {
    expect(reverseString('ARseNaL?!')).toBe('!?LaNesRA');
});

test('Sum', () => {
    expect(calculator.add(3, 14)).toEqual(17);
});

test('Subtraction', () => {
    expect(calculator.subtract(5, 8)).toEqual(-3);
});

test('Division', () => {
    expect(calculator.divide(60, 0.5)).toEqual(120);
});

test('Multiplication', () => {
    expect(calculator.multiply(8, 12)).toEqual(96);
});

test('Analyze array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('Analyze array 2', () => {
    expect(() => analyzeArray([])).toThrow();
});
