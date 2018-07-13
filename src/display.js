import React from 'react';
import ButtonValue from './buttonValue';

class Display extends React.Component {
	constructor(props){
		super(props);

		this.store = this.props.store;
	}

	getCols() {
		console.log("INSIDE GET COLUMNS");
		var cols = [];
		for (let key in this.store.getState().columns) {
			cols.push(<th> {this.store.getState().columns[key]} </th>)
		}
		console.log("COLS");
		console.log(cols);
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
							<ButtonValue id = "00" value = {500} store={this.store}/>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Display