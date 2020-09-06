// import firebase, { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// if (!firebase.apps.length) {
//   initializeApp(firebaseConfig);
// }

// const firestore = firebase.firestore();
// const auth = firebase.auth();

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

// const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

// export { firebase as default, firestore, auth, signInWithGoogle };
