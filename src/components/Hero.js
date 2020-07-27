import React from 'react';
import heroImg from '../images/hero2.png';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="hero">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} className="heroTextarea">
            <div>
              <h3>Get to know all the characters </h3>
              <h3>of your Favorite Tv Show!</h3>
              <Search />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={heroImg} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
