const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  for (let item in object) {
    if (callback(object[item].stars)) {
      return item
    }
    //console.log(object[item].stars)
  }
}
const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const results1 = findKey(obj, function(value) {
  if (value === 5) {
    return true
  }
  return undefined
})

console.log(results1)
assertEqual(results1, "noma")