const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let x = 0;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
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
  }
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let item of Object.keys(obj1)) {
      let l1 = obj1[item];
      let l2 = obj2[item];
      if (Array.isArray(l1) && Array.isArray(l2)) {
        return eqArrays(l1, l2);
      } else if (l1 !== l2) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
//console.log(eqObjects(ab, ba))
//assertEqual(ab, ba)
const abc = {a: "1", b: "2", c: "3"};
//console.log(eqObjects(ab, abc))
//assertEqual(ab, abc)

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};

const cd2 = {c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);