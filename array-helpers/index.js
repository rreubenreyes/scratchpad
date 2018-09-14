require("./helpers.js");

var arr = Array.fromRange(1, 5);
console.log("var arr = Array.fromRange(1, 5) // output:", arr);
console.log("arr.instancesOf(2) // output:", arr.instancesOf(2));
console.log(
  "arr.append(10) (pure function, does not mutate source) // output:",
  arr.append(6)
);
console.log(
  "arr.extend(10) (impure function, does mutate source)\n\t/* output:",
  arr.extend(6),
  "\n\t * original array:",
  arr,
  "\n\t */"
);
console.log("arr.rotateLeft() // output:", arr.rotateLeft());
console.log("arr.rotateLeft(2) // output:", arr.rotateLeft(2));
console.log("arr.rotateRight() // output:", arr.rotateRight());
console.log("arr.rotateRight(5) // output:", arr.rotateRight(5));
