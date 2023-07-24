import { useState } from 'react'
import {
  ButtonBase,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { ContactPhone } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import ManPhone from '../assets/ManPhone.jpeg'
import OtherWomanEmail from '../assets/OtherWomanEmail.jpeg'
import PeoplePhone from '../assets/PeoplePhone.jpeg'
import PersonEmail from '../assets/PersonEmail.jpeg'
import WomanEmail from '../assets/WomanEmail.jpeg'
import WomanPhone from '../assets/WomanPhone.jpeg'

const itemImages = [
  {
    img: `${ManPhone}`,
  },
  {
    img: `${OtherWomanEmail}`,
  },
  {
    img: `${PeoplePhone}`,
  },
  {
    img: `${PersonEmail}`,
  },
  {
    img: `${WomanEmail}`,
  },
  {
    img: `${WomanPhone}`,
  },
]

const Contact = () => {
  const matchesSM = useMediaQuery('(max-width: 600px')
  const matchesLG = useMediaQuery('(max-width: 1200px)')

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [message, setMessage] = useState('')

  const onChange = (event) => {
    let valid

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        )

        if (!valid) {
          setEmailHelper('Please enter a valid email address')
        } else {
          setEmailHelper('')
        }
        break
      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        )

        if (!valid) {
          setPhoneHelper('Please enter a valid phone number')
        } else {
          setPhoneHelper('')
        }
        break
      default:
        break
    }
  }

  return (
    <Grid container direction="row" backgroundColor="#FAF9F6">
      <Grid
        item
        container
        direction="column"
        justifyContent={'center'}
        sx={{
          marginBottom: matchesSM ? '2em' : matchesLG ? '4em' : 0,
          marginTop: matchesSM ? '1em' : matchesLG ? '4em' : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Typography
              variant="h3"
              sx={{
                lineHeight: 1,
                fontVariant: 'small-caps',
                textAlign: 'center',
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item container justifyContent={'center'}>
            <Grid item>
              <ContactPhone
                sx={{
                  marginRight: '0.5em',
                  color: '#4F6367',
                  verticalAlign: 'bottom',
                }}
              />
            </Grid>
            <Grid item>
              <Typography>888-555-5555</Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent={'center'}>
            <Grid item>
              <Email
                sx={{
                  marginRight: '0.5em',
                  color: '#4F6367',
                  verticalAlign: 'bottom',
                }}
              />
            </Grid>
            <Grid item>
              <Typography>info@awesomecompany.com</Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent={'center'}>
            <Grid item>
              <TextField
                variant="outlined"
                label="Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  value={email}
                  onChange={onChange}
                  sx={{
                    marginTop: '1em',
                    marginBottom: '0.5em',
                    width: '20em',
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  value={phone}
                  onChange={onChange}
                  sx={{
                    marginTop: '1em',
                    marginBottom: '0.5em',
                    width: '20em',
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Message"
                  value={message}
                  multiline
                  rows={10}
                  id={message}
                  onChange={(event) => setMessage(event.target.value)}
                  sx={{
                    marginTop: '1em',
                    marginBottom: '0.5em',
                    width: '20em',
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'}>
              <Grid item>
                <ButtonBase
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  variant="contained"
                  color="#ffe5b4"
                >
                  Submit
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={8.5}>
        <ImageList sx={{ height: '70em' }} variant="quilted" cols={4} gap={6}>
          {itemImages.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                alt="People COmmunicating"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  )
}

export default Contact
