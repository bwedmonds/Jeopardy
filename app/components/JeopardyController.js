import JeopardyService from "./JeopardyService.js";


//private
let _jeopardyService = new JeopardyService();

function _drawQuestions() {
  let question = _jeopardyService.Questions
  let template = question.Template
  document.getElementById('question-display').innerHTML = template
}



//public

export default class JeopardyController {
  constructor() {
    //register subscribers
    _jeopardyService.addSubscriber('questions', _drawQuestions)
    //fetch data
    _jeopardyService.getApiQuestions();
  }

  nextQuestion() {
    _jeopardyService.getApiQuestions()
  }
}
