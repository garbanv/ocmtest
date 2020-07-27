import React from 'react';
import './pages/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AllCharacters from './pages/AllCharacters';

import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/allcharacters">
            <AllCharacters />
          </Route>
          <Route exact path="/allcharacter/:id">
            <AllCharacters />
          </Route>
          {/* <Route  path="/about"><About/></Route> */}
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
