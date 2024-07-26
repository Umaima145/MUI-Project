import React from 'react';
import { Box, Grid, Typography, Avatar, Card, CardMedia, CardContent } from '@mui/material';

const itTrainings = [
  {
    title: 'Web and Mobile Application Development',
    image: '../src/assets/webdev.png',
  },
  {
    title: 'Flutter Mobile Application Development',
    image: '../src/assets/flutter.jpg',
  },
  {
    title: 'Graphic Design And Video Editing',
    image: '../src/assets/graphic.jpg',
  },
  {
    title: 'Digital And Social Media Marketing',
    image: '../src/assets/digital.png',
  },
  {
    title: 'Blockchain Development',
    image: '../src/assets/blockchain.jpg',
  },
];

const SirAli = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, marginBottom:10, boxShadow: '0px 10px 25px grey'}}>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4} textAlign="center">
          <Avatar
            alt="Muhammad Ali Mughal"
            src="../src/assets/image.jpg"
            sx={{ width: 200, height: 200, mx: 'auto', mt:10}}
          />
          <Typography variant="h5" component="h2"  sx={{ mt: 2, fontWeight: 'bold', color: '#006838' }}>
            MUHAMMAD ALI MUGHAL
          </Typography>
          <Typography variant="body1" component="p" sx={{ mt: 1, color: 'grey' }}>
            Founder of Jawan Pakistan
          </Typography>
          <Typography variant="body2" component="p" sx={{ mt: 2, color: 'grey', maxWidth: 600, mx: 'auto' }}>
            We aim to be the most efficient provider of business process outsourcing services by setting the industry
            standards for cost and quality of services. Our long term success will be driven by our relentless focus on
            recruiting and developing the most talented pool of human capital in our industry.
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" sx={{ mt: 10, textAlign: 'center', color: '#006838', fontWeight: 'bold' }}>
        IT Trainings Offering In Jawan Pakistan
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
        {itTrainings.map((training, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 350, mx: 'auto' }}>
              <CardMedia component="img" height="140" image={training.image} alt={training.title} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{textAlign:"center"}}>
                  {training.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SirAli ;
