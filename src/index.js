import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

let store = createStore(reducer);

function render(){
	ReactDOM.render(
		<div className = "container">
			<App store = {store}/>
		</div>,
		document.getElementById("root"));
}

store.subscribe(() => {
	console.log("STATE CHANGE");
	console.log(store.getState());
});

store.subscribe(render); //must always call back
render();
console.log("INITAL STATE " + store);
