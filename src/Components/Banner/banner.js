import { Container, Typography } from '@mui/material';
import React from 'react'
import Carousel from './carousel';
import './bannerr.css'

function Banner() {
  // const classes = useStyles();

  return (
    <div className={"banner"}>
      <Container className={"bannerContent"}>
        <div className="bannertagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;