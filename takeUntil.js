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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break
    }
    results.push(item)
  }
  return results
}


const results1 = takeUntil(data1, function(value) {
  if (value < 0) {
    return true
  }
})
console.log(results1)

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, value => {
  if (value === ",") {
    return true
  }
})
console.log(results2)

assertArraysEqual(data1, results1)
assertArraysEqual(data2, results2)