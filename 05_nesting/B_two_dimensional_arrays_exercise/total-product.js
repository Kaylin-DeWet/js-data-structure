// Write a function `totalProduct(array)` that accepts a 2D array of numbers.
// The function should return the total product of all numbers in the array.

function totalProduct(array){
  let total = 1;
  
  for (i=0; i<array.length; i++){
    let element1 = array[i]

    for (j=0; j< element1.length; j++){
      let element2 = element1[j];
      total = total * element2;
    }
  }

  return total;
};

let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288