import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material'
import { useState } from 'react'
import { FormatItalic, FormatBold, FormatUnderlined } from '@mui/icons-material'

const MuiToggleButton = () => {
  const [formats, setFormats] = useState([])

  const handleFormatChange = (e, updatedFormats) => {
    console.log(updatedFormats)
    setFormats(updatedFormats)
  }

  return (
    <Box spacing={4} p={3}>
      <ToggleButtonGroup
        size="small"
        color="success"
        orientation="horizontal"
        value={formats}
        onChange={handleFormatChange}
        exclusive
      >
        <ToggleButton value="italic" p={2}>
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="bold" p={2}>
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="underlined" p={2}>
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

export default MuiToggleButton
