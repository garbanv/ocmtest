import React from 'react';
import heroImg from '../images/heroimg.png';
import {
  Container,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import reactlogo from '../images/reactlogo.png';
import grapqhllogo from '../images/grpahqllogo.png';
import jslogo from '../images/jslogo.png';

export default function Technolgy() {
  return (
    <div className="technology">
      <Container container maxWidth="lg" py={3}>
        <Typography gutterBottom variant="h5" component="h1" align="center">
          What i used on this site:
        </Typography>
        <Grid container spacing={3} justify="center" align="center">
          <Grid item xs={6}>
            <img src={heroImg} alt="rickandmorty" />
          </Grid>
          <Grid item xs={6} className="techlogos">
            <Grid item xs={12}>
              <img src={jslogo} alt="reactjs" />
              <h3>Javascript</h3>
            </Grid>
            <Grid item xs={12}>
              <img src={reactlogo} alt="reactjs" />
              <h3>ReactJs</h3>
            </Grid>
            <Grid item xs={12}>
              <img src={grapqhllogo} alt="reactjs" />
              <h3>GraphQl</h3>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
