import React, { Component } from 'react';
import About from './components/About';
import Social from './components/Social';

class Hero extends Component {
  render() {
    return (
      <section id='hero'>
        <About />
        <Social />
      </section>
    );
  }
}

export default Hero;
