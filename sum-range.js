function range(start, end, step = 1) {
  let number = []; 
   if(start < end){
      for(let i = start; i <= end; i += step){ 
     	 number.push(i);
      }
   }
   else if (start > end){
    for(let i = start; i >= end; i += step){ 
      number.push(i);
   }
  }
   return number;
}

function sum(numbers) {
  let sum = 0
	for (let i = 0; i < numbers.length; i++){
	sum += numbers[i];
	}
  console.log(sum)
  return sum;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
