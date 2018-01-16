const CompareNumber = require('./compare-number')

class Guess {
	constructor(answerGenerator, compareNumber) {
		this.answerGenerator = answerGenerator
		this.compareNumber = compareNumber
	}
	combine (input) {
		const answer = this.answerGenerator.getAnswer()
		return this.compareNumber.output(answer, input)
	}
}

module.exports = Guess