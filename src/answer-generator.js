class AnswerGenerator {
	getAnswer() {
		const answers = []

		while(answers.length < 4) {
			const randomNumber = parseInt(Math.random() * 10);
			if(!answers.includes(randomNumber)) {
				answers.push(randomNumber)
			}
		}

		return answers.join('')
	}
}

module.exports = AnswerGenerator