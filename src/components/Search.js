import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <Box mt={2}>
      <Link to={'/allcharacters'}>
        <Button variant="contained" color="primary">
          See all characters now!
        </Button>
      </Link>
    </Box>
  );
}
