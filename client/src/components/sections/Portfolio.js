import React from 'react';
import Project from './components/Project';

function Portfolio(props) {
  const portfolio = props.projects.map(project => (
    <Project
      key={project.id}
      name={project.name}
      description={project.description}
      client={project.client}
      image={project.image}
      url={project.url}
    />
  ));
  return (
    <section id='portfolio' className='text-center'>
      {portfolio}
    </section>
  );
}

export default Portfolio;
