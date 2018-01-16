const sinon = require('sinon')
const Guess = require('../src/guess')
const AnswerGenerator = require('../src/answer-generator')
const CompareNumber = require('../src/compare-number')

describe('', () => {
	it('', () => {
		const answerGenerator = new AnswerGenerator()
		sinon.stub(answerGenerator, "getAnswer").returns('1234')
		const guess = new Guess(answerGenerator, new CompareNumber())
		const input = '1234';
		expect(guess.combine(input)).toEqual('4A0B');
	})
})