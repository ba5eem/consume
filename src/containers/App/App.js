import React, { Component } from 'react';
import * as Container from '../';
import * as Components from '../../components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container.Header props={'a'}/>
        <Components.TradeItem props={'a'}/>
      </div>
    );
  }
}

export default App;
