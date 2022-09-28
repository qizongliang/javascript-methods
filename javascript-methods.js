/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  //  callbackFn(this[i],i,this) <- This is the function itself it stores the output
  //  this[i] <- element of array
  //  i <- index of array
  //  this <- array itself
  let map = []; // create temp array

  for(let i = 0; i < this.length; i++){
    map.push(callbackFn(this[i],i,this)); // push every result of the callback into the temp array
  }
  return map; //return array
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  //  callbackFn(this[i],i,this) <- This is the function itself it stores the output
  //  this[i] <- element of array
  //  i <- index of array
  //  this <- array itself

  let filtered = [];// create temp array
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i],i,this)){ // push every element that is true according to the callback function
      filtered.push(this[i]);
    }
  }
  return filtered; //return array
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  //  callbackFn(this[i],i,this) <- This is the function itself it stores the output
  //  this[i] <- element of array
  //  i <- index of array
  //  this <- array itself

  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i],i,this)){ // if a element like such exist for the array
      return true; // return true
    }
  }
  return false; // return false if none found
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  //  callbackFn(this[i],i,this) <- This is the function itself it stores the output
  //  this[i] <- element of array
  //  i <- index of array
  //  this <- array itself
  for(let i = 0; i < this.length; i++){
    if( !callbackFn(this[i],i,this) ){ // if there is a element in the array that doesn't match the condition given by the callback
      return false; // return false
    }
  }
  return true; //everything matches the condition given by the callback

};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  //  callbackFn(this[i],i,this) <- This is the function itself or the produced outcome
  //  this[i] <- element of array
  //  i <- index of array
  //  this <- array itself
  // Place your code here.
  let sum = 0; // variable storing the sum

  for(let i = 0; i < this.length; i++){ // if 
    sum+= callbackFn(this[i],i,this); // add every callback function result to sum
  }
  return sum; // return sum
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};