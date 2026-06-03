import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDA-5fo1a1vCLO_OGGIftwjnm4LCd8vFGc',
  authDomain: 'dc-esports-149dc.firebaseapp.com',
  projectId: 'dc-esports-149dc',
  storageBucket: 'dc-esports-149dc.firebasestorage.app',
  messagingSenderId: '1058919070576',
  appId: '1:1058919070576:web:b5a4d21e6f3198e7872db5'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
