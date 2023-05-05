/* Question no : 2 Write a JavaScript program to find average of numbers in an array using spread syntax */

function sum(a, b, c) {
  return a + b + c
}

let x = [1, 3, 5]
console.log(sum(...x));
