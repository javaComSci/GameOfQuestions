import React from 'react';
import ButtonValue from './buttonValue';
import AskQuestion from './askQuestion.js'
import { setCurrQuestion } from './actions';
import Score from './score'

class Display extends React.Component {
	displayStyle = {
		color: "blue",
		width: "80%",
		columnWidth: "20%",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#ddd",
		border: "5px solid blue"
	};
	constructor(props){
		super(props);

		this.store = this.props.store;
		this.question = "";
		this.answer = "";
		this.id = "";
		this.getQuestion = this.getQuestion.bind(this);
	}

	getQuestion(e) {
		console.log("INSIDE GET QUESTION");
		e.target.style = this.clickedButtonStyle;
		this.props.store.dispatch(setCurrQuestion(e.target.id));
		this.question = this.props.store.getState().questions[e.target.id];
		this.answer = this.props.store.getState().answers[e.target.id];
		this.id = e.target.id;
	}

	getCols() {
		var cols = [];
		for (let key in this.store.getState().columns) {
			cols.push(<th> {this.store.getState().columns[key]} </th>)
		}
		return cols;
	}

	render() {
		return (
			<div>
				<table style={this.displayStyle}>
					<tbody>
						<tr>
							<th> {this.store.getState().columns[0]} </th>
							<th> {this.store.getState().columns[1]} </th>
							<th> {this.store.getState().columns[2]} </th>
							<th> {this.store.getState().columns[3]} </th>
						</tr>
						<tr>
							<td> <ButtonValue id = "00" value = {500} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "01" value = {500} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "02" value = {500} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "03" value = {500} store={this.store} getQuestion = {this.getQuestion}/> </td>
						</tr>
						<tr>
							<td> <ButtonValue id = "10" value = {400} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "11" value = {400} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "12" value = {400} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "13" value = {400} store={this.store} getQuestion = {this.getQuestion}/> </td>
						</tr>
						<tr>
							<td> <ButtonValue id = "20" value = {300} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "21" value = {300} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "22" value = {300} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "23" value = {300} store={this.store} getQuestion = {this.getQuestion}/> </td>
						</tr>
						<tr>
							<td> <ButtonValue id = "30" value = {200} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "31" value = {200} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "32" value = {200} store={this.store} getQuestion = {this.getQuestion}/> </td>
							<td> <ButtonValue id = "33" value = {200} store={this.store} getQuestion = {this.getQuestion}/> </td>
						</tr>
					</tbody>
				</table>
				<AskQuestion store={this.store} id={this.id} question={this.question} answer={this.answer}/>
				<Score store={this.store}/>
			</div>
		);
	}
}

export default Display