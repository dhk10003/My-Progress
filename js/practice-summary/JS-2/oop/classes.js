// class User {
//   constructor(username, password) {
//     this.username = username
//     this.password = password
//   }
//   login() {
//     console.log(`${this.username} is logged in.`)
//   }
// }

// const user1 = new User('Marco', 'heyhello')
// console.log(user1)
// user1.login()

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getDOB() {
    console.log(2023 - this.age)
  }
}

class Resident extends Person {
  constructor(name, age, city, district) {
    super(name, age)
    this.city = city
    this.district = district
  }
  getBio() {
    console.log(
      `${this.name} is a resident of ${this.city} in the ${this.district}.`
    )
  }
}

const Don = new Resident('Donny', 44, 'Barcelona', 'Barco')
Don.getDOB()
Don.getBio()
