import React, { useContext, useEffect } from 'react';
import './styles.css';
import Container from '@material-ui/core/Container';
import Hero from '../components/Hero';
import Technology from '../components/Technolgy'

function Home() {
  return (
    <Container maxWidth="lg">
      <Hero />
      <Technology/>
    </Container>
  );
}
export default Home;
