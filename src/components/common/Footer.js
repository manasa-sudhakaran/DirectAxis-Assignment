import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Box component="footer" style={{backgroundColor: "#f1f2f5", paddingTop: "18px", paddingBottom: "18px"}}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="text.secondary" component="p">
          © {new Date().getFullYear()} E store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
