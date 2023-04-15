// Write a function `stringsToLengths` that accepts
// an array of strings as an argument. The function
// should return a new array containing the lengths
// of the elements of the original array.

function stringsToLengths(arr){
    let newArr = [];

    for (i=0; i<arr.length ; i++){
        let element = arr[i];
        let char = element.length;
        newArr.push(char);
    }
    return newArr;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]