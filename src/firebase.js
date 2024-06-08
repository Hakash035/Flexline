 import firebase from 'firebase'
 
 var firebaseConfig = {
    apiKey: "AIzaSyCGI560fCyBsjCy3FFdw1IurKemUO_aRyU",
    authDomain: "flexline-2a401.firebaseapp.com",
    projectId: "flexline-2a401",
    storageBucket: "flexline-2a401.appspot.com",
    messagingSenderId: "815519610240",
    appId: "1:815519610240:web:8671f79f5b08f858f7fd65",
    measurementId: "G-CD6STEG252"
  };

  const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const storage = app.storage();