// const translateWord = require('./translate-word.js');
const encoded = require('./encode-word.js');




// const emoteTranslator = process.argv.slice(2);

// const newArr = emoteTranslator.map((arr) => translateWord(arr.toLowerCase()))
// console.log(newArr.join(' '));


const emoteCoder = process.argv.slice(2);

const newArr2 = emoteCoder.map((arr) => encoded(arr.toLowerCase()));
console.log(newArr2.join(' '));




