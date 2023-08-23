import { Box, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'

const MuiTypography = () => {
  let md = useMediaQuery('(max-width:900px)')
  let sm = useMediaQuery('(max-width:600px)')

  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Heading 1
      </Typography>
      <Typography variant="h2" align="center">
        Heading 2
      </Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4" mt={3}>
        Heading 4
      </Typography>
      <Typography variant="h5" color={'gray'}>
        Heading 5
      </Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography
        variant="body1"
        mt={3}
        ml={sm ? 0 : md ? '1px' : 3}
        mr={3}
        p={1}
        bgcolor={'yellow'}
        justifyContent={'right'}
        textAlign={'right'}
        border={'2px solid black'}
        borderRadius={sm ? 0 : md ? '5px' : '10px'}
        sx={{
          mb: {
            xs: 0,
            sm: 2,
            md: 4,
            lg: 8,
            xl: 10,
          },
          backgroundColor: {
            xs: 'gray',
            sm: 'yellow',
            md: 'purple',
            lg: 'blue',
            xl: 'white',
          },
          fontSize: {
            xs: '2rem',
            sm: '4rem',
            md: '8rem',
            lg: '12rem',
            xl: '16rem',
          },
        }}
      >
        What’s he that wishes so? My cousin Westmoreland? No, my fair cousin: If
        we are mark’d to die, we are enow To do our country loss; and if to
        live, The fewer men, the greater share of honour. God’s will! I pray
        thee, wish not one man more. By Jove, I am not covetous for gold, Nor
        care I who doth feed upon my cost; It yearns me not if men my garments
        wear; Such outward things dwell not in my desires: But if it be a sin to
        covet honour, I am the most offending soul alive.
      </Typography>
      <Typography variant="body2">
        He that outlives this day, and comes safe home, Will stand a tip-toe
        when the day is named, And rouse him at the name of Crispian. He that
        shall live this day, and see old age, Will yearly on the vigil feast his
        neighbours, And say ‘To-morrow is Saint Crispian:’ Then will he strip
        his sleeve and show his scars. And say ‘These wounds I had on Crispin’s
        day.’He that outlives this day, and comes safe home, Will stand a
        tip-toe when the day is named, And rouse him at the name of Crispian. He
        that shall live this day, and see old age, Will yearly on the vigil
        feast his neighbours, And say ‘To-morrow is Saint Crispian:’ Then will
        he strip his sleeve and show his scars. And say ‘These wounds I had on
        Crispin’s day.’
      </Typography>
    </Box>
  )
}

export default MuiTypography
