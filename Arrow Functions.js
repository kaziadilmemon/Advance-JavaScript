/* An arrow function expression is a compact alternative to a traditional function expression, 
with some semantic differences and deliberate limitations in usage */

const sayHello = name => {
  console.log("greeting" + " " + name)
  console.log("hi")
}

const x = {
  name: "Adil",
  role: "Js Developer",
  exp: 30,
  show: function() {
    // let that = this
    // console.log(this)
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 2000)
  }
}
sayHello("Adil", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()
