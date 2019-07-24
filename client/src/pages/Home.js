import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Hero from '../components/sections/Hero';
import Portfolio from '../components/sections/Portfolio';
import ExpertiseAreas from '../components/sections/ExpertiseAreas';
import Contact from '../components/sections/Contact';

class Home extends Component {
  state = {
    projects: [],
    expertise: {},
    calltoactions: {}
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
          this.setState({
            projects: projectsRes.data,
            expertise: expertiseRes.data,
            calltoactions: calltoactionsRes.data
          });
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Fragment>
        <Hero callToActions={this.state.calltoactions} />
        <Portfolio projects={this.state.projects} />
        <ExpertiseAreas expertise={this.state.expertise} />
        <Contact />
      </Fragment>
    );
  }
}

export default Home;
