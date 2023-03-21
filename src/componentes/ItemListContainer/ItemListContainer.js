import './style.css'
import datos from '../../datos.json'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from "firebase/firestore";
//-------------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
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

 async function getItems(){
    const coleccionProductos = collection(db, "Productos");
let snapshotProductos= await getDocs(coleccionProductos);
const documents= snapshotProductos.docs;
const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
return dataProductos
}
async function getCategory(categoriaURL){
    const coleccionProductos = collection(db, "Productos");
    const q = query(coleccionProductos, where("categoria", "==", categoriaURL));
    let snapshotProductos= await getDocs(q);
const documents= snapshotProductos.docs;
const dataProductos= documents.map((doc)=> ({...doc.data(), id: doc.id}));
return dataProductos
}

/* function getItems(){
    return  new Promise ((response, reject) => {
        let error= false;
    setTimeout(()=>{
        if(error===true)
            reject ("Error trayendo los datos");
        response(datos);
    },3000);
    })}; */
   /*  function getCategory (categoriaURL) {
        return new Promise ((response, reject) => {
            setTimeout(()=>{
                let categoriaEncontrada = datos.filter((item)=> item.categoria === categoriaURL )
                response(categoriaEncontrada );
            },3000);
            })
        }; */


 function ItemListContainer(){
    const [Productos, setProductos]= useState([])
    const [isLoading, setIsLoading]= useState(true)
    const params = useParams()
 const idCategoria = params.idCategoria;
 async function leerDatos(){
    if (idCategoria === undefined){
        let respuesta = await getItems();
        setProductos(respuesta)
        setIsLoading(false)
    }else{
        setIsLoading(true)
        let respuesta =  await getCategory(idCategoria);
        setProductos(respuesta)
        setIsLoading(false)
    }
 }      
   useEffect(()=>{
    leerDatos();
   }, [idCategoria]);
  

   return(<>
   <div className='items'>
{/* <h2 className='texto'>{greeting}</h2> */}
<section className='bienvenida'>
    { isLoading?
   <Loader/>
    :
<ItemList   Prod={Productos}/>
    }

</section>
</div>


</>
    )
 }
 export default ItemListContainer