class Animal {
  constructor(name, mainColor, sound) {
    this.name = name
    this.mainColor = mainColor
    this.sound = sound
  }
  scream(intensity) {
    console.log(`${this.sound} ${'!'.repeat(intensity)}`)
  }
}

class Cat extends Animal {
  constructor(name, mainColor, sound, nbOfLegs) {
    super(name, mainColor, sound)
    this.nbOfLegs = nbOfLegs
  }
}

const garfield = new Cat('Garfield', 'orange', 'Meow', 4)
console.log(garfield)

garfield.scream(8)

class Chameleon extends Animal {
  constructor(name) {
    super(name, 'green', 'zzzz')
  }
  changeColor(newColor) {
    this.mainColor = newColor
  }
}

const pascal = new Chameleon('Pascal')
// pascal.changeColor('red')
console.log(pascal)
