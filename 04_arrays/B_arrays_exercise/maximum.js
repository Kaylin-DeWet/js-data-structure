// Write a function `maximum` that accepts an array of numbers
// as an argument. The function should return the largest
// number of the array. If the array is empty, then the
// function should return null.

function maximum(arr){
    let a = arr[0];

    for (i=1; i<arr.length; i++){
        let b = arr[i];
        if (b > a){
            a = b;
        }
    }
    if (arr.length === 0){
        return null;
    }
    return a;
};

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null