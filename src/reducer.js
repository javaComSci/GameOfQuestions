const defaultState = {
	columns: {'0': 'CATEGORY', '1': 'CATEGORY', '2': 'CATEGORY', '3': 'CATEGORY'},
	questions: {'00': 'Q', '01': 'Q', '02': 'Q', '03': 'Q', '10': 'Q', '11': 'Q', '12': 'Q', '13': 'Q', '20': 'Q', '21': 'Q', '22': 'Q', '23': 'Q', '30': 'Q', '31': 'Q', '32': 'Q', '33': 'Q'},
	answers:  {'00': 'A', '01': 'A', '02': 'A', '03': 'A', '10': 'A', '11': 'A', '12': 'A', '13': 'A', '20': 'A', '21': 'A', '22': 'A', '23': 'A', '30': 'A', '31': 'A', '32': 'A', '33': 'A'},
};

const reassign = (prev, next) => {
	let mod = {};
	for(var key in prev){
		mod[key] = next[key] ? next[key] : prev[key];
	}
	return mod;
}

export default (state = defaultState, action) => {
	console.log("IN REDUCER");
	console.log(state);
	console.log(action.columns);
	const type = action.type;
	switch(type) {
		case 'inputs':
		let newObj = {
						columns: reassign(state.columns,action.columns),
						questions: reassign(state.questions,action.questions),
						answers: reassign(state.answers,action.answers)
					}
					   console.log("THIS IS A NEW OBJ");
					   console.log(newObj);
					   return newObj;
		default: return state;
	}
}

