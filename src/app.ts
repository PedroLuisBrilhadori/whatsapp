// index for srcs

import expressApp from './express/express';
import { ConfigApp } from './models';
import { SessionWhats } from './whatsapp';
import * as dotenv from 'dotenv';
import { initFirebase } from './firebase/firebase.config';
import { FirebaseApp } from './firebase/firebase';

dotenv.config();

initFirebase();
export interface Test {
    nome: string;
}

export const firebaseTeste = new FirebaseApp<Test>();
class App {
    // properties for express sever
    private _port: number;

    // whatsapp configuration
    private _whatsapp = new SessionWhats({
        session: 'meu-zap',
        multidevice: true,
    });

    get whatsapp() {
        return this._whatsapp;
    }

    constructor(configApp: ConfigApp) {
        this._port = configApp.port || 3000;
    }
}

export default new App({});
