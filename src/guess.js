const CompareNumber = require('./compare-number')

class Guess {
	constructor(answer, compareNumber) {
		this.answer = answer
		this.compareNumber = compareNumber
	}
	combine (input) {
		const answer = this.answer
		return this.compareNumber.output(answer, input)
	}
}

module.exports = Guess