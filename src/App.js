import React, { Component } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Homepage />
        <Footer />
      </>
    );
  }
}

export default App;
