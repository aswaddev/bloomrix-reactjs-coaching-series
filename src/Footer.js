import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return <footer>&copy; Copyright 2020, {this.props.applicationName}</footer>;
  }
}

export default Footer;
