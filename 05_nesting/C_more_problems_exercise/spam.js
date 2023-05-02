// Write a function `spam` that accepts a 2D array as an argument. The array
// contains pairs as elements. The first element of every pair is a word and
// the second element is a number. The function should return a string containing
// the words repeated the specified number of times. See the examples.

function spam(arr){
    let str = [];

    for (i=0; i< arr.length; i++){
        let element = arr[i];
        let el1 = element[0];
        let el2 = element[1];

        for (j=0; j<el2; j++){
            str.push(el1);
        }
    }

    return str.join(" ");
};

let array1 = [
    ["hi", 3],
    ["bye", 2],
  ];
  console.log(spam(array1)); // 'hi hi hi bye bye'
  
  let array2 = [
    ["cat", 1],
    ["dog", 2],
    ["bird", 4],
  ];
  console.log(spam(array2)); // 'cat dog dog bird bird bird bird'