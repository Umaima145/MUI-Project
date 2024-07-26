import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const MissionVisionSection = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, marginTop: 10, boxShadow: '0px 10px 25px grey' , marginBottom: 0,}}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img 
              src="../src/assets/2.png" 
              alt="Mission Vision" 
              style={{ width: '100%', maxWidth: '700px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" sx={{ color: '#006838', fontWeight: 'bold' }}>
            Mission And Vision <br /> Behind Jawan Pakistan
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2, color: 'grey' }}>
            Our vision is to bring our students into the 21st century through innovation and modern technology. 
            To create a better every day life for every people. This program is not only impacting the youth in 
            monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. 
            minimizing frustration among the unemployed youth.
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 2, color: 'grey' }}>
            Our mission is to provide high quality education that connects young people with opportunities to 
            transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and 
            disheartened when they do not succeed in getting their dream jobs. This training reinforces the 
            educated youth to earn well through freelancing, develop variety of skills through specified domains 
            and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This 
            energy diversion definitely make the youth more confident, self-reliant and constructive asset for a 
            progressing economy.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MissionVisionSection
