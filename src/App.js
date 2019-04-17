import React, { Component } from 'react';
import './App.css';
import SongContainer from './Container/SongContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>UK top 20 songs</h1>
        <SongContainer/>
      </div>
    );
  }
}

export default App;
