import React from 'react'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <>
      <Box mt={5}>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Typography variant="body1" color="initial" textAlign='center' m={2}>Made by Mudassar Hussain.</Typography>
      </Box>
    </>
  )
}

export default Footer