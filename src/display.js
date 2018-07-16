import React from 'react';
import ButtonValue from './buttonValue';
import AskQuestion from './askQuestion.js'
import { chooseValue } from './actions';

class Display extends React.Component {
	constructor(props){
		super(props);

		this.store = this.props.store;
		this.question = "";
		this.answer = "";
		this.getQuestion = this.getQuestion.bind(this);
	}

	getQuestion(e) {
		console.log("INSIDE GET QUESTION");
		console.log("value");
		e.target.style = this.clickedButtonStyle;
		this.props.store.dispatch(chooseValue(e.target.id, this.props.value));
		this.question = this.props.store.getState().questions[e.target.id];
		this.answer = this.props.store.getState().answers[e.target.id];
	}

	getCols() {
		console.log("INSIDE GET COLUMNS");
		var cols = [];
		for (let key in this.store.getState().columns) {
			cols.push(<th> {this.store.getState().columns[key]} </th>)
		}
		return cols;
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						<tr>
							{this.getCols()}
						</tr>
						<tr>
							<ButtonValue id = "00" value = {500} store={this.store} getQuestion = {this.getQuestion}/>
						</tr>
					</tbody>
				</table>
				<AskQuestion store={this.store} question={this.question} answer={this.answer} />
			</div>
		);
	}
}

export default Display