import React from 'react';


class Display extends React.Component {
	constructor(props){
		super(props);

		this.store = this.props.store;
	}

	getCols() {
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
					</tbody>
				</table>
			</div>
		);
	}
}

export default Display