import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='#top'>Home</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
