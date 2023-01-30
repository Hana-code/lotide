const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  }
}

const eqArrays = function (arr1, arr2) {
  let x = 0;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let value1 = arr1[i];
    do {
      let value2 = arr2[x];
      if (value1 !== value2) {
        return false;
      } else if (value1 === value2) {
        x = x + 1;
        break;
      }
    } while (x < arr2.length);
  }
  return true;
};

const flatten = function(array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flattenedArray.push(item);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));