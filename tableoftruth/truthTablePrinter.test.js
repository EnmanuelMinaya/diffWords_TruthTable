const { evaluate } = require('./truthTablePrinter.js');

test('should return 0 for A= "A&B|(!C)"', () => {
    let A = 1;
    let B = 0;
    let C = 1;
    expect(evaluate(A, B, C)).toBe(0);
})

