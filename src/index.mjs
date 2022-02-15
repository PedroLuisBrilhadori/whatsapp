// index for srcs

export class App {
  #port = 3000;

  run() {
    console.log(`app runnning in port ${this.#port}`);
  }

  constructor(appConfig) {
    this.#port = appConfig.port ? appConfig.port : 3000;
  }
}
