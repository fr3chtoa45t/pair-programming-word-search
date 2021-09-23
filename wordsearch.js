// wordsearch.js

// In collaboration with Edmund Yu and Kurt Spiker

const transpose = function (matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        newArr.push([matrix[i][j]]);
      } else {
        newArr[j].push(matrix[i][j]);
      }
    }
  }
  return newArr;
};

const wordSearch = (letters, word) => {
  const wordObject = {
    regular: letters.map((ls) => ls.join("")),
    transpose: transpose(letters).map((ls) => ls.join("")),
    reverseRegular: letters.map((ls) => ls.reverse().join("")),
    reverseTranspose: transpose(letters).map((ls) => ls.reverse().join("")),

    findWord: function (grid, word) {
      for (l of grid) {
        if (l.includes(word)) return true;
      }
      return false;
    },

    diagonal: function (letters, word) {
      for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
          if (letters[i][j] === word[0]) {
            let lettersFound = 0;
            for (let x = 1; x < word.length; x++) {
              if (x + i < letters.length && x + j < letters[i].length) {
                if (letters[i + x][j + x] === word[x]) lettersFound++; 
              }
            }
            if (lettersFound === word.length - 1) return true;
          }
        }
      }
      return false;
    },
  };

  if (
    Object.keys(wordObject)
      .slice(0, 4)
      .find(
        (key) =>
          wordObject.findWord(wordObject[key], word) ||
          wordObject.diagonal(wordObject[key], word)
      )
  ) return true;

  return false;
};

module.exports = wordSearch;
