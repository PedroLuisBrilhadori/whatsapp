import { ServiceAccount } from 'firebase-admin';
import * as admin from 'firebase-admin';

export function initFirebase() {
   const adminConfig: ServiceAccount = JSON.parse(process.env.FIREBASE as string);

   admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
      databaseURL: 'https://whats-grafica-default-rtdb.firebaseio.com/',
   });
}
