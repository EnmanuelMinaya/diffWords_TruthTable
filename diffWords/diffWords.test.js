const { puntuationLess, diffWords } = require('./diffWords.js');

test('should launch exception for empty or null string', () => {
    expect(() => { diffWords('') }).toThrow('empty string');
});

test('should return vivir vivir deleting puntuation from vivir, vivir!', () => {
    expect(puntuationLess('vivir, vivir!')).toBe('vivir vivir');
});

test('should return the count 1 of vivir vivir ', () => {
    expect(diffWords('vivir vivir')).toBe(1);
})

test('should return the count 4 of vivir vivir dfsg dfgdfg dfgsdf', () => {
    expect(diffWords('vivir vivir \ndfsg dfgdfg dfgsdf')).toBe(4);
})