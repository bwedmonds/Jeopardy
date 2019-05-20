import JeopardyController from "./components/JeopardyController.js";

class App {
  constructor() {
    this.controllers = {
      jeopardyController: new JeopardyController()
    }
  }
}

window['app'] = new App();