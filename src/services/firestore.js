import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAZH2VEsVvYLBTnAIiwLyFaLaogpgyZ0Cc",
  authDomain: "react--coder-app.firebaseapp.com",
  projectId: "react--coder-app",
  storageBucket: "react--coder-app.appspot.com",
  messagingSenderId: "334595634252",
  appId: "1:334595634252:web:c4a06d0eda37c21e5270e9"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export async function createOrder (orderData){
  console.log("hola", orderData)
 }