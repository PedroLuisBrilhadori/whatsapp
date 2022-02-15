// index for srcs

import { ExpressApp } from './express';
import { ConfigApp } from './models';
import { SessionWhats } from './whatsapp';

class App {
   // properties for express sever
   private _port = 3000;
   private _devMode = true;
   private _express = new ExpressApp(this._port);

   // whatsapp configuration
   private _whatsapp = new SessionWhats({
      session: 'meu-zap',
      headless: false,
   });

   get whatsapp() {
      return this._whatsapp;
   }

   // play app
   run() {
      this._whatsapp.start().then((msg) => {
         if (this._devMode && this.whatsapp.up) {
            this._express.run();
         }
      });
   }

   constructor(configApp: ConfigApp) {
      this._devMode = configApp.devMode || true;
      this._port = configApp.port || 3000;
   }
}

export const app = new App({});
