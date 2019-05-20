import JeopardyService from "./JeopardyService.js";


//private
let _jeopardyService = new JeopardyService();

function _drawQuestions() {
  debugger
  let questions = _jeopardyService.Questions
  let template = ''
  template = questions.Template
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
}
