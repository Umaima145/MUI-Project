import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
  Box,
  Stack,
} from '@mui/material';
import '../App.css'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, email, phoneNumber, message });
  };

  return (
    <Stack sx={{border:"1px solid #4a4a4a"}}>
      <Container maxWidth="sm" sx={{marginTop:"50px", marginBottom:"50px", padding:"15px"}}>
      <Typography variant="h4" gutterBottom align="left" sx={{color:"grey",fontWeight:"bold"}}>
        Contact
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name *"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email *"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number *"
              variant="outlined"
              fullWidth
              required
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message *"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth sx={{backgroundColor:"#006838", }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
        
    </Stack>
);
};

export default Form;