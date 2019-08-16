import React from 'react';
import { Link } from 'react-router-dom';
import CallToAction from './CallToAction';

function SecondaryActions(props) {
  const secondaryActionsData = props.secondaryActions;
  const secondaryActions = secondaryActionsData.map((item, index) =>
    RegExp('https').test(item.url) === true ? (
      <a
        key={index}
        className='btn btn-primary'
        href={item.url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={item.ariaLabel}
      >
        <CallToAction
          name={item.name}
          icon={item.icon}
          iconType={item.iconType}
        />
      </a>
    ) : (
      <Link
        key={index}
        className='btn btn-primary'
        to={item.url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={item.ariaLabel}
      >
        <CallToAction
          name={item.name}
          icon={item.icon}
          iconType={item.iconType}
        />
      </Link>
    )
  );
  return (
    <div
      className='btn-group btn-group-lg other-ctas'
      role='group'
      aria-label='Large button group'
    >
      {secondaryActions}
    </div>
  );
}
SecondaryActions.defaultProps = {
  secondaryActions: []
};

export default SecondaryActions;
