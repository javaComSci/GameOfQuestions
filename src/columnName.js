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
			<div  style = {{border: "5px solid blue"}}>
				<input type="text" placeHolder="CATEGORY" onChange={this.columnHandler} id={this.props.id} className={this.props.id}/>
			</div>
		)
	}
}