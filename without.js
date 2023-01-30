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

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (typeof source[i] !== typeof itemsToRemove[x]) {
        continue;
      } else if (source[i] !== itemsToRemove[x]) {
        newArr.push(source[i]);
      }
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1]))
assertArraysEqual([1, 2, 3], [1])

console.log(without(["1", "2", "3"], [1, 2, "3"]))
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);