// console.log(this)

// console.log(module)

// module.exports.firstName = 'Martha'

// console.log(this)

let person = {
  firstName: 'Johana',
  lastName: 'Bart',
  age: 32,
  //   getThis: function () {
  //     console.log(this)
  //   },
  getFullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

console.log(person.getFullName())
// person.getThis()
