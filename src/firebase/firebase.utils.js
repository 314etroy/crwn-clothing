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
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // const userRef = firestore.doc('users/128fdashadu'); // Comanda folosita pentru testare utilizatori
    // const userRef = firestore.doc(`users/1230sajadmadwu`);
    // const collectionRef = firestore.collection('users');
    // console.log(userRef);

    const snapShot = await userRef.get();

    // const collectionSnapshot = await collectionRef.get();
    // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });
    // console.log(snapShot);
    // console.log(snapShot.data());

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
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

};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef, obj);
        console.log(newDocRef);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
        const { title, items } = docSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items
        };
    });

    // console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;