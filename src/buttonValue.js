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
		this.questionHandler = this.questionHandler.bind(this);
	}

	questionHandler(e){
		this.props.getQuestion(e);
		document.getElementById(this.props.id).disabled = true;
	}

	render(){
		return (
			<div>
				<button onClick={this.questionHandler} style={this.buttonStyle} id={this.props.id}> {this.props.value} </button>
			</div>
		)
	}

}

export default ButtonValue;