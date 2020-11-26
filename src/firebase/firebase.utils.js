import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyD9w1XVqyZCp0a_-P1YGYlkhQSf48QTAYY",
    authDomain: "crwn-db-b91bf.firebaseapp.com",
    databaseURL: "https://crwn-db-b91bf.firebaseio.com",
    projectId: "crwn-db-b91bf",
    storageBucket: "crwn-db-b91bf.appspot.com",
    messagingSenderId: "59411409183",
    appId: "1:59411409183:web:dbfd8b6461bb16a0e4e82a",
    measurementId: "G-MXPHNR4DNB"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // const userRef = firestore.doc('users/128fdashadu'); // Comanda folosita pentru testare utilizatori
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
    //console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;