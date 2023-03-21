import './style.css'
import detalles from '../../detalles.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 



import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection} from 'firebase/firestore'
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

async function getOneItem(idItem){
    const coleccionProductos = collection(db, "Productos");

    const docRef= doc(coleccionProductos,idItem )
    const docSnapshot= await getDoc(docRef)
    if (docSnapshot.exists()===false)
        throw new Error ("No existe el producto que busca!")
    
    return{ ...docSnapshot.data(), id: docSnapshot.id}
}
/* function getOneItem(idItems){
    return new Promise ((response, reject)=>{
        setTimeout(() => {
            let encontrado = detalles.find((item)=> item.id === parseInt(idItems))
           if(encontrado !== undefined) response(encontrado)
           else reject ("No encontramos ese producto")
        },2000)
    })
} */
function ItemDetailContainer(){
    const [Productos, setProductos]= useState([])
    const params =  useParams();
    const idItem= params.idItem
        useEffect(()=>{
            getOneItem(idItem)
            .then((response)=>setProductos(response))
            .catch((error)=>alert(error))
        },[])
     console.log('productos', Productos);
    return(<><section>
    <ItemDetail   Prod={Productos}/>
    </section>
    </>

    )
}
export default ItemDetailContainer