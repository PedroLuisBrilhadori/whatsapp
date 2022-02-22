import * as admin from 'firebase-admin';
import { Reference } from '@firebase/database-types';

class FirebaseApp {
   private reference: Reference;

   constructor() {
      this.reference = admin.database().ref();
   }
}

export default new FirebaseApp();
