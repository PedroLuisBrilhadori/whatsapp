// index for srcs

import { SessionWhats } from './whatsapp/index.mjs';
export class App {
   #whatsapp = new SessionWhats({
      session: 'meu-zap',
      headless: false,
   });

   run() {
      this.#whatsapp.start().then((msg) => {
         this.#whatsapp.sendMessage({ contact: '120363023770567596@g.us', text: 'whats on!' });
      });
   }

   constructor() {}
}
