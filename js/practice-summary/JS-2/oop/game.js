// let player1 = {
//   name: 'Joaquim',
//   color: 'red',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random())
//     this.position = (this.position + dice) % squares.length
//     this.cash += squares[this.position]
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}`)
//     }
//   },
//   displayInfo() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}`
//     )
//   },
// }

// let player2 = {
//   name: 'Monalisa',
//   color: 'blue',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random())
//     this.position = (this.position + dice) % squares.length
//     this.cash += squares[this.position]
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}`)
//     }
//   },
//   displayInfo() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}`
//     )
//   },
// }

// let player3 = {
//   name: 'Jonathan',
//   color: 'yellow',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random())
//     this.position = (this.position + dice) % squares.length
//     this.cash += squares[this.position]
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}`)
//     }
//   },
//   displayInfo() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}`
//     )
//   },
// }

// player1.move()
// player2.move()
// player3.move()

// player1.displayInfo()
// player2.displayInfo()
// player3.displayInfo()

const squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
]

class Player {
  constructor(name, color) {
    this.name = name
    this.color = color
    this.position = 0
    this.cash = 1000
  }

  move() {
    let dice = 1 + Math.floor(6 * Math.random())
    this.position = (this.position + dice) % squares.length
    this.cash += squares[this.position]
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}`)
    }
  }
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}`
    )
  }
}

let player1 = new Player('Joaquim', 'red')
let player2 = new Player('Monalisa', 'blue')
let player3 = new Player('Stephan', 'yellow')

player1.move()
player2.move()
player3.move()

player1.move()
player2.move()
player3.move()

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()
