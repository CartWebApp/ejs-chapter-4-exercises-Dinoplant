function deepEqual(value, reference){

  if(value === reference){
  return true
  }
    for(let i = 0; i <value.length; i++){
  }
    return Object.keys(value)
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true