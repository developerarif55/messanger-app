import firebase from 'firebase';
import 'firebase/auth';


const firebaseApp =firebase.initializeApp( {
  apiKey: "AIzaSyCvTPxeM0ZnhtaDyY-9Jmw-qdZLhraIC1I",
  authDomain: "messanger-app-718cf.firebaseapp.com",
  projectId: "messanger-app-718cf",
  storageBucket: "messanger-app-718cf.appspot.com",
  messagingSenderId: "590179224767",
  appId: "1:590179224767:web:f3528c40d040454cc40a0a",
  measurementId: "G-SLCPHLE6MX"
  });

  const db = firebaseApp.firestore();

  export default  db;

