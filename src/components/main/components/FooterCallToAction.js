import React, { Fragment } from 'react';

function FooterCallToAction(props) {
  return (
    <Fragment>
      <a
        className='icon-link'
        href='https://github.com/lifeanddoodles'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit GitHub profile'
      >
        <i className={`fab fa-github icon`} title='Github' />
      </a>
      <a
        className='icon-link'
        href='https://www.linkedin.com/in/sandralvargas/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Visit LinkedIn profile'
      >
        <i className={`fab fa-linkedin icon`} title='LinkedIn' />
      </a>
    </Fragment>
  );
}

export default FooterCallToAction;
