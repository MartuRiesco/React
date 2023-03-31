import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, query, where, doc, getDoc} from 'firebase/firestore'
/* import datos from '../datos.json' */
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
  const collectionRef= collection(db, "orders");
  const response= await addDoc(collectionRef,orderData)
  console.log("Orden creada")
  return (response.id)
 }
  export async function getItems(){
  const coleccionProductos = collection(db, "Productos");
let snapshotProductos= await getDocs(coleccionProductos);
const documents= snapshotProductos.docs;
const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
return dataProductos
}


 export async function getCategory(categoriaURL){
  const coleccionProductos = collection(db, "Productos");
  const q = query(coleccionProductos, where("categoria", "==", categoriaURL));
  let snapshotProductos= await getDocs(q);
const documents= snapshotProductos.docs;
const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
return dataProductos
}
 export async function getOneItem(idItem){
  const coleccionProductos = collection(db, "Productos");

  const docRef= doc(coleccionProductos,idItem )
  const docSnapshot= await getDoc(docRef)
  if (docSnapshot.exists()===false)
      throw new Error ("No existe el producto que busca!")
  
  return{ ...docSnapshot.data(), id: docSnapshot.id}
}

/*  export async function exportData(){
for (let item of datos){
  const collectionRef= collection(db, "Productos");
  const {id}=  await addDoc(collectionRef, item)
  console.log('documento creado', id)
}

 } */