import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { questionService } from "../Services/QuestionService.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuestion() {
    let randNum = Math.floor(Math.random() * appState.questions.length)
    let text = appState.questions[randNum].ComputeCleanString
    // console.log(text)
    setText('question', text)
    appState.activeQuestion = appState.questions[randNum]
}

function _drawAnswers() {
    console.log(appState.activeQuestion)
    setHTML('answers', appState.activeQuestion.AnswerTemplate)

}

export class QuestionsController {
    constructor() {
        // console.log('controller linked up')
        this.getTrivia()
        appState.on('questions', _drawQuestion)
        appState.on('activeQuestion', _drawAnswers)

    }

    async getTrivia() {
        // console.log('getting trivia questions')
        await questionService.getTrivia()
        // console.log('got the trivia!')
    }

    handleAnswer() {
        window.event.preventDefault()
        let form = window.event.target
        console.log(form.answer.value)
        let userAnswer = form.answer.value
        form.reset()
        questionService.handleAnswer(userAnswer)
    }

    nextQuestion() {
        _drawQuestion()
    }
}