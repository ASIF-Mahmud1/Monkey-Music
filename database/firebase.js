
import * as firebase from 'firebase';
import { firebaseConfig,  } from '../secret';

firebase.initializeApp(firebaseConfig);
export default firebase;