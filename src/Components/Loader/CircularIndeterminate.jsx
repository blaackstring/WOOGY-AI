import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

export default function CircularIndeterminate({ isfalse }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isfalse);
  }, [isfalse]);


  return (
    <div>
      {isLoading && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
         <h1>FETCHING...</h1> <CircularProgress />
        </Box>
      )}
    </div>
  );
}
