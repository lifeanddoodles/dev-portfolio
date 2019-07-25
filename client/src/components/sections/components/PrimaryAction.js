import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from './CallToAction';

function PrimaryAction(props) {
  const primaryAction = props.primaryAction;

  return (
    <div className='text-center'>
      <Link
        className='btn btn-accent btn-lg main-action'
        to={primaryAction.url}
        target='_blank'
        aria-label={primaryAction.ariaLabel}
      >
        <CallToAction
          key={primaryAction.name}
          name={primaryAction.name}
          icon={primaryAction.icon}
          iconType={primaryAction.iconType}
        />
      </Link>
    </div>
  );
}
PrimaryAction.defaultProps = {
  primaryAction: {}
};

export default PrimaryAction;
