
import { createTheme } from '@mui/material/styles';

const font = 'Nunito';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFF',
    },
    secondary: {
      main: "#FC624D"
    }
  },
  typography: {
    fontFamily: font,
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 30,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform:'none'
    }
  },

});

export default lightTheme;