import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import Inputs from './inputs';
import Display from './display';
import reducer from './reducer';



class App extends Component {
  store = createStore(reducer);
  render() {
    return (
      <div className="App">
        <Inputs store={this.store}/>
        <Display store={this.store}/>
      </div>
    );
  }
}

export default App;
