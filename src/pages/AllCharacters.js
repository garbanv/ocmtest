import React, {useState } from 'react';
import './styles.css';
import { useQuery, gql } from '@apollo/client';
import Loader from '../components/Loader';
import CharacterCard from '../components/CharacterCard';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Box, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const getCharacters = gql`
  query getCharacters($pageNumber: Int!) {
    characters(page: $pageNumber) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        gender
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function AllCharacters() {
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, data, error } = useQuery(getCharacters, {
    variables: { pageNumber },
  });
  console.log(data);

  const classes = useStyles();
  if (error) return `${error}`;

  return loading ? (
    <Loader />
  ) : (
    <Box mt={5}>
      <Container maxWidth="lg" mt={3}>
        <div className={classes.root}>
          <ArrowBackIosIcon
            className="arrow"
            onClick={() =>
              data.characters.info.prev ? setPageNumber(pageNumber - 1) : ''
            }
          ></ArrowBackIosIcon>

          <ArrowForwardIosIcon
            className="arrow"
            onClick={() =>
              data.characters.info.next ? setPageNumber(pageNumber + 1) : ''
            }
          ></ArrowForwardIosIcon>
          <div className="pageCount">
            {pageNumber} of {data.characters.info.pages}
          </div>
          <Box my={3}>
            <Typography gutterBottom variant="h5" component="h2">
              List of characters
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {data.characters.results.map((post) => (
              
              <CharacterCard
                key={post.id}
                id={post.id}
                image={post.image}
                name={post.name}
                status={post.status}
                species={post.species}
              />
            
            ))}
          </Grid>
          <Box my={3}>
            <ArrowBackIosIcon
              className="arrow"
              onClick={() =>
                data.characters.info.prev ? setPageNumber(pageNumber - 1) : ''
              }
            ></ArrowBackIosIcon>

            <ArrowForwardIosIcon
              className="arrow"
              onClick={() =>
                data.characters.info.next ? setPageNumber(pageNumber + 1) : ''
              }
            ></ArrowForwardIosIcon>
            <div className="pageCount">
              {pageNumber} of {data.characters.info.pages}
            </div>
          </Box>
        </div>
      </Container>
    </Box>
  );
}

export default AllCharacters;
