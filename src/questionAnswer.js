import React from 'react';

export default class QuestionAnswer extends React.Component{
	constructor(props){
		super(props);
		console.log("INSIDE QUESTION ANSWER ")
	}

	inputQuestionHandler = (e) => {
		this.props.inputQuestion(e.target.value, this.props.id);
	}

	inputAnswerHandler = (e) => {
		this.props.inputAnswer(e.target.value, this.props.id);
	}

	render() {
		return (
			<div>
				<form>
					<label>
					Question: 
						<input type = "text" onChange={this.inputQuestionHandler}/>
					</label>
					<br/>
					<label>
					Answer: 
						<input type = "text" onChange={this.inputAnswerHandler}/>
					</label>
				</form>
			</div>
		);
	}
}