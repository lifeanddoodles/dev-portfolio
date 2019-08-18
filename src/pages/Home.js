import React, { Component, Fragment, Suspense } from 'react';
import axios from 'axios';

const Hero = React.lazy(() => import('../components/sections/Hero'));
const Portfolio = React.lazy(() => import('../components/sections/Portfolio'));
const ExpertiseAreas = React.lazy(() =>
  import('../components/sections/ExpertiseAreas')
);
const Contact = React.lazy(() => import('../components/sections/Contact'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Hero callToActions={this.state.calltoactions} />
          <Portfolio projects={this.state.projects} />
          <ExpertiseAreas expertise={this.state.expertise} />
          <Contact />
        </Suspense>
      </Fragment>
    );
  }
}

export default Home;
