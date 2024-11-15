// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box, Grid, Divider, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './Connectors.scss';

const Connectors = () => {
  // Separate state for each connector side
  const [connector1Type, setConnector1Type] = useState('');
  const [connector1Gender, setConnector1Gender] = useState('male');
  const [connector2Type, setConnector2Type] = useState('');
  const [connector2Gender, setConnector2Gender] = useState('male');

  const connectorOptions = ['USB A', 'USB mini', 'USB C'];

  const handleConnector1Change = (event) => {
    setConnector1Type(event.target.value);
  };

  const handleConnector2Change = (event) => {
    setConnector2Type(event.target.value);
  };

  const handleGender1Change = (event) => {
    setConnector1Gender(event.target.value);
  };

  const handleGender2Change = (event) => {
    setConnector2Gender(event.target.value);
  };

  return (
    <Box className="box" sx={{ padding: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom align="center">Connector 1</Typography>
          <FormControl fullWidth margin="normal" className="formControl">
            <InputLabel className="select-label">Connector Type</InputLabel>
            <Select
              value={connector1Type}
              onChange={handleConnector1Change}
              renderValue={(selected) => selected}
              className="select" sx={{ pl: 2, backgroundColor: 'white' }}
            >
              {connectorOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" className="formControl">
            <Select value={connector1Gender} onChange={handleGender1Change} className="select" sx={{ pl: 2, backgroundColor: 'white' }}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Divider orientation="vertical" flexItem className="divider" />
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom align="center">Connector 2</Typography>
          <FormControl fullWidth margin="normal" className="formControl">
            <InputLabel className="select-label">Connector Type</InputLabel>
            <Select
              value={connector2Type}
              onChange={handleConnector2Change}
              renderValue={(selected) => selected}
              className="select" sx={{ pl: 2, backgroundColor: 'white' }}
            >
              {connectorOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" className="formControl">
            <Select value={connector2Gender} onChange={handleGender2Change} className="select" sx={{ pl: 2, backgroundColor: 'white' }}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Connectors;
