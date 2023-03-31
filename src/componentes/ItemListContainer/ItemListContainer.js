import './style.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { getCategory, getItems } from '../../services/firestore'

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