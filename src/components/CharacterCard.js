import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
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

export default function CharacterCard({ name, status, image, id, species }) {
  return (
    <Grid item xs={6} md={3} sm={4} key={id} className="characterCard">
      <Card>
        <CardActionArea>
          <img src={image} alt={`Image of ${name}`} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            {species} - {status}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
