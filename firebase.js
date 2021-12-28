import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA8Hpv7NMAP9pAIarrNjLhTGWdZ_VNF1Rw",
  authDomain: "superchatfirebaseproject.firebaseapp.com",
  projectId: "superchatfirebaseproject",
  storageBucket: "superchatfirebaseproject.appspot.com",
  messagingSenderId: "37692916990",
  appId: "1:37692916990:web:098eeb02ab521d329851af"
};

const firebaseApp = initializeApp(firebaseConfig)


const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getFirestore();

console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQq', firebaseDB);

export {firebaseAuth, firebaseDB};

