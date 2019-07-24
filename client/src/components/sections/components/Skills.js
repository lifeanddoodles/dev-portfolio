import React, { Fragment } from 'react';
import Skill from './Skill';

function Skills(props) {
  const skills = (
    <Fragment>
      <Skill />
      <Skill />
      <Skill />
    </Fragment>
  );
  return <ul className='text-center icon-list'>{skills}</ul>;
}

export default Skills;
