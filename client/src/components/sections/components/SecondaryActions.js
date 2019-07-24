import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from './CallToAction';

function SecondaryActions(props) {
  const secondaryActionsData = props.secondaryActions;
  const secActions = secondaryActionsData.map((item, index) => (
    <Link
      className='btn btn-primary'
      to={item.url}
      target='_blank'
      aria-label={item.ariaLabel}
    >
      <CallToAction
        key={index}
        name={item.name}
        icon={item.icon}
        iconType={item.iconType}
      />
    </Link>
  ));
  return (
    <div className='text-center'>
      <div
        className='btn-group btn-group-lg'
        role='group'
        aria-label='Large button group'
      >
        {secActions}
      </div>
    </div>
  );
}
SecondaryActions.defaultProps = {
  secondaryActions: []
};

export default SecondaryActions;
