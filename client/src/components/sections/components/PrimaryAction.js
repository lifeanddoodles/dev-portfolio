import React from 'react';
import { HashLink } from 'react-router-hash-link';
import CallToAction from './CallToAction';

function PrimaryAction(props) {
  const primaryAction = props.primaryAction;

  return (
    <HashLink
      className='btn btn-accent btn-lg main-action'
      to={`${primaryAction.url}`}
      target='_self'
      aria-label={primaryAction.ariaLabel}
    >
      <CallToAction
        name={primaryAction.name}
        icon={primaryAction.icon}
        iconType={primaryAction.iconType}
      />
    </HashLink>
  );
}
PrimaryAction.defaultProps = {
  primaryAction: {}
};

export default PrimaryAction;
