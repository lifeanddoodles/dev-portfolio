import React from 'react';
import Skills from './Skills';

function Expertise(props) {
  return (
    <section className='expertise-area fullwidth'>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
          <div className='col-md'>
            <Skills skills={props.skills} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
