// index for app

import app from './app';
import { FirebaseApp } from './firebase/firebase';
import { initFirebase } from './firebase/firebase.config';
import * as dotenv from 'dotenv';
import expressApp from './express/express';

dotenv.config();

initFirebase();

expressApp.listen(3000, () => {
   console.log(`express sever running in port: ${3000}`);
});

interface Test {
   nome: string;
}

export const firebase = new FirebaseApp<Test>();
