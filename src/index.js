const scanf = require('scanf')
const Guess = require('./guess')
const CompareNumber = require('./compare-number')
const AnswerGenerator = require('./answer-generator')
const compareNumber = new CompareNumber()
const answerGenerator = new AnswerGenerator()

const COUNT = 6;
const answer = answerGenerator.getAnswer()
const guess = new Guess(answer, compareNumber)

const duplicateElement = (input) => {
	const inputs = input.split('')
	const length = inputs.filter((input, i) => i !== inputs.lastIndexOf(input)).length

	return length > 0
}

const runGame = () => {
	console.log('Welcome!')

	for (let i = COUNT; i > 0; i --) {
		console.log(`\nPlease input your number(${i}):`)
		const input = scanf('%S')
		if(duplicateElement(input)) {
			console.log('Cannot input duplicate numbers!')
			i ++;
		} else {
			const result = guess.combine(input)

			if(result === '4A0B') {
				console.log('Congratulations!')
				return
			}
			if(i === 1) {
				console.log('Game Over')
				return
			}
			console.log(result)
		}
	}
}

runGame()