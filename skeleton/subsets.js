function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  let firstEl = array[0];
  let slicedSubArrays = subsets(array.slice(1));
  let newSubArrays = slicedSubArrays.map((subArray) =>
    [firstEl].concat(subArray)
    // subArray.concat([firstEl])
  );
  return slicedSubArrays.concat(newSubArrays);
}

let arr = [1,2,3,4,5];
// console.log(subsets(arr));

// Function.prototype.myApply = function(context, args = []) {
//   this.call(context, ...args);
// };
//
// Function.prototype.myCall = function(context, ...args) {
//   args = Array.from(arguments.slice(1));
//   this.apply(context, args);
// };

// const sumAll = function(...args) {
//   let result = 0;
//   args.forEach(function(arg) {
//     result += arg;
//   });
//   return result;
// };

Function.prototype.myCurry = function (num, ...params) {
  let args = [];
  let that = this;
  params.forEach( (el) => args.push(el));

  function _curried(arg) {
    args.push(arg);
    if (args.length >= num) {
      return that(...args);
    } else {
      return _curried;
    }
  }
  return _curried;
};

function myCurry(fn, num) {
  let args = [];
  function _curried(...args) {
    // console.log(args);
    arrayOfArgs.forEach( (arg) => {
      args.push(arg);
    });
    if(args.length >= num) {
      return fn(...args);
      // return fn.apply(fn, args);
    } else {
      return _curried;
    }
  }

  return _curried;
}

// let sumAll = function(...args) {
//   let result = 0;
//   console.log(typeof args);
//   args.forEach(el => result += el);
//   return result;
// }
//
// console.log(sumAll(1,2,3,4));
//
// let spreadAll = function(...args) {
//   let result = 0;
//   console.log(typeof args);
//   args.forEach(el => result += el);
//   return result;
// }
//
// console.log(spreadAll([1,2,3,4]));

function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
};

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }
}
