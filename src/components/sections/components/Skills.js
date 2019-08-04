import React from 'react';
import Skill from './Skill';

function Skills(props) {
  const skillsData = props.skills[0];
  const skills = skillsData.map((skill, index) => {
    return <Skill key={index} name={skill.name} icon={skill.icon} />;
  });
  return <ul className='text-center icon-list'>{skills}</ul>;
}

export default Skills;
