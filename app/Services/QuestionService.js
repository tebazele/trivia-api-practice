import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js";


class QuestionsService {
    async getTrivia() {
        const response = await axios.get('https://opentdb.com/api.php?amount=40&type=multiple');
        console.log('trivia objects', response.data.results)
        appState.questions = response.data.results.map(data => new Question(data))
        // console.log(appState.questions)
    }
    handleAnswer(userAnswer) {
        let correctAns = appState.activeQuestion.correct_answer
        if (userAnswer == correctAns) {
            console.log('you got it!')
            Pop.toast('You got it!', "success")
        } else {
            console.log('nope!');
            Pop.toast("Nope! Try again!", "warning")
        }
    }


}

export const questionService = new QuestionsService()