import { RemoveRedEye, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
import { useState } from 'react'

const MuiTextField = () => {
  const [show, setShow] = useState(false)

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          size="small"
          placeholder="Outlined"
          color="secondary"
          required
          helperText="Provide your name"
        />
        <TextField
          label="Name"
          size="small"
          placeholder="filled"
          color="secondary"
          required
          variant="filled"
          helperText="Please provide name"
        />
        <TextField
          label="Name"
          size="medium"
          placeholder="standard"
          variant="standard"
          color="primary"
          helperText="Name please"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Amount"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />

        <TextField
          label="Password"
          type={show ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShow(!show)}>
                  {show ? <RemoveRedEye /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
