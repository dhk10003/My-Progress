import { Box, styled } from '@mui/material'

const Basics = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    color: '#333',
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'red',
    },
    backgroundColor: theme.palette.secondary.light,

    padding: '1rem',
    width: '100%',
    height: '100px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }))

  return (
    // <Box
    //   sx={{
    //     color: 'white',
    //     bgcolor: 'primary.light',
    //     p: '1rem',
    //     width: '100px',
    //     height: '100px',
    //     cursor: 'pointer',
    //     '&:hover': {
    //       bgcolor: 'primary.dark',
    //     },
    //   }}
    // >
    //   Hello World!
    // </Box>

    <div>
      <StyledBox>Hello World!</StyledBox>

      <Box
        sx={{
          bgcolor: {
            xs: 'yellow',
            sm: 'red',
            md: 'green',
            lg: 'blue',
            xl: 'gray',
          },
        }}
        p={2}
      ></Box>
    </div>
  )
}

export default Basics
