import { Box, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'

const MuiSelect = () => {
  const [skills, setSkills] = useState(null)

  const handleChange = (e) => {
    console.log(e.target.value)
    setSkills(e.target.value)
  }

  return (
    <Box width="350px" p={4}>
      <TextField
        label="Select Skills"
        select
        fullWidth
        onChange={handleChange}
        value={skills}
      >
        <MenuItem value="html">HTML</MenuItem>
        <MenuItem value="javascript">JavaScript</MenuItem>
        <MenuItem value="css">CSS</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
