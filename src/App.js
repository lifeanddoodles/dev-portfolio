import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Header from './components/main/Header';
import Footer from './components/main/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main role='main' className='site-main'>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route component={ErrorPage} />
            </Switch>
          )}
        />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
