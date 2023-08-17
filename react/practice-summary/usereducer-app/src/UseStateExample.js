import { useState } from 'react'

const UseStateExample = () => {
  const [dog, setDog] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchDog = () => {
    setLoading(true)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message)
        setLoading(false)
        console.log(data)
      })
      .catch(() => {
        setError('Item not found, try again!')
        setLoading(false)
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: '300px', margin: '1rem' }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="good art" />}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default UseStateExample
