import React from 'react'
import NextLink from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from '../../../styles/Navbar.module.css'



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: '0 80px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NextLink href='/' className={style.LinkDecoration}>
            <Typography color='secondary' fontSize={28} fontWeight={600} className={style.brand}>Easy_Buy</Typography>
          </NextLink>
          <Box display="flex" alignItems='center'>
            <Typography variant="" color="initial" mr={3} style={{cursor:'pointer'}}>cart</Typography>
            <Button color='black'>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;