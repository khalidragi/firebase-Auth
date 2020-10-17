import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAGiOp5JlAdDJQ2x7w4i77b-Ehy8n1OhFU',
  authDomain: 'fir-auth-895bc.firebaseapp.com',
  databaseURL: 'https://fir-auth-895bc.firebaseio.com',
  projectId: 'fir-auth-895bc',
  storageBucket: 'fir-auth-895bc.appspot.com',
  messagingSenderId: '747405020959',
  appId: '1:747405020959:web:c9754cef27cffad788aa2a',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
