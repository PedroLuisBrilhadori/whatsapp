import express from 'express';
import { app } from '../app.mjs';

const expresApp = express();

export class ExpressApp {
   // config sever port
   #port = 3000;

   // play sever
   run() {
      expresApp.post('/', (req, res) => {
         app.whatsapp.sendMessage({ contact: req.query.contact, text: req.query.text }).then((msg) => {
            if (msg === undefined) {
               res.status(500).send(`Erro, menssagem não enviada! Verifique seu console`);
               return;
            }
            res.status(200).send(`Menssagem Enviada!`);
         });
      });

      expresApp.listen(this.#port, () => {
         console.log(`app start in port ${this.#port}`);
      });
   }

   constructor(expressConfig) {
      this.#port = expressConfig.port !== undefined ? expressConfig.port : 3000;
   }
}
