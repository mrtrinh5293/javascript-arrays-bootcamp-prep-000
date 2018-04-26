var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  // array.push(element);
  // return array
  
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
}

function accessElementInArray(array, index){
  
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(0)
}

function removeElementFromBeginningOfArray(array){
  array.slice(-2)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function 

