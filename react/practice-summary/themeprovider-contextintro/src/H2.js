import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

const H2 = ()=>{
    // We are assigning theme to the theme object from the ThemeContext:
    const theme=useContext(ThemeContext)
    return(
      <div>
        <h2 style={{
          color: theme.colors.text.other
        }}>
          This is a test
        </h2>
      </div>
    )
  }

  export default H2