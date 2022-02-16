import express from 'express';
import { app } from '../app';
import { MessageApp } from '../whatsapp/index.js';

const expresApp = express();

export class ExpressApp {
   // config sever port
   private _port = 3000;

   // play sever
   run() {
      expresApp.post('/', (req, res) => {
         const message: MessageApp = { contact: req.query.contact, text: req.query.text };

         app.whatsapp.sendMessage(message).then((msg) => {
            if (msg === undefined) {
               res.status(500).send(`Erro, menssagem não enviada! Verifique seu console`);
               return;
            }
            res.status(200).send(`Menssagem Enviada!`);
         });
      });

      expresApp.listen(this._port, () => {
         console.log(`app start in port ${this._port}`);
      });
   }

   constructor(port: number) {
      this._port = port || 3000;
   }
}
