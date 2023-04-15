// Write a function `makeAcronym` that accepts a sentence
// string as an argument. The function should return a string
// containing the first character of each word in the sentence.

function makeAcronym(sent){
    let str = [];
    let words = sent.split(" ");

    for (i=0; i<words.length; i++){
        let word = words[i];
        let letter = word[0];
        str.push(letter);
    }
    return str.join(" ").toUpperCase();
};

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS