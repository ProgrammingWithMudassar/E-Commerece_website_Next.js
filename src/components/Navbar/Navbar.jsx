import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  sx={{padding:'0 80px'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              LoGo
            </Typography>
            <Button color='secondary'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Navbar;