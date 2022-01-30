import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbQR-kUT3NpRWTUrdKRMrtyZ60_Qjc0xc",
  authDomain: "login-be3ae.firebaseapp.com",
  projectId: "login-be3ae",
  storageBucket: "login-be3ae.appspot.com",
  messagingSenderId: "374599375939",
  appId: "1:374599375939:web:d7cb8b8f6f10c7dc3248f6"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);