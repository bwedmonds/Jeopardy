export default class Question {
  constructor(data) {
    this.answer = data.answer;
    this.question = data.question;
    this.value = data.value;
  }

  get Template() {
    return `
<div id="accordion" role="tablist" aria-multiselectable="true">
      <div class="card">
        <h5 class="card-header" role="tab" id="headingOne">Question</h5>
        <div class="card" role="tabpanel" aria-labelledby="headingOne">
          <div class="card-body" id="question-card">
            <h1>Your brain-stumper:</h1>
            <p>${this.question}</p>
            <h5>You're wagering ${this.value}!</h5>
          </div>
        </div>
      </div>
      <div class="card">
        <h5 class="card-header" role="tab" id="headingTwo">
          <a class="collapsed d-block" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            <i class="fa fa-chevron-down pull-right"></i> Answer
          </a>
        </h5>
        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="card-body" id="answer-card">
            <h1>How'd you do?</h1>
            <p>${this.answer}</p>
          </div>
        </div>
      </div>
    </div>
    `
  }
}