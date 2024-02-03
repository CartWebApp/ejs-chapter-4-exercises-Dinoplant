function arrayToList(arr){
  let list = null;  
   for(let i = arr.length -1; i >= 0; i -= 1){
    list = {value:arr[i], rest: list}
   }
 return list
 }
 
 function listToArray(list, arr){
    arr= []
   for (let i = list; i; i = i.rest) {
    let c = -1
     arr[c] = arr.push(i.value);
  c++
   }
   return arr;
 }
 
 function prepend(list, place){
 return {value: list, rest: place}
 }
 
 
 
 console.log(arrayToList([10, 20]));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(listToArray(arrayToList([10, 20, 30])));
 // → [10, 20, 30]
 console.log(prepend(10, prepend(20, null)));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(nth(arrayToList([10, 20, 30]), 1));
 // → 20