/* Hoisting : Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution:
Variables can thus be referenced before they are declared in JavaScript

Note: JavaScript only hoists declarations, not initializations, The variable will be undefined untill the line where its initialized is 
reached.

Hoisting with let and var : Function expressions and class expressions are not hoisted. */ 


// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
var greet = function() {
  console.log("Good morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)
