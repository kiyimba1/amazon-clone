import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf4DAGSdtQAiZBBkGqW0v_0Nne-EOnDyo",
    authDomain: "clone-7ec17.firebaseapp.com",
    projectId: "clone-7ec17",
    storageBucket: "clone-7ec17.appspot.com",
    messagingSenderId: "587041003158",
    appId: "1:587041003158:web:33357ee08a29789187d4b7",
    measurementId: "G-LGCL453XCP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };