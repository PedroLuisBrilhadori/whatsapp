// index for srcs

import { SessionWhats } from './whatsapp/index.mjs';
export class App {
   #app = new SessionWhats({
      session: 'meu-zap',
      headless: false,
   });

   run() {
      this.#app.start();
   }

   constructor() {}
}
