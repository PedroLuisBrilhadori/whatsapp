// index for app

import app from './app';
import { initFirebase } from './firebase/firebase.config';

initFirebase();
app.run();
