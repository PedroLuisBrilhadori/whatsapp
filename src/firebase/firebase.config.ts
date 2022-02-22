import { ServiceAccount } from 'firebase-admin';
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

export function initFirebase() {
   const adminConfig: ServiceAccount = JSON.parse(process.env.FIREBASE as string);

   admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
      databaseURL: 'https://feliz-2022-default-rtdb.firebaseio.com/',
   });
}
