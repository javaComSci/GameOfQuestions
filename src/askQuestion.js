import React from 'react';
import { addScore, setCurrQuestion } from './actions';

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

	wrongStyle = {
		fontSize: "15px",
		color: "red",
	}

	rightStyle = {
		fontSize: "15px",
		color: "green"
	}

	constructor(props){
		super(props);
		this.getUserAnswer = this.getUserAnswer.bind(this);
		this.getAnswerOnSubmit = this.getAnswerOnSubmit.bind(this);
		this.clearCorrect = this.clearCorrect.bind(this);
		this.state = {
			answer: "",
			correct: "",
			question: "",
		};
		this.renderCorrect = "";
	}

	getUserAnswer(e){
		console.log(e.target.value);
		this.setState({
			answer: e.target.value,
		});

	}

	clearCorrect(e){
		this.setState({
			correct: "",
		})
	}

	getAnswerOnSubmit() {
		if (this.state.answer == this.props.answer){
			this.props.store.dispatch(addScore(this.props.id));
			this.setState({
				correct:true,
				question: this.props.question
			});
		}else {
			this.setState({
				correct:false,
				question:this.props.question
			});
		}
		document.getElementById("in").value = "";
	}

	render(){
		if(this.state.correct === true){
			this.renderCorrect = <div style={this.rightStyle}> YOU GOT IT RIGHT! </div>
		} else if (this.state.correct === false){
			this.renderCorrect = <div style={this.wrongStyle}> SORRY, WRONG ANSWER! </div>
		} else {
			this.renderCorrect = <div></div>
		}

		if(this.state.question !== this.props.question){
			this.renderCorrect = <div></div>
		}
		console.log("RERENDING IN QUETSION AFTER CHANGE with " + this.state.question + " " + this.props.question);
		return (
			<div>
				{this.props.val}
				{this.props.question}
				<br/>
				<input onChange={this.getUserAnswer}  id="in"/>
				<input type="submit" onClick={this.getAnswerOnSubmit} style={this.buttonStyle}/> 
				{this.renderCorrect}
			</div>
		)
	}
}

export default AskQuestion