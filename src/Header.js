import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1
          className='heading'
          style={{ color: 'yellow', backgroundColor: 'rgb(0,0,0)' }}
        >
          {this.props.applicationName}
        </h1>
      </header>
    );
  }
}
export default Header;
