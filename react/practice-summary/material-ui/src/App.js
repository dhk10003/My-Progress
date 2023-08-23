import { CssBaseline } from '@mui/material'
import MuiTextField from './components/inputs/MuiTextField'
import MuiSelect from './components/inputs/MuiSelect'
import MuiToggleButton from './components/inputs/MuiToggleButton'
import MuiNavBar from './components/MuiNavBar'
// import MuiButton from './components/inputs/MuiButton'
// import Basics from './components/Basics'
// import MuiTypography from './components/MuiTypography'

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <MuiNavBar />
      {/* <MuiButton /> */}
      {/* <Basics />
      <MuiTypography /> */}
      <MuiTextField />
      <MuiSelect />
      <MuiToggleButton />
    </div>
  )
}

export default App
