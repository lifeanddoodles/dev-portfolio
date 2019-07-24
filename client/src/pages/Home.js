import React, { Component, Fragment } from 'react';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import ExpertiseAreas from '../components/sections/ExpertiseAreas';
import CallToAction from '../components/sections/CallToAction';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Portfolio />
        <ExpertiseAreas />
        <CallToAction />
      </Fragment>
    );
  }
}

export default Home;
