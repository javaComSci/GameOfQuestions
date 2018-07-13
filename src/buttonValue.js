import React from 'react';
import { chooseValue } from './actions';

class ButtonValue extends React.Component{
	buttonStyle = {
		backgroundColor: "blue",
		color: "white"
	}

	clickedButtonStyle = {
		backgroundColor: "gray",
		color: "black",
	}

	constructor(props){
		super(props);
		this.getQuestion = this.getQuestion.bind(this);
	}

	getQuestion(e) {
		console.log("INSIDE GET QUESTION");
		console.log("value");
		e.target.style = this.clickedButtonStyle;
		this.props.store.dispatch(chooseValue(e.target.id, this.props.value));
		
	}
	render(){
		return (
			<div>
				<button onClick={this.getQuestion} style={this.buttonStyle} id={this.props.id}> {this.props.value} </button>
			</div>
		)
	}

}

export default ButtonValue;