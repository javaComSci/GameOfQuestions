import React from 'react';
import { addScore } from './actions';

class AskQuestion extends React.Component {

	buttonStyle = {
		display:"inline-block",
		fontSize:"15px",
		color:"white",
		backgroundColor:"blue",
		padding:"3px",
		border:"none",
		textAlign: "center",
		borderRadius:"3px",
	}

	constructor(props){
		super(props);
		this.getUserAnswer = this.getUserAnswer.bind(this);
		this.getAnswerOnSubmit = this.getAnswerOnSubmit.bind(this);
		this.state = {
			answer: "",
			correct: ""
		};
	}

	getUserAnswer(e){
		console.log(e.target.value);
		this.setState({
			answer: e.target.value,
			correct: "",
		});
	}

	getAnswerOnSubmit() {
		if (this.state.answer == this.props.answer){
			this.props.store.dispatch(addScore(this.props.id));
			this.setState({
				correct:true,
			});
		}else{
			this.setState({
				correct:false,
			});
		}
		document.getElementById("in").value = "";
	}

	render(){
		let renderCorrect = "";
		if(this.state.correct === true){
			renderCorrect = <div> YOU GOT IT RIGHT! </div>
		} else if (this.state.correct === false){
			renderCorrect = <div> SORRY, WRONG ANSWER! </div>
		} else {
			renderCorrect = <div> </div>
		}
		return (
			<div>
				{this.props.val}
				{this.props.question}
				<br/>
				<input onChange={this.getUserAnswer} id="in"/>
				<input type="submit" onClick={this.getAnswerOnSubmit} style={this.buttonStyle}/>
				{this.props.answer}
				{renderCorrect}
			</div>
		)
	}
}

export default AskQuestion