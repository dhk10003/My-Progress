const person = {
  getDOB: function () {
    console.log(2023 - this.age)
  },
}

const Anna = {
  age: 29,
}

const Peter = {
  age: 25,
}

person.getDOB.call(Anna)
person.getDOB.call(Peter)

//Bind transforms the method and returns a new method //
const annaDOB = person.getDOB.bind(Anna)
annaDOB()
