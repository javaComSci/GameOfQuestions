import React from 'react';
import QuestionAnswer from './questionAnswer';
import ColumnName from './columnName';
import { submitInfo } from './actions';

const tableStyle = {
	color:"blue",
	border:"5px solid blue",
	width:"100%"
};

const buttonStyle = {
	display:"inline-block",
	fontSize:"15px",
	color:"white",
	backgroundColor:"blue",
	padding:"10px",
	border:"none",
	textAlign: "center",
	borderRadius:"5px",
}


class Inputs extends React.Component {
	constructor(props) {
		super(props);

		this.submitHandler = this.submitHandler.bind(this);
		this.inputQuestion = this.inputQuestion.bind(this);
		this.state = {
			answers: {},
			questions: {},
			columns: {}
		};

	}

	submitHandler = () => {
		this.props.store.dispatch(submitInfo(this.state.columns, this.state.questions, this.state.answers));
	}

	inputColumn = (value, id) => {
		console.log(this.state);
		const newColumns = this.state.columns;
		newColumns[id] = value;
		this.setState({
			columns: newColumns
		});
	}

	inputQuestion = (value, id) => {
		console.log(this.state);
		const newQuestions = this.state.questions;
		newQuestions[id] = value;
		this.setState({
			questions: newQuestions
		});
	}

	inputAnswer = (value, id) => {
		console.log(this.state);
		const newAnswers = this.state.answers;
		newAnswers[id] = value;
		this.setState({
			answers: newAnswers
		});
	}

	render() {
		return (
			<div>
				<table style = {tableStyle}>
					<tbody>
						<tr>
							<th> <ColumnName inputColumn={this.inputColumn} id="0"/> </th>
							<th> <ColumnName inputColumn={this.inputColumn} id="1"/> </th>
							<th> <ColumnName inputColumn={this.inputColumn} id="2"/> </th>
							<th> <ColumnName inputColumn={this.inputColumn} id="3"/> </th>
						</tr>
						<tr>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="00"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="01"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="02"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="03"/> </td>
						</tr>
						<tr>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="10"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="11"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="12"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="13"/> </td>
						</tr>
						<tr>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="20"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="21"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="22"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="23"/> </td>
						</tr>
						<tr>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="30"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="31"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="32"/> </td>
							<td> <QuestionAnswer inputQuestion={this.inputQuestion} inputAnswer={this.inputAnswer} id="33"/> </td>
						</tr>
					</tbody>
				</table>
				<button onClick={this.submitHandler} style = {buttonStyle}>Submit</button>
			</div>
		);
	}
}

export default Inputs;