import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAt-Df1yZamI4ZE5pnIv9aaThzurSVMBWo',
    authDomain: 'scb-hackathon-winner.firebaseapp.com',
    databaseURL: 'https://scb-hackathon-winner.firebaseio.com',
    projectId: 'scb-hackathon-winner',
    storageBucket: 'scb-hackathon-winner.appspot.com',
    messagingSenderId: '95973758128',
    appId: '1:95973758128:web:c2ae25b5bfc75164',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();