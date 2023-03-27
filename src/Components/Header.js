import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { useNavigate} from 'react-router-dom';
// import '../App.css';
import { CryptoState } from '../Crypto_context';

// console.log(currency)

const darktheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Header = () => {
  const navigate = useNavigate();
  const {currency,setCurrency} = CryptoState()

  return (
    
    <ThemeProvider theme={darktheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          
          <Typography onClick={() => navigate('/')} className='Header' variant='h6'>CoinStats</Typography>


          <Select variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}>
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
