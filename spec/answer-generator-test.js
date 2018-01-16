const AnswerGenerator = require('../src/answer-generator')
const answerGenerator = new AnswerGenerator()

describe('AnswerGenerator', () => {

	it('should return a random answer', () => {
		expect(answerGenerator.getAnswer().length).toEqual(4);

		expect(answerGenerator.getAnswer()).not.toEqual(answerGenerator.getAnswer());

		const answers = answerGenerator.getAnswer().split('');
		answers.forEach((answer) => {
			expect(answers.indexOf(answer)).toEqual(answers.lastIndexOf(answer));
		})
	})
})