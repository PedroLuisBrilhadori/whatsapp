import express, { Application, Response, Request } from 'express';
import mainApp, { firebaseTeste, Test } from '../app';
import { CreateChild } from '../firebase/models';
import { MessageApp } from '../whatsapp/index.js';

export class ExpressApp {
    public expressApp: Application;

    private _config() {
        this.expressApp.use(express.static(`${__dirname}/templates`));

        this.expressApp.post('/', (req: Request, res: Response) => {
            const message: MessageApp = { contact: req.query.contact as string, text: req.query.text as string };

            if (mainApp.whatsapp.sendMessage(message)) {
                res.status(500).send(`Erro, menssagem não enviada! Verifique seu console`);
                return;
            }
            res.status(200).send(`Menssagem Enviada!`);
        });

        this.expressApp.post('/create', (req: Request, res: Response) => {
            const createChild: CreateChild<Test> = {
                name: req.query.name as string,
                id: req.query.id as string,
                data: { nome: req.query.nome as string },
            };

            firebaseTeste
                .createChild(createChild)
                .then((child) => {
                    res.json(child);
                    console.log(child);
                })
                .catch((error) => {
                    res.send(error);
                });
        });

        this.expressApp.get('/create', (req: Request, res: Response) => {
            firebaseTeste.getChilds('pedro').then((childs) => res.send(childs));
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
