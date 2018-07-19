export const submitInfo = (columns, questions, answers) => {
	return {
		type: 'inputs',
		columns,
		questions,
		answers
	}
}

export const addScore = (scores, correct) => {
	return {
		type: 'scores',
		scores,
		correct
	}
}

export const setCurrQuestion = (currQuestion) => {
	return {
		type: 'currQuestion',
		currQuestion
	}
}