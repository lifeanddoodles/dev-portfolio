import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'reactstrap';

class Branding extends Component {
  render() {
    return (
      <NavbarBrand tag={Link} to='/' className='text-primary'>
        Sandra Vargas
      </NavbarBrand>
    );
  }
}

export default Branding;
