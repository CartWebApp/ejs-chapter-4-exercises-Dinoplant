function reverseArray(arr) {
  let newarr = [];
  for (i = 0; i < arr.length; i++) {
    newarr.unshift(arr[i]);
  }
  return newarr;
}

function reverseArrayInPlace(arr){
  let temp1 = 0;
  let temp2 = 0;
  for( i = 0; i < arr.length / 2; i++){
  	let temp1 = arr[i];
 	let temp2 = arr[arr.length - 1 - i];
    arr[i] = temp2;
    arr[arr.length - 1 - i] = temp1;
    
  }  console.log(temp1)
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]