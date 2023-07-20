// const person = {
//   name: 'John',
//   age: 29,
//   sayHello: function () {
//     console.log(`Hello, ${person.name}`)
//   },
// }

// person.sayHello()

const users = ['Megan', 'Andrea', 'Mark', 'Adam', 'Luisa']

const usersObject = users.map((user) => {
  let object = {}
  ;(object.username = user),
    (object.password = '5678'),
    (object.login = () => {
      console.log('User logged in')
    }),
    (object.logout = () => {
      console.log('User logged out')
    }),
    (object.sayHello = () => {
      console.log(`Hello, ${object.username}`)
    })
  return object
})

// console.log(usersObject)
usersObject[2].sayHello()
// user1.login()

//Constructor function //

function Person(name, age) {
  this.name = name
  this.age = age
}

const person1 = new Person('John', 34)
const person2 = new Person('Megan', 20)

console.log(person1)
console.log(person2)
