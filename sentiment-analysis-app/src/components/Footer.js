// src/components/Footer.js
/*import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: 'primary.main', color: 'white', mt: 4 }}>
      <Typography variant="body2" align="center">
        © 2024 Sentiment Analysis App
      </Typography>
    </Box>
  );
};

export default Footer;*/
// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '10px 20px', textAlign: 'center', width: '100%', position: 'fixed', bottom: 0 }}>
      <p>© Maayura</p>
    </footer>
  );
};

export default Footer;

