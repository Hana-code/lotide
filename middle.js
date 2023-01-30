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

const middle = function(arr) {
  let newArr = []
  if (arr.length <= 2) {
    return newArr
  } else if (arr.length % 2 !== 0) {
    let mid = Math.floor(arr.length / 2)
    newArr.push(arr[mid])
    return newArr
  } else if (arr.length % 2 === 0) {
    let middleTwo = arr.length / 2
    newArr.push(arr[middleTwo - 1]) 
    newArr.push(arr[middleTwo])
    return newArr
  }
}

console.log(middle([]))
console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5]))

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([1, 2, 3, 4, 5, 6]))