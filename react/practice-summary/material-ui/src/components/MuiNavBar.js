import { AcUnit } from '@mui/icons-material'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Badge,
  MenuItem,
  Menu,
  Drawer,
  Box,
  Card,
  CardContent,
  Button,
  Avatar,
} from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react'

const MuiNavBar = () => {
  const [open, setOpen] = useState(false)

  const handleClose = (e) => {
    setOpen(e.currenTarget)
  }

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Stack direction="row" flexGrow={1} alignItems="center" spacing={4}>
              <IconButton
                color="inherit"
                edge="start"
                size="large"
                onClick={handleClose}
              >
                <Drawer />
              </IconButton>
              <IconButton size="large" color="inherit" edge="start">
                <AcUnit />
              </IconButton>
              <Typography variant="h6" component="div">
                AC Company
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <IconButton color="inherit">
                <Badge badgeContent={2} color="error">
                  <Drawer />
                </Badge>
              </IconButton>

              <IconButton onClick={handleClose}>
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt="Helen of Troy"
                />
              </IconButton>
            </Stack>

            <Menu open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default MuiNavBar
