// Write a function `removeFirstVowel` that accepts a string as an argument.
// The function should return the string with it's first vowel removed.

function removeFirstVowel(str){
    let vowels = "aeiou";

    for (i=0; i<str.length; i++){
        let char = str[i];
        
        if (vowels.includes(char)){
            let char1 = str.slice(0, i) ;
            let char2 = str.slice(i+1);

            return char1 + char2 ;
        }
    }
    return str;
};

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'