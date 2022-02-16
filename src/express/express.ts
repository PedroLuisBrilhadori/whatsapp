import express from 'express';
import { Response, Request } from 'express';
import { app } from '../app';
import { MessageApp } from '../whatsapp/index.js';

const expresApp = express();

export class ExpressApp {
   // config sever port
   private _port = 3000;

   // play sever
   run() {
      expresApp.post('/', (req: Request, res: Response) => {
         const message: MessageApp = { contact: req.query.contact, text: req.query.text };

         app.whatsapp.sendMessage(message).then((msg) => {
            if (msg === undefined) {
               res.status(500).send(`Erro, menssagem não enviada! Verifique seu console`);
               return;
            }
            res.status(200).send(`Menssagem Enviada!`);
         });
      });

      expresApp.get('/menu', (req: Request, res: Response) => {
         res.sendFile(`${__dirname}/templates/menu/index.html`);
      });

      expresApp.get('/', (req: Request, res: Response) => {});

      expresApp.listen(this._port, () => {
         console.log(`express sever is running in port: ${this._port}`);
      });
   }

   constructor(port: number) {
      this._port = port || 3000;
   }
}
