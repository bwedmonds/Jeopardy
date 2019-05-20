import Question from '../models/Question.js'

//private
let _api = new axios.create({
  baseURL: 'http://jservice.io/api/random'
})

let _state = {
  questions: []
}
let _subscribers = {
  questions: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}


//public
export default class JeopardyService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Questions() {
    return _state.questions.map(c => new Question(q))
  }
  getApiQuestions() {
    _api.get('questions')
      .then(response => {
        let data = response.data.map(rawData => new Question(rawData))
        setState('questions', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
