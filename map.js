const eqArrays = function(arr1, arr2) {
  let x = 0;
  if (arr1.length !== arr2.length) {
    return false
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
    }
    while (x < arr2.length);
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => word);
console.log(results2)

const results3 = map(words, word => word[0] + "1")
assertArraysEqual(words, results1)
assertArraysEqual(words, results2)
assertArraysEqual(words, results3)