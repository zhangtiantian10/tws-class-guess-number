const Guess = require('../src/guess')
const CompareNumber = require('../src/compare-number')

describe('', () => {
	it('', () => {
		const answer = '1234'
		const guess = new Guess(answer, new CompareNumber())
		const input = '1234';
		expect(guess.combine(input)).toEqual('4A0B');
	})
})