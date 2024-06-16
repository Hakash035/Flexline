 import firebase from 'firebase'
 
 var firebaseConfig = {
    // Firebase Configs
  };

  const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const storage = app.storage();
