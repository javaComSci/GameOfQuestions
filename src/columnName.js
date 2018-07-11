import React from 'react';

export default class ColumnName extends React.Component{
	constructor(props) {
		super(props);

		this.columnHandler = this.columnHandler.bind(this);
	}

	columnHandler = (e) => {
		this.props.inputColumn(e.target.value, this.props.id);
	}

	render() {
		return (
			<div>
				<input type="text" placeHolder="CATEGORY" onChange={this.columnHandler}/>
			</div>
		)
	}
}