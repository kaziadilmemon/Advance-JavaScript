/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function */

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()
