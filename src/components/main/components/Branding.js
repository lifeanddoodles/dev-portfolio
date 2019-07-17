import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Branding extends Component {
  render() {
    return (
      <Link to='/' className='navbar-brand'>
        Sandra Vargas | Front-end Developer
      </Link>
    );
  }
}

export default Branding;
