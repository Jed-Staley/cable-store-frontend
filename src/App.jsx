// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Footer />
    </Box>
  );
}

export default App;
