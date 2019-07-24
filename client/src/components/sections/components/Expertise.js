import React from 'react';
import Skills from './Skills';

function Expertise(props) {
  return (
    <section className='expertise-area fullwidth'>
      <div className='container'>
        <div className='row'>
          <div className='col-md'>
            <h3>name</h3>
            <p>description</p>
          </div>
          <div className='col-md'>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
