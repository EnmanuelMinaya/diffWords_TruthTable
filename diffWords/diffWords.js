const { count } = require("console");


function puntuationLess(str) {
    str = str.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    return str;
}


function diffWords(txt) {
    if (txt === '') {
        throw new TypeError('empty string');
    }
    txt = puntuationLess(txt);
    let words = txt.toLowerCase().split(' ');
    const arr = [];

    for (let i = 0; i < words.length; i++) {
        if (!arr.includes(words[i])) {
            arr.push(words[i])
        }
    }
    return arr.length;
}


module.exports = { puntuationLess, diffWords };