/* Question no : 1 Write a JavaScript program to print the following after 2 second delay: */

const a = async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 2000)
  })
}

(
  async () => {
    let text = await a("Hello")
    console.log(text)
    text = await a("World")
    console.log(text)
  }
)()
