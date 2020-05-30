import React, { Component } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

class App extends Component {
  applicationName = 'React JS Series - Session 1';

  render() {
    return (
      <>
        <Header applicationName={this.applicationName} />
        <Homepage />
        <Footer applicationName={this.applicationName} />
      </>
    );
  }
}

export default App;
