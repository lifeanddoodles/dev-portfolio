import React, { Suspense } from 'react';

const Skill = React.lazy(() => import('./Skill'));

function Skills(props) {
  const skillsData = props.skills[0];
  const skills = skillsData.map((skill, index) => {
    return <Skill key={index} name={skill.name} icon={skill.icon} />;
  });
  return (
    <ul className='text-center icon-list'>
      <Suspense fallback={<div>Loading...</div>}>{skills}</Suspense>
    </ul>
  );
}

export default Skills;
