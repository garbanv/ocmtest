import React, { useState } from 'react';
import Header from './Header';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { sizing } from '@material-ui/system';

const Layout = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  function goDark() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ height: '100%', minHeight: '100%' }}>
        <Box height="100%">
          <Grid
            container
            direction="column"
            style={{ height: '100%', minHeight: '100%' }}
          >
            <Header goDark={goDark} />
            {props.children}
          </Grid>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
