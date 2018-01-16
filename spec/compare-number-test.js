const CompareNumber = require('../src/compare-number');

describe('CompareNumber', () => {
	it('answer equal input return 4A0B', () => {
		const result = {
			input: '1234',
			answer: '1234',
			output: '4A0B'
		};
		expect(CompareNumber.output(result.answer, result.input)).toEqual(result.output);
	});

	it('answer not equal input return 0A0B', () => {
		const result = {
			input: '1234',
			answer: '8790',
			output: '0A0B'
		}

		expect(CompareNumber.output(result.answer, result.input)).toEqual(result.output);
	})

	it('answer not equal input but number is correct return 0A4B', () => {
		const result = {
			input: '1234',
			answer: "4321",
			output: '0A4B'
		}

		expect(CompareNumber.output(result.answer, result.input)).toEqual(result.output);
	})
})