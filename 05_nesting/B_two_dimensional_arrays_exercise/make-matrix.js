// Write a function `makeMatrix(m, n, value)` that accepts three arguments.
// The function should return a 2-dimensional array of height `m` and width
// `n` that contains the `value` as every element.

function makeMatrix(m, n, value){
    let arr = [];
    for (i=0; i< m; i++){
        let element = [];
        for (j=0; j<n; j++){
            element.push(value);
        }
        arr.push(element);
    }
    return arr;
};

console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]