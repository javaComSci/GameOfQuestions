export const submitInfo = (columns, questions, answers) => {
	return {
		type: 'inputs',
		columns,
		questions,
		answers
	}
}