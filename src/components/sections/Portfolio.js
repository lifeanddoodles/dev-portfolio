import React from 'react';
import Project from './components/Project';

function Portfolio(props) {
  const portfolio = <Project />;
  return (
    <div id='portfolio' className='text-center mt-12'>
      {portfolio}
    </div>
  );
}

export default Portfolio;
