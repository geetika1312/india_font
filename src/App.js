import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import './styles.css';

const App = () => {
  return (
    <Box display="flex">
      <Sidebar />
    </Box>
  );
};

export default App;
