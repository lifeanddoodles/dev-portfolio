import React, { Fragment } from 'react';

function CallToAction(props) {
  return (
    <Fragment>
      <i className={`${props.iconType} fa-${props.icon}`} role='presentation' />
      {props.name}
    </Fragment>
  );
}

export default CallToAction;
