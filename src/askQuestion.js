import React from 'react';

class AskQuestion extends React.Component {
	constructor(props){
		super(props);
		this.getUserAnswer = this.getUserAnswer.bind(this);
		this.getAnswerOnSubmit = this.getAnswerOnSubmit.bind(this);
		this.state = {
			answer: ""
		};
	}

	getUserAnswer(e){
		console.log(e.target.value);
		this.setState({
			answer: e.target.value
		});
	}

	getAnswerOnSubmit() {
		console.log("USER ANSWER");
		console.log(this.state.answer);
		if (this.state.answer == this.props.answer){
			console.log("YOU GOT IT RIGHT!");
		}else{
			console.log("SORRY, WRONG ANSWER!");
		}
	}

	render(){
		return (
			<div>
				{this.props.question}
				<br/>
				<input onChange={this.getUserAnswer}/>
				<input type="submit" onClick={this.getAnswerOnSubmit}/>
				{this.props.answer}
			</div>
		)
	}
}

export default AskQuestion