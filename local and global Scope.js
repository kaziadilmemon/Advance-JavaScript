/* JavaScript has three types of scopes :
1) Block Scope 2) Function Scope 3) Global Scope 

let & const provide block level Scope which means that the variables declared inside a{} cannot be acessed from outside the block.

Variables declared within a JavaScript function, become local to the function.

Variable declared outside a function, becomes global. 
*/

let p = 9
function ax() {
  let a = 8;
  console.log(p)
  console.log(a)
}

ax()
console.log(p)
console.log(a)
