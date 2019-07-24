import React from 'react';
import Project from './components/Project';

function Portfolio(props) {
  const portfolio = <Project />;
  return (
    <section id='portfolio' className='text-center'>
      {portfolio}
    </section>
  );
}

export default Portfolio;
