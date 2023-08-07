import { useState, useEffect } from 'react'

import Card from '../Card/Card'
import classes from './Login.module.css'
import Button from '../Button/Button'

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState()
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    //validate email
    setEmailIsValid(enteredEmail.includes('@'))

    //validate password
    setPasswordIsValid(enteredPassword.trim().length > 6)

    //validate the whole form
    setFormIsValid(emailIsValid && passwordIsValid)
  }, [
    emailIsValid,
    enteredEmail,
    enteredPassword,
    formIsValid,
    passwordIsValid,
  ])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(enteredEmail, enteredPassword)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
