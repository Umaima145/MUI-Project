import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Section1 = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Box>
          <Typography component="div">
            <h1 style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              margin: "0px 0px 16px",
              width: "100%",
              marginTop: "150px",
              color: "#006838"
            }}>
              Introduction To Jawan Pakistan
            </h1>
          </Typography>
          <Typography sx={{
            color: "grey",
            marginTop: "10px"
          }}>
            The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box display="flex" justifyContent="center">
          <img style={{
            width: "100%",
            maxWidth: "600px",
            marginTop: "130px"
          }} 
          src="./src/assets/1.png" alt="png" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Section1;
