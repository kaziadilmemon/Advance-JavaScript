/* Question no : 3 Write a JavaScript function which resolves a promise after n Seconds. The Function takes n as the parameter.
Use an LIFE to execute the functions with different values of n */

const a = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 1000 * n)
  })
}


(async () => {
  let text = await a("I am resolving after 1 second", 1)
  console.log(text)
  text = await a("I am resolving after 4 seconds", 4)
  console.log(text)
}
)()
