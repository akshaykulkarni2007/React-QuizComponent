import React, { Component } from 'react'

class QuizQuestion extends Component {
	render() {
		return (
			<main>
				<section>
					<p>{this.props.quiz_question.instruction_text}</p>
					<ul>
						<li>{this.props.quiz_question.answer_options[0]}</li>
					</ul>
				</section>
				<section className="buttons">
					<ul>//quiz question button logic goes here</ul>
				</section>
			</main>
		)
	}
}

export default QuizQuestion
