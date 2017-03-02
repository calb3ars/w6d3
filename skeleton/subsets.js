// function subsets(array) {
//   if (array.length === 0) {
//     return [[]];
//   }
//
//   let firstEl = array[0];
//   let slicedSubArrays = subsets(array.slice(1));
//   let newSubArrays = slicedSubArrays.map((subArray) =>
//     [firstEl].concat(subArray)
//     // subArray.concat([firstEl])
//   );
//   return slicedSubArrays.concat(newSubArrays);
// }
//
// let arr = [1,2,3,4,5];
// // console.log(subsets(arr));
//
// // Function.prototype.myApply = function(context, args = []) {
// //   this.call(context, ...args);
// // };
// //
// // Function.prototype.myCall = function(context, ...args) {
// //   args = Array.from(arguments.slice(1));
// //   this.apply(context, args);
// // };
//
// // const sumAll = function(...args) {
// //   let result = 0;
// //   args.forEach(function(arg) {
// //     result += arg;
// //   });
// //   return result;
// // };
//
// Function.prototype.myCurry = function (num, ...params) {
//   let args = [];
//   let that = this;
//   params.forEach( (el) => args.push(el));
//
//   function _curried(arg) {
//     args.push(arg);
//     if (args.length >= num) {
//       return that(...args);
//     } else {
//       return _curried;
//     }
//   }
//   return _curried;
// };
//
// function myCurry(fn, num) {
//   let args = [];
//   function _curried(...args) {
//     // console.log(args);
//     arrayOfArgs.forEach( (arg) => {
//       args.push(arg);
//     });
//     if(args.length >= num) {
//       return fn(...args);
//       // return fn.apply(fn, args);
//     } else {
//       return _curried;
//     }
//   }
//
//   return _curried;
// }
//
// // let sumAll = function(...args) {
// //   let result = 0;
// //   console.log(typeof args);
// //   args.forEach(el => result += el);
// //   return result;
// // }
// //
// // console.log(sumAll(1,2,3,4));
// //
// // let spreadAll = function(...args) {
// //   let result = 0;
// //   console.log(typeof args);
// //   args.forEach(el => result += el);
// //   return result;
// // }
// //
// // console.log(spreadAll([1,2,3,4]));
//
// // function Animal(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// //
// // Animal.prototype.sayName = function() {
// //   console.log(this.name);
// // };
//
// // class Animal {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //
// //   sayName() {
// //     console.log(this.name);
// //   }
// // }
//
// let myInfo = {
//   name: "Chase",
//   age: 24
// }
//
//
// const Player = function(name, number) {
//   this.name = name;
//   this.number = number;
// };
//
// const Person = function(name) {
//   this.name = name;
// }
//
// function inherits(child, parent) {
//   child.prototype = Object.create(parent.prototype);
//   child.prototype.constructor = child;
// }
//
// Function.prototype.inherits = function(parent) {
//   this.prototype = Object.create(parent.prototype);
//   this.prototype.constructor = this;
// }
//
// Function.prototype.myBind = function(context, ...bindTimeArgs) {
//   return (...callTimeArgs) => this.call(context, ...bindTimeArgs, ...callTimeArgs);
// };
//
// const myBind = function(fn, context, ...bindTimeArgs) {
//   return (...callTimeArgs) => fn.call(context, ...bindTimeArgs, ...callTimeArgs);
// };
//
//
//
// Player.prototype.sayName = function() {
//   console.log(this.name);
// };
//
// let playerOne = new Player("Chase", 1);
// let playerTwo = new Player("Andrew", 2);
//
// let a = playerOne.sayName.myBind(playerTwo)();
// console.log(a);
//
//
// Function.prototype.myBindApply = function(context, ...args) {
//   return (...callTimeArgs)=> {this.apply(context, args.concat(callTimeArgs))}
// };
//
// function myBindApply2(fn, context, ...bindTimeArgs) {
//   return (...callTimeArgs) => {
//     return fn.apply(context, bindTimeArgs.concat(callTimeArgs));
//   };
// }

// let arr = [[1,2,3],[4,5,6],[7,8,9]];
//
// Array.prototype.myZip = function() {
//   let results = [];
//   for (let outerIndex = 0; outerIndex < this.length; outerIndex++) {
//
//     let innerArray = this[outerIndex];
//     //
//     for (let innerIndex = 0; innerIndex < this[outerIndex].length; innerIndex++) {
//       if(outerIndex === 0) {
//         results.push([this[outerIndex][innerIndex]]);
//       }
//       results[innerIndex].push(this[outerIndex][innerIndex]);
//     }
//   }
//   return results;
// }
//
// let arr = [[1,2,3,4], [5,6], [7]];
// arr.myZip();
//
// function ab( a, b){
//   if( a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// function ba( a, b){
//   if( a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
//
// function merge(left, right, callback) {
//   let mergedArray = [];
//   while(left.length > 0 && right.length > 0) {
//     let pushItem = (callback(left[0], right[0]) === -1) ? left.shift() : right.shift();
//     mergedArray.push(pushItem);
//   }
//
//   return mergedArray.concat(left, right);
// }
//
// Array.prototype.mergeSort = function(comparator = ab) {
//   if (this.length < 2) {
//     return this;
//   }
//   let midx = Math.floor(this.length / 2);
//
//   let left = this.slice(0, midx).mergeSort(comparator);
//   let right = this.slice(midx).mergeSort(comparator);
//
//   return merge(left, right, comparator);
// };
//
// // arr = [23,4,7,4,6,1,3];
// // console.log(arr.mergeSort(ab));
// // console.log(arr.mergeSort(ba));
//
// function binarySearch(array, target) {
//   if (array.length <= 0) {
//     return -1;
//   }
//
//   let midPoint = Math.floor(array.length / 2);
//   let midValue = array[midPoint];
//   if (midValue === target) {
//     return midPoint;
//   } else if (target < midValue) {
//     return binarySearch(array.slice(0, midPoint), target); // found five at index 0
//   } else {
//     let leftSearch = binarySearch(array.slice(midPoint + 1), target);
//     if (leftSearch !== -1) {
//       return leftSearch + 1 + midPoint;
//     } else {
//       return leftSearch;
//     }
//   }
// }
//
// // console.log(binarySearch([1,2,3,4,5,6], 5));
// // // console.log(binarySearch([1,2,3,4,5,6], 4));
// // // console.log(binarySearch([1,2,3,4,5,6], 1));
// // // console.log(binarySearch([1,2,3,4,5,6], 6));
// // // console.log(binarySearch([1,2,3,4,5,6], 7));
//
// function quickSort(array, comparator) {
//   if(!comparator) {
//     function comparator = (a,b) {
//       if (a < b) {
//         return -1;
//       } else if (a > b) {
//         return 1;
//       } else {
//         return 1;
//       }
//     }
//   }
//
//   if (array.length < 2) {
//     return array;
//   }
//
//   let firstEl = array[0];
//   let left = [];
//   let right = [];
//   let restArray = array.slice(1);
//   for(let i = 0; i < restArray.length; i++) {
//     if (restArray[i] < firstEl) {
//       left.push(restArray[i]);
//     } else {
//       right.push(restArray[i]);
//     }
//   }
//
//   return quickSort(left, comparator).concat([firstEl]. quickSort(right, comparator));
// }































const mySum = function(...args) {
  let result = 0;
  args.forEach(function(arg) {
    result = result + arg;
  });
  return result;
};

mySum(1,2,3,4);
