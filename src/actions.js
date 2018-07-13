export const submitInfo = (columns, questions, answers) => {
	return {
		type: 'inputs',
		columns,
		questions,
		answers
	}
}

export const chooseValue = (id, value) => {
	return {
		type: 'values',
		id,
		value
	}
}