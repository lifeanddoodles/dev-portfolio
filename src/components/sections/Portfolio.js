import React from 'react';
import Project from './components/Project';

function Portfolio(props) {
  const portfolio = <h2>Projects</h2>;
  return (
    <div id='portfolio' className='text-center mt-12'>
      {portfolio}
      <Project />
    </div>
  );
}

export default Portfolio;
