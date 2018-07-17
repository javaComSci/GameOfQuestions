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
    console.log("rendering this in app "+ this.props.store.getState().renderInputs);
    if (this.props.store.getState().renderInputs === true){
      return (
        <div className="App">
            <Inputs store={this.props.store}/>
        </div>
      );
    }else{
      return (
        <div className="App">
            <Display store={this.props.store}/>
        </div>
      );
    }
  }
}
export default App;
