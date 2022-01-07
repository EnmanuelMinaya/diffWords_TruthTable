const { evaluate } = require('./truthTablePrinter.js');

test('should return ["0","1"] for variable A', () => {
    let expression = 'A';
    expect(printTable(expression)).toEqual(expect.arrayContaining(["0", "1"]));;
})

test('should return ["0","1"] for variable A', () => {
    let expression = '!A';
    expect(printTable(expression)).toEqual(expect.arrayContaining(["1", "0"]));;
})

test('should return ["0","1"] for variable A', () => {
    let expression = 'A|B';
    expect(printTable(expression)).toEqual(expect.arrayContaining([
        ['0', '0'],
        ['1', '0'],
        ['0', '1'],
        ['1', '1']]));;
})



