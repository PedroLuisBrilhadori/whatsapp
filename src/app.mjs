// index for srcs

import { ExpressApp } from './express/express.mjs';
import { SessionWhats } from './whatsapp/whatsapp.mjs';
class App {
   // properties for express sever
   #port = 3000;
   #devMode = true;
   #express = new ExpressApp({
      port: this.#port,
   });

   // whatsapp configuration
   #whatsapp = new SessionWhats({
      session: 'meu-zap',
      headless: false,
   });

   get whatsapp() {
      return this.#whatsapp;
   }

   // play app
   run() {
      this.#whatsapp.start().then((msg) => {
         if (this.#devMode && this.whatsapp.up) {
            this.#express.run();
         }
      });
   }

   constructor(configApp) {
      this.#devMode = this.configApp !== undefined ? this.configApp : true;
      this.#port = this.configApp !== undefined ? this.configApp : 3000;
   }
}

export const app = new App();
