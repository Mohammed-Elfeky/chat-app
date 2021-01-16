import firebase from 'firebase'
const firebaseConfig = {
    // apiKey: "AIzaSyB-_lebRAxFGDdZyucF-0S_LwVPunkUtIQ",
    // authDomain: "test-308b0.firebaseapp.com",
    // databaseURL: "https://test-308b0.firebaseio.com",
    // projectId: "test-308b0",
    // storageBucket: "test-308b0.appspot.com",
    // messagingSenderId: "218325214932",
    // appId: "1:218325214932:web:ee6fccd40342271b387d41",
    // measurementId: "G-BPCQ22XTL8"
    apiKey: "AIzaSyD5bdPxGZsmLfsP-buA2IVsVqUOg1OCe2Y",
    authDomain: "test-2-692c5.firebaseapp.com",
    projectId: "test-2-692c5",
    storageBucket: "test-2-692c5.appspot.com",
    messagingSenderId: "750578086901",
    appId: "1:750578086901:web:a05f894043fedc80f726bc",
    measurementId: "G-HXPGJ0GLBX"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
//    export const storage = firebase.storage();