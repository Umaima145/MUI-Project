import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <img src="../src/assets/logo.png" alt="Jawan Pakistan Logo" style={{ width: '300px' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#22543d',fontSize:"15px", fontWeight:"bold" }}>
              COMPANY
            </Typography>
            <Link href="#" variant="body2" color="#38A169" display="block" sx={{textDecoration:"none",fontSize:"18px"}}>
              Home
            </Link>
            <Link href="#" variant="body2" color="#38A169" display="block"sx={{textDecoration:"none",fontSize:"18px"}}>
              About us
            </Link>
            <Link href="#" variant="body2" color="#38A169" display="block"sx={{textDecoration:"none",fontSize:"18px"}}>
              Trainings
            </Link>
            <Link href="#" variant="body2" color="#38A169" display="block"sx={{textDecoration:"none",fontSize:"18px"}}>
              Contact us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#22543d',fontSize:"15px", fontWeight:"bold" }}>
              CONTACT DETAILS
            </Typography>
            <Typography variant="body2" color="#38A169" sx={{textDecoration:"none",fontSize:"18px"}}>
              Muhammad Ali Mughal
              <br />
              +923005292675
              <br />
              jawantechpk@gmail.com
            </Typography>
            <Box mt={2}>
           <Link href="#" mx={1}>
           <FacebookIcon sx={{ color: 'grey' }} />
           </Link>
           <Link href="#" mx={1}>
           <InstagramIcon sx={{ color: 'grey' }} />
           </Link>
           <Link href="#" mx={1}>
           <LinkedInIcon sx={{ color: 'grey' }} />
           </Link>
           </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2022 JawanPakistan
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
