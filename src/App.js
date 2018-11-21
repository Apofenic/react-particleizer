import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particleOptions from './particleOptions.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles 
          params={{...particleOptions}}
        />
      </div>
    );
  }
}

export default App;
