import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import TileContainer from './TileContainer'
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Nav />
        < TileContainer porkers={hogs}/>
      </div>
    )
  }
}

export default App;
