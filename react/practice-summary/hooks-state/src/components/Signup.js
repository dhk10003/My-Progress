import { ButtonBase, Card, TextField, Grid } from '@mui/material'
import { useState } from 'react'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password,
    }
    console.log(newUser)
  }

  const onClear = () => {
    setFirstName('')
    setLastName('')
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <Grid container direction="row" justifyContent={'center'}>
      <Card
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 12,
          padding: '3em',
          marginTop: '1em',
          marginBottom: '0.5em',
          width: '20em',
        }}
      />
      <form onSubmit={(event) => handleSubmit(event)}>
        <TextField
          variant="outlined"
          label="First Name"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ButtonBase type="submit" onClick={onClear}>
          Sign Up
        </ButtonBase>
      </form>
    </Grid>
  )
}

export default Signup
