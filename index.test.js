import { capitalize, calculator, reverseString } from './index';

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
