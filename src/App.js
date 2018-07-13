import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import Inputs from './inputs';
import Display from './display';
import reducer from './reducer';



class App extends Component {
  constructor(props){
    super(props);
  }

   render() {
      return (
        <div className="App">
            <Inputs store={this.props.store}/>
            <Display store={this.props.store}/>s
        </div>
      );
  }
}
export default App;
