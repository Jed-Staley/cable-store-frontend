/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Typography variant="h6">
            Cable Store
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;