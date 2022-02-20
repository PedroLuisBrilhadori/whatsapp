import express, { Application, Response, Request } from 'express';
import mainApp from '../app';
import { MessageApp } from '../whatsapp/index.js';

export class ExpressApp {
   public expressApp: Application;

   private _config() {
      this.expressApp.use(express.static(`${__dirname}/templates`));

      this.expressApp.post('/', (req: Request, res: Response) => {
         const message: MessageApp = { contact: req.query.contact as string, text: req.query.text as string };

         mainApp.whatsapp.sendMessage(message).then((msg) => {
            if (msg === undefined) {
               res.status(500).send(`Erro, menssagem não enviada! Verifique seu console`);
               return;
            }
            res.status(200).send(`Menssagem Enviada!`);
         });
      });

      this.expressApp.get('/menu', (req: Request, res: Response) => {
         res.sendFile(`${__dirname}/templates/menu/index.html`);
      });

      this.expressApp.get('/', (req: Request, res: Response) => {
         res.send(`
         <meta http-equiv="refresh" content="0; url = ./menu" />`);
      });
   }

   constructor() {
      this.expressApp = express();
      this._config();
   }
}

export default new ExpressApp().expressApp;
