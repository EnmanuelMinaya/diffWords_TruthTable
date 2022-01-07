

expression = "a|b"

function printTable(expression) {

    let row = []
    let str = expression;
    let variables = str.replace(/AND|OR|and|or|XOR|&&|<=|<|>|>=|!=|==|&|OR*|!|[||]{2}|\|/g, '')
    let values = variables.split('')
    console.log(values)
    for (var i = (Math.pow(2, values.length) - 1); i >= 0; i--) {
        for (var j = (values.length - 1); j >= 0; j--) {
            row[j] = (i & Math.pow(2, j)) ? '0' : '1'
        }

        console.log(row)
    }

    if (values.length === 0) {
        throw new Error("No variables")
    }
    if (values.length === 1) {

    }
}




module.exports = { printTable };