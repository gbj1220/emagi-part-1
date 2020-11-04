const emoteArr = require('./emojis.js');




const encodeWord = function (word) {
  let count = '';
  for (letter of word) {
    for (obj of emoteArr) {
      if (obj.letter === letter) {
        count += obj.symbol;
      }
    }
  }
  return count;

}

// const encodeWord = function (word) {
//   newArr = [];
//   let words = word.split(' ');
//   words.map((letters) => {
//     for (emoji of emoteArr) {
//       if (emoji.letter === letters) {
//         newArr.push(emoji.symbol)
//       }
//     }
//   }
//   )
//   return newArr
// }

// encodeWord('hello')



















module.exports = encodeWord;