class CompareNumber {
	static output(answer, input) {
		const inputs = input.split('')
		const answers = answer.split('')

		const count = inputs.filter(input => answers.includes(input)).length

		const countA = inputs.filter((input, i) => i === answers.indexOf(input)).length
		const countB = count - countA

		return `${countA}A${countB}B`
	}

}

module.exports = CompareNumber