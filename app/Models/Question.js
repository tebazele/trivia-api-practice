import { appState } from "../AppState.js"

export class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
        this.answers_array = [...this.incorrect_answers, this.correct_answer]
        this.answers_array.sort(() => Math.random() - 0.5)
        this.answers_array.sort(() => Math.random() - 0.5)
        this.answers_array.sort(() => Math.random() - 0.5)
        this.answers_array.sort(() => Math.random() - 0.5)

    }

    get AnswerTemplate() {
        return `
        <form onsubmit="app.questionsController.handleAnswer()">
          <input type="radio" id="one" name="answer" value="${this.answers_array[0]}">
          <label for="one">${this.answers_array[0]}</label><br>

          <input type="radio" id="two" name="answer" value="${this.answers_array[1]}">
          <label for="two">${this.answers_array[1]}</label><br>

          <input type="radio" id="three" name="answer" value="${this.answers_array[2]}">
          <label for="three">${this.answers_array[2]}</label><br>

          <input type="radio" id="four" name="answer" value="${this.answers_array[3]}">
          <label for="four">${this.answers_array[3]}</label><br>
          <button class="btn btn-warning mt-5 ">Submit Answer</button>
        </form>
        `
    }

    get ComputeCleanString() {
        if (this.question.includes('&#039;')) {
            let cleanString = this.question.replaceAll('&#039;', "'")
            return cleanString
        } else if (this.question.includes('&quot;')) {
            let cleanString = this.question.replaceAll('&quot;', "'")
            return cleanString
        }
        else {
            return this.question
        }

    }
}