// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Filters from './Components/Filters';
import Connectors from './Components/Connectors';
import Results from './Components/Results';
import Format from './Components/Format';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Container maxWidth="xl" component="main" sx={{ flexGrow: 1, py: 2 }}>
      <Grid container spacing={2}>
          <Grid item xs={3}>
            <Filters />
          </Grid>
          <Grid item xs={6}>
            <Connectors />
            <Results />
          </Grid>
          <Grid item xs={3}>
            <Format />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
