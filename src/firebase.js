import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAZpCoW1HKY2diWQvseQLKz3Q5ecTaH-6Y",
    authDomain: "twitterclone-138ee.firebaseapp.com",
    projectId: "twitterclone-138ee",
    storageBucket: "twitterclone-138ee.appspot.com",
    messagingSenderId: "629203807016",
    appId: "1:629203807016:web:354af85d63e04e74d6fe1d",
    measurementId: "G-QJ0VG4MDGN"
}


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const analytics = getAnalytics(app);

export default db;