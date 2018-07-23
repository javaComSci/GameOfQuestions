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
    if (this.props.store.getState().renderInputs === true){
      return (
        <div className="App" id="Inputs">
            <Inputs store={this.props.store}/>
        </div>
      );
    }else{
      return (
        <div className="App" id="Display">
            <Display store={this.props.store}/>
        </div>
      );
    }
  }
}
export default App;
