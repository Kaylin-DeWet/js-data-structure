// Write a function `shortenLongWords` that accepts a sentence string as an
// argument. The function should return the same sentence where words longer
// than 4 characters have their vowels removed.

function shortenLongWords(sent) {
    let words = sent.split(" ");
    let newSent = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (word.length > 4) {
        let noVowels = removeVowels(word);
        newSent.push(noVowels);
      } else {
        newSent.push(word);
      }
    }
    return newSent.join(" ");
  };

  function removeVowels (str) {
    let newStr = "";
    let vowels = 'aeiou';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (!vowels.includes(char)) {
        newStr += char;
      }
    }
    return newStr;
  };

console.log(shortenLongWords("they are very noble people")); 
// 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); 
// 'bllrna, you must have seen her'