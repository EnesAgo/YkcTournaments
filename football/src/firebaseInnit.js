import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCiiS3w8VI8nY2Deb8eg24B598JYb5h-uE",
    authDomain: "ykctournaments.firebaseapp.com",
    projectId: "ykctournaments",
    storageBucket: "ykctournaments.appspot.com",
    messagingSenderId: "100618514512",
    appId: "1:100618514512:web:71b90173e5d03baf562155"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firebaseInnitData = {
    app: app,
    db: db
}

export default firebaseInnitData;