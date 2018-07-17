export const submitInfo = (columns, questions, answers) => {
	return {
		type: 'inputs',
		columns,
		questions,
		answers
	}
}

export const addScore = (scores) => {
	return {
		type: 'scores',
		scores
	}
}

export const setCurrQuestion = (currQuestion) => {
	return {
		type: 'currQuestion',
		currQuestion
	}
}