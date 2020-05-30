import React, { Component } from 'react';
import bulbOn from './images/bulb-on.jpg';
import bulbOff from './images/bulb-off.jpg';

class Bulb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBulbOn: false,
      bulbMessage: 'Bulb is Off',
      buttonColor: 'yellow',
    };

    setInterval(() => {
      this.setState({
        isBulbOn: !this.state.isBulbOn,
        bulbMessage: `Bulb is ${this.state.isBulbOn ? 'Off' : 'On'}`,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.isBulbOn ? (
          <img src={bulbOn} alt='' />
        ) : (
          <img src={bulbOff} alt='' />
        )}
        <h2>{this.state.bulbMessage}</h2>
      </div>
    );
  }
}

export default Bulb;
