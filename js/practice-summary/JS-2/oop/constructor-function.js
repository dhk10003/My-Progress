const users = ['Megan', 'Andrea', 'Mark', 'Adam', 'Luisa']

function User(username, password) {
  this.username = username
  this.passwrod = password
  this.login = () => {
    console.log('User logged in')
  }
  this.logout = () => {
    console.log('User logged out')
  }
}

const usersObject = users.map((user) => {
  return new User(user, '1234')
})

console.log(usersObject)

// const user1 = new User('Maria678', '1234')
// console.log(user1)
