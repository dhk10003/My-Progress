import { useReducer } from 'react'
import { initialState, reducer } from './reducer'

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { loading, dog, error } = state

  const fetchDog = () => {
    dispatch({ type: 'Start' })
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'Success', payload: data.message })
      })
      .catch(() => {
        dispatch({
          type: 'Fail',
          payload: 'Dog not available, try again later!',
        })
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: '250px', margin: '2rem', padding: '3rem' }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="cute puppy" />}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default ReducerExample
