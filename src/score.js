import React from 'react';

class Score extends React.Component{
	scoreStyle = {
		color: "blue",
		fontWeight: "bold",
	};

	render(){
		return (
			<div style={this.scoreStyle}>
				SCORE: {this.props.store.getState().scores}
			</div>
		)
	}
}
export default Score