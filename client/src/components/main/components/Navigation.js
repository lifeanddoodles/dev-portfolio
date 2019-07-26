import React, { Component } from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Branding from './Branding';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  closeNavbar() {
    if (this.state.isOpen === true) {
      this.toggleNavbar();
    }
  }
  render() {
    return (
      <Navbar expand='lg' aria-label='Main navigation'>
        <Branding />
        <NavbarToggler
          onClick={this.toggleNavbar}
          aria-label='Toggle navigation'
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                tag={HashLink}
                smooth='true'
                to='#top'
                onClick={this.closeNavbar}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={HashLink}
                smooth='true'
                to='#portfolio'
                onClick={this.closeNavbar}
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={HashLink}
                smooth='true'
                to='#skills'
                onClick={this.closeNavbar}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={HashLink}
                smooth='true'
                to='#contact'
                onClick={this.closeNavbar}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
