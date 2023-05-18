/* LIFE : Immediatly Invoked Functions Expressions 

LIFE is a javascript function tha runs as soon as it is defined. It is used to avoid polluting the global namespace, execute an async-await, etc.
*/

let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456)
    }, 4000)
  })
}

(async () => {
  let b = await a()
  console.log(b)
  let c = await a()
  console.log(c)
  let d = await a()
  console.log(d)
})()


// console.log(d) // Throws error
