import { Button, Stack, Box, IconButton } from '@mui/material'
import { Send } from '@mui/icons-material'

const MuiButton = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text Button</Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="outlined" href="#">
          Link Button
        </Button>
        <Button variant="contained" disabled>
          Disabled Button
        </Button>
      </Stack>

      <Box>
        <Button
          variant="contained"
          startIcon={<Send />}
          color="success"
          sx={{ m: 1 }}
        >
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<Send />}
          color="success"
          sx={{ m: 1 }}
        >
          Send
        </Button>

        <IconButton color="error" size="large" variant="sharp">
          <Send />
        </IconButton>
      </Box>
    </div>
  )
}

export default MuiButton
