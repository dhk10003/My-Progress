import React from 'react'

const heading = <h1>Welcome to our App!</h1>

const user = {
  firstName: 'Anna',
  lastName: 'Rodrigues',
}

const { firstName, lastName } = user

const capitalizedFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

const Users = () => {
  return (
    <div className="App">
      {heading}
      <h3>
        Hi, {firstName} {lastName}
      </h3>
      <h4>
        In Uppercase: {firstName.toUpperCase()} {lastName.toUpperCase()}!
      </h4>
      <h4>
        Capitalized: {capitalizedFirstLetter(firstName)}
        {capitalizedFirstLetter(lastName)}
      </h4>
    </div>
  )
}

export default Users
