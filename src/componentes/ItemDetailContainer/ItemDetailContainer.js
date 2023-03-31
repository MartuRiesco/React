import './style.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import { getOneItem } from '../../services/firestore'


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