import React from 'react';

export default class QuestionAnswer extends React.Component{
	constructor(props){
		super(props);
	}

	inputQuestionHandler = (e) => {
		this.props.inputQuestion(e.target.value, this.props.id);
	}

	inputAnswerHandler = (e) => {
		this.props.inputAnswer(e.target.value, this.props.id);
	}

	getValue(){
		if(this.props.id.charAt(0) === '0'){
			return 500;
		} else if(this.props.id.charAt(0) === '1'){
			return 400;
		} else if(this.props.id.charAt(0) === '2'){
			return 300;
		} else if(this.props.id.charAt(0) === '3'){
			return 200;
		}
	}

	render() {
		return (
			<div style={{border: "3px solid blue", padding: "5px", backgroundColor: "#e6e6f2"}}>
				<form>
					<div style ={{fontWeight:"bold"}}> Value: {this.getValue()} </div>
					<label id={this.props.id}>
					Question:
						<br/>
						<input type = "text" onChange={this.inputQuestionHandler}/>
					</label>
					<br/>
					<label id={this.props.id}>
					Answer:
						<br/>    
						<input type = "text" onChange={this.inputAnswerHandler}/>
					</label>
				</form>
			</div>
		);
	}
}