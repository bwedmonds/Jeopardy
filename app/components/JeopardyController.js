import JeopardyService from "./JeopardyService.js";


//private
let _jeopardyService = new JeopardyService();

function _drawQuestions() {
  let questions = _jeopardyService.Questions
  let template = ''
  for () {

  }
  document.getElementById('question-card').innerHTML = template
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
