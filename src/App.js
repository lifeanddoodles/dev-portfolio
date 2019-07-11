import React, { Fragment } from 'react';
import Home from './pages/Home';
import Header from './components/main/Header';
import Footer from './components/main/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
