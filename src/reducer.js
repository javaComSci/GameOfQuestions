const defaultState = {
	columns: {'0': 'CATEGORY', '1': 'CATEGORY', '2': 'CATEGORY', '3': 'CATEGORY'},
	questions: {'00': 'Q', '01': 'Q', '02': 'Q', '03': 'Q', '10': 'Q', '11': 'Q', '12': 'Q', '13': 'Q', '20': 'Q', '21': 'Q', '22': 'Q', '23': 'Q', '30': 'Q', '31': 'Q', '32': 'Q', '33': 'Q'},
	answers:  {'00': 'A', '01': 'A', '02': 'A', '03': 'A', '10': 'A', '11': 'A', '12': 'A', '13': 'A', '20': 'A', '21': 'A', '22': 'A', '23': 'A', '30': 'A', '31': 'A', '32': 'A', '33': 'A'},
	scores: 0,
	renderInputs: true,
	clicked: [],
}

const reassign = (prev, next) => {
	let mod = {};
	for(var key in prev){
		mod[key] = next[key] ? next[key] : prev[key];
	}
	return mod;
}

export default (state = defaultState, action) => {
	console.log("IN REDUCER");
	console.log(action);
	let score = 0;
	if(action.type == 'scores'){
		console.log(state.clicked);
		console.log("FIND THIS " + state.clicked.find(() => action.scores))
		if(action.scores && !state.clicked.find(() => action.scores)){
			if(action.scores.charAt(0) === '0'){
				score = 500;
			} else if(action.scores.charAt(0) === '1'){
				score = 400;
			} else if(action.scores.charAt(0) === '2'){
				score = 300;
			}  else if(action.scores.charAt(0) === '3'){
				score = 200;
			}else {
				score = 0;
			}
			return Object.assign({}, state, {scores: state.scores + score}, {clicked: state.clicked.concat([action.scores])});
		}
		return state;
	}
	const type = action.type;
	switch(type) {
		case 'inputs':
						let newObj = {
							columns: reassign(state.columns,action.columns),
							questions: reassign(state.questions,action.questions),
							answers: reassign(state.answers,action.answers),
							scores: 0,
							renderinputs: !state.renderInputs,
							clicked: []
						}
					   return newObj;
		default: return state;
	}
}

