import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import ExpertiseAreas from '../components/sections/ExpertiseAreas';
import CallToAction from '../components/sections/CallToAction';

class Home extends Component {
  state = {
    projects: [],
    expertise: {},
    cta: {}
  };

  componentWillMount() {
    axios
      .all([
        axios.get('/projects-data'),
        axios.get('/skills-data'),
        axios.get('/calltoactions-data')
      ])
      .then(
        axios.spread((projectsRes, expertiseRes, calltoactionsRes) => {
          this.setState({ projects: projectsRes.data });
          this.setState({ expertise: expertiseRes.data });
          this.setState({ calltoactions: calltoactionsRes.data });
          // console.log(this.state.expertise);
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <Hero calltoactions={this.state.calltoactions} />
        <Portfolio projects={this.state.projects} />
        <ExpertiseAreas expertise={this.state.expertise} />
        <CallToAction />
      </Fragment>
    );
  }
}

export default Home;
